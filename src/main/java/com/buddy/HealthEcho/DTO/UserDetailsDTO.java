package com.buddy.HealthEcho.DTO;

import java.sql.Date;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }
}
