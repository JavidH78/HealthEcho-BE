package com.buddy.HealthEcho.repo;

import com.buddy.HealthEcho.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
