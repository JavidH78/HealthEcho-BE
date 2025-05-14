package com.buddy.HealthEcho.service;

import com.buddy.HealthEcho.DTO.UserDetailsDTO;
import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.UserRepository;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    public ResponseEntity<?> registerUser(User user) {
        Optional<User> opt = Optional.of(new User());
        if(opt.isPresent()) {
            userRepository.save(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        }
        return new ResponseEntity<>("Error!", HttpStatus.BAD_REQUEST);
    }

        public ResponseEntity<?> fetchdashboarddetails(Long user_id) {
            Optional<User> opt = userRepository.findById(user_id);
            if (opt.isPresent()) {
                User user = opt.get();
                UserDetailsDTO userDetails = new UserDetailsDTO(user.getName(), user.getAge(), user.getBlood_group(), user.getGender(), user.getDob());
                Gson gson = new Gson();
                String jsonResponse = gson.toJson(userDetails);
                return new ResponseEntity<>(jsonResponse, HttpStatus.OK);
            }

            return new ResponseEntity<>("Data Not Found!", HttpStatus.NOT_FOUND);
        }


    }
