package com.buddy.HealthEcho.service;

import com.buddy.HealthEcho.DTO.HealthLogsDTO;
import org.springframework.http.ResponseEntity;

public interface HealthLogsService {

    ResponseEntity<?> noteHealthLog(HealthLogsDTO note, Long id);

}