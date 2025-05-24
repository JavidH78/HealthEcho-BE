package com.buddy.HealthEcho.ServiceImpl;

import com.buddy.HealthEcho.DTO.LoginDetailsDTO;
import com.buddy.HealthEcho.DTO.UserDetailsDTO;
import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.UserRepository;
import com.buddy.HealthEcho.service.UserService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    public ResponseEntity<?> registerUser(User user) {
        Optional<User> opt = Optional.of(new User());
        boolean userExists = userRepository.existsByEmail(user.getEmail()) ||
                             userRepository.existsByPhoneNumber(user.getPhoneNumber());
        if(!userExists) {
            userRepository.save(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        }
            return new ResponseEntity<>("User already exists!", HttpStatus.CONFLICT);
    }

    public ResponseEntity<?> loginUser(LoginDetailsDTO loginRequest) {
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());

        if (userOpt.isEmpty()) {
            return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
        }

        User user = userOpt.get();

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("user_id", user.getUserId());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

        public ResponseEntity<?> fetchDashboardDetails(Long user_id) {
            Optional<User> opt = userRepository.findById(user_id);
            if (opt.isPresent()) {
                User user = opt.get();
                UserDetailsDTO userDetails = new UserDetailsDTO(user.getName(), user.getAge(), user.getPhoneNumber(), user.getBlood_group(), user.getGender(), user.getDob());
                Gson gson = new Gson();
                String jsonResponse = gson.toJson(userDetails);
                return new ResponseEntity<>(jsonResponse, HttpStatus.OK);
            }

            return new ResponseEntity<>("Data Not Found!", HttpStatus.NOT_FOUND);
        }


    }
