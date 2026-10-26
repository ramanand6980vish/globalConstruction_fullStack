package com.globalconstruction.portal.attendance.service;

import java.time.LocalDate;
import java.util.List;

import com.globalconstruction.portal.attendance.dto.AttendanceRequest;
import com.globalconstruction.portal.attendance.dto.AttendanceResponse;

public interface AttendanceService {

    AttendanceResponse createAttendance(AttendanceRequest request);

    AttendanceResponse getAttendanceById(String attendanceId);

    List<AttendanceResponse> getAllAttendance();

    List<AttendanceResponse> getAttendanceByEmployee(String employeeId);

    List<AttendanceResponse> getAttendanceBySite(String siteId);

    List<AttendanceResponse> getAttendanceByDate(LocalDate date);

    AttendanceResponse updateAttendance(
            String attendanceId,
            AttendanceRequest request
    );

    AttendanceResponse approveAttendance(
            String attendanceId,
            String approvedBy
    );

    void deleteAttendance(String attendanceId);
}