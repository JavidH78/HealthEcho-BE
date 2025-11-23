package com.buddy.HealthEcho.serviceImpl;

import com.buddy.HealthEcho.dto.HealthLogsDTO;
import com.buddy.HealthEcho.model.HealthLogs;
import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.HealthLogsRepository;
import com.buddy.HealthEcho.repo.UserRepository;
import com.buddy.HealthEcho.service.HealthLogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HealthLogsServiceImpl implements HealthLogsService {

    @Autowired
    private HealthLogsRepository healthRepo;
    @Autowired
    private UserRepository userRepo;

    public ResponseEntity<?> noteHealthLog(Long id, HealthLogsDTO note) {

        // Check if the user exists
        Optional<User> user = userRepo.findById(id);
        if (user.isEmpty()) {
            return new ResponseEntity<>("User Not Found", HttpStatus.NOT_FOUND);
        }
        HealthLogs healthLogs = new HealthLogs();
        healthLogs.setUser_id(user.get());
        healthLogs.setLogDate(note.getLogDate());
        healthLogs.setSymptom(note.getSymptom());
        healthLogs.setMedication(note.getMedication());
        healthLogs.setExercise(note.getExercise());
        healthLogs.setDiet(note.getDiet());
        healthLogs.setBlood_glucose(note.getBlood_glucose());
        healthLogs.setBlood_pressure(note.getBlood_pressure());
        healthLogs.setOxygen_saturation(note.getOxygen_saturation());
        healthLogs.setPulse_rate(note.getPulse_rate());

        healthRepo.save(healthLogs);
        return new ResponseEntity<>("Health Log Saved Successfully", HttpStatus.CREATED);

    }
}