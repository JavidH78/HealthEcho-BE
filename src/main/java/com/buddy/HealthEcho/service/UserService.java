package com.buddy.HealthEcho.service;

import org.springframework.http.ResponseEntity;


public interface UserService {

    ResponseEntity<?> fetchDashboardDetails(Long id);
}
