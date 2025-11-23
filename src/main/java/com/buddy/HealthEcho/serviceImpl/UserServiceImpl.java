package com.buddy.HealthEcho.serviceImpl;

import com.buddy.HealthEcho.dto.UserDetailsDTO;
import com.buddy.HealthEcho.model.User;
import com.buddy.HealthEcho.repo.UserRepository;
import com.buddy.HealthEcho.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Example: fetch dashboard details (pure user-domain logic)
    @Override
    public ResponseEntity<?> fetchDashboardDetails(Long user_id) {
        Optional<User> opt = userRepository.findById(user_id);
        if (opt.isPresent()) {
            User user = opt.get();
            UserDetailsDTO userDetails = new UserDetailsDTO(user.getName(), user.getAge(), user.getPhoneNumber(), user.getBlood_group(), user.getGender(), user.getDob());

            return new ResponseEntity<>(userDetails, HttpStatus.OK);
        }

        return new ResponseEntity<>("Data Not Found!", HttpStatus.NOT_FOUND);
    }

}
