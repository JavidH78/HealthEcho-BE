package com.buddy.HealthEcho.DTO;

import com.buddy.HealthEcho.model.User;
import lombok.Data;
import java.time.LocalDate;

@Data
public class HealthLogsDTO {
    private User user_id;
    private LocalDate logDate;
    private String symptom;
    private String medication;
    private String exercise;
    private String diet;
    private String blood_glucose;
    private String blood_pressure;
    private String oxygen_saturation;
    private Integer pulse_rate;


    public User getUser_id() {
        return user_id;
    }

    public void setUser_id(User user_id) {
        this.user_id = user_id;
    }

    public LocalDate getLogDate() {
        return logDate;
    }

    public void setLogDate(LocalDate logDate) {
        this.logDate = logDate;
    }

    public String getSymptom() {
        return symptom;
    }

    public void setSymptom(String symptom) {
        this.symptom = symptom;
    }

    public String getMedication() {
        return medication;
    }

    public void setMedication(String medication) {
        this.medication = medication;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public String getDiet() {
        return diet;
    }

    public void setDiet(String diet) {
        this.diet = diet;
    }

    public String getBlood_glucose() {
        return blood_glucose;
    }

    public void setBlood_glucose(String blood_glucose) {
        this.blood_glucose = blood_glucose;
    }

    public String getBlood_pressure() {
        return blood_pressure;
    }

    public void setBlood_pressure(String blood_pressure) {
        this.blood_pressure = blood_pressure;
    }

    public String getOxygen_saturation() {
        return oxygen_saturation;
    }

    public void setOxygen_saturation(String oxygen_saturation) {
        this.oxygen_saturation = oxygen_saturation;
    }

    public Integer getPulse_rate() {
        return pulse_rate;
    }

    public void setPulse_rate(Integer pulse_rate) {
        this.pulse_rate = pulse_rate;
    }
}
