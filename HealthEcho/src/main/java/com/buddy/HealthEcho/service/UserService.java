package com.buddy.HealthEcho.service;

import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public ResponseEntity<?> registerUser(User user) {
        Optional<User> opt = Optional.of(new User());
        if(opt.isPresent()) {
            userRepository.save(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        }
            return new ResponseEntity<>("Error!", HttpStatus.BAD_REQUEST);
    }

}
