package com.buddy.HealthEcho.service;

import com.buddy.HealthEcho.dto.LoginDetailsDTO;
import com.buddy.HealthEcho.model.User;
import org.springframework.http.ResponseEntity;

public interface AuthService {

    ResponseEntity<?> registerUser(User user);

    ResponseEntity<?> loginUser(LoginDetailsDTO loginDto);
}
