package com.buddy.HealthEcho.dto;

import com.buddy.HealthEcho.model.User;
import lombok.Data;

import java.time.LocalDate;

@Data
public class HealthLogsDTO {
    private LocalDate logDate;
    private String symptom;
    private String medication;
    private String exercise;
    private String diet;
    private String blood_glucose;
    private String blood_pressure;
    private String oxygen_saturation;
    private Integer pulse_rate;
    private Long steps;
    private Double water_intake;
    private Double sleep_cycle;

}
