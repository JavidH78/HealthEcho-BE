package com.buddy.HealthEcho.DTO;

import lombok.Data;

@Data
public class UserDetailsDTO {
    private String name;
    private Integer age;
    private String bloodGroup;
    private String gender;
    private java.sql.Date dob;

    public UserDetailsDTO(String name, Integer age, String bloodGroup, String gender, java.sql.Date dob) {
        this.name = name;
        this.age = age;
        this.bloodGroup = bloodGroup;
        this.gender = gender;
        this.dob = dob;
    }
}
