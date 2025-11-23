package com.buddy.HealthEcho.controller;

import com.buddy.HealthEcho.dto.HealthLogsDTO;
import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.UserRepository;
import com.buddy.HealthEcho.service.HealthLogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health-logs")
public class HealthLogsController {

    @Autowired
    @Qualifier("healthLogsServiceImpl")
    public HealthLogsService healthLogsService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/makehealthlog")
    public ResponseEntity<?> noteHealthLog(@AuthenticationPrincipal UserDetails userDetails, @RequestBody HealthLogsDTO note) {

        String email = userDetails.getUsername();

        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        return healthLogsService.noteHealthLog(user.getUserId(), note);
    }
}
