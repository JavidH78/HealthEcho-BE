package com.buddy.HealthEcho.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CurrentTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;


@Entity
@Data
@Table(name = "health_logs")
public class HealthLogs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long logId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user_id;

    @Column(name = "log_date", nullable = false)
    private LocalDate logDate;

    @Column(name = "symptom", nullable = false)
    private String symptom;

    @Column(name = "medication", nullable = false)
    private String medication;

    @Column(name = "exercise", nullable = false)
    private String exercise;


    @Column(name = "diet", nullable = false)
    private String diet;

    @Column(name = "blood_glucose")
    private String blood_glucose;

    @Column(name = "blood_pressure")
    private String blood_pressure;

    @Column(name = "oxygen_saturation", nullable = false)
    private String oxygen_saturation;

    @Column(name = "pulse_rate", nullable = false)
    private Integer pulse_rate;

    @Column(name = "steps", nullable = false)
    private Long steps;

    @Column(name = "water_intake", nullable = false)
    private Double water_intake;

    @Column(name = "sleep_cycle", nullable = false)
    private Double sleep_cycle;

    @Column(name = "created_at", updatable = false)
    @CurrentTimestamp
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @CurrentTimestamp
    private LocalDateTime updatedAt;

    public Long getLogId() {
        return logId;
    }

    public void setLogId(Long logId) {
        this.logId = logId;
    }

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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
