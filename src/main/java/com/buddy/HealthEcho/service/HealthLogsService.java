package com.buddy.HealthEcho.service;

import com.buddy.HealthEcho.dto.HealthLogsDTO;
import org.springframework.http.ResponseEntity;

public interface HealthLogsService {

    ResponseEntity<?> noteHealthLog(Long id, HealthLogsDTO note);

}