package com.buddy.HealthEcho.controller;

import com.buddy.HealthEcho.DTO.HealthLogsDTO;
import com.buddy.HealthEcho.service.HealthLogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/health-logs")
public class HealthLogsController implements HealthLogsService {


    @Autowired
    @Qualifier("healthLogsServiceImpl")
    public HealthLogsService healthLogsService;

    @PostMapping("/makehealthlog")
    public ResponseEntity<?> noteHealthLog(@RequestBody HealthLogsDTO note, @RequestParam Long id) {
        return healthLogsService.noteHealthLog(note, id);
    }
}
