package com.buddy.HealthEcho.serviceImpl;

import com.buddy.HealthEcho.dto.AuthDetailsDTO;
import com.buddy.HealthEcho.dto.LoginDetailsDTO;
import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.UserRepository;
import com.buddy.HealthEcho.security.JwtUtil;
import com.buddy.HealthEcho.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;

    public AuthServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, JwtUtil jwtUtil, AuthenticationManager authenticationManager, UserDetailsService userDetailsService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public ResponseEntity<?> registerUser(User user) {
        boolean userExists = userRepository.existsByEmail(user.getEmail()) || userRepository.existsByPhoneNumber(user.getPhoneNumber());

        if (userExists) {
            return new ResponseEntity<>("User already exists!", HttpStatus.CONFLICT);
        }

        // encode password and save
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User saved = userRepository.save(user);

        Map<String, Object> body = new HashMap<>();
        body.put("message", "User registered successfully!");
        body.put("user_id", saved.getUserId());
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> loginUser(LoginDetailsDTO loginDto) {
        // Authenticate via AuthenticationManager so Spring Security flow is used
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));
        } catch (BadCredentialsException | DisabledException | LockedException ex) {
            // You may refine messages per exception type
            return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
        }

        // load user details and generate token
        final UserDetails userDetails = userDetailsService.loadUserByUsername(loginDto.getEmail());
        final String token = jwtUtil.generateToken(userDetails.getUsername());

        Optional<User> userID = userRepository.findByEmail(loginDto.getEmail());

        User user = userID.get();

        // return a typed DTO (or map) with token info
        AuthDetailsDTO response = new AuthDetailsDTO(token, user.getUserId().toString());
        return ResponseEntity.ok(response);
    }
}
