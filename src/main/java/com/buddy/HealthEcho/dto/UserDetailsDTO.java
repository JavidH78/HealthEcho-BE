package com.buddy.HealthEcho.dto;

import lombok.Data;

@Data
public class UserDetailsDTO {
    private String name;
    private Integer age;
    private Long phoneNumber;
    private String bloodGroup;
    private String gender;
    private java.sql.Date dob;

    //fetchDashboardDetails API
    public UserDetailsDTO(String name, Integer age, Long phoneNumber, String bloodGroup, String gender, java.sql.Date dob) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.bloodGroup = bloodGroup;
        this.gender = gender;
        this.dob = dob;
    }

}
