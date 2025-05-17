package com.buddy.HealthEcho.repo;

import com.buddy.HealthEcho.model.HealthLogs;
import com.buddy.HealthEcho.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HealthLogsRepository extends JpaRepository<HealthLogs, Long> {

}
