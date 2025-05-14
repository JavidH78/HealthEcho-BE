package com.buddy.HealthEcho.controller;

import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
public class UserController implements UserService{

    @Autowired
    private UserService userService; // Assume you have a UserService to handle user-related logic

    // POST method to register a new user
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @GetMapping("/fetchdashboarddetails")
    public ResponseEntity<?> fetchdashboarddetails(Long id) {
        return userService.fetchdashboarddetails(id);
    }
}