package com.buddy.HealthEcho.controller;

import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.UserRepository;
import com.buddy.HealthEcho.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/fetchdashboarddetails")
    public ResponseEntity<?> fetchDashboardDetails(@AuthenticationPrincipal UserDetails userDetails) {
        // username in our setup is the email
        String email = userDetails.getUsername();

        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        // now call service using the authenticated user's id
        return userService.fetchDashboardDetails(user.getUserId());
    }
}