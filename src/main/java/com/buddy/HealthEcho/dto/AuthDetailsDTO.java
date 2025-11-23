package com.buddy.HealthEcho.dto;

import lombok.Data;

@Data
public class AuthDetailsDTO {
    private String token;
    private String tokenType = "Bearer";
    private String subject;


    public AuthDetailsDTO() {
    }

    public AuthDetailsDTO(String token, String subject) {
        this.token = token;
        this.subject = subject;
    }
}