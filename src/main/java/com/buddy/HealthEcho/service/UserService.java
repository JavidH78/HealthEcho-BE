package com.buddy.HealthEcho.service;

import com.buddy.HealthEcho.DTO.LoginDetailsDTO;
import com.buddy.HealthEcho.DTO.UserDetailsDTO;
import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {

    ResponseEntity<?> registerUser(User user);

    ResponseEntity<?> loginUser(LoginDetailsDTO user);

    ResponseEntity<?> fetchDashboardDetails(Long id);
}
