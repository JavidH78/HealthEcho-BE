package com.buddy.HealthEcho.repo;

import com.buddy.HealthEcho.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmail(String email);

    boolean existsByPhoneNumber(Long phone_number);

    Optional<User> findByEmail(String email);
}
