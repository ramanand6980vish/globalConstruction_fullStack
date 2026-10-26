package com.globalconstruction.portal.attendance.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.globalconstruction.portal.attendance.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, String> {

    List<Attendance> findByEmployeeId(String employeeId);

    List<Attendance> findBySiteId(String siteId);

    List<Attendance> findByAttendanceDate(LocalDate attendanceDate);

    List<Attendance> findByEmployeeIdAndAttendanceDate(
            String employeeId,
            LocalDate attendanceDate
    );

    Optional<Attendance> findByEmployeeIdAndAttendanceDateAndSiteId(
            String employeeId,
            LocalDate attendanceDate,
            String siteId
    );
}