package com.globalconstruction.portal.attendance.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.globalconstruction.portal.attendance.dto.AttendanceRequest;
import com.globalconstruction.portal.attendance.dto.AttendanceResponse;
import com.globalconstruction.portal.attendance.service.AttendanceService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:5173")
public class AttendanceController {

    private final AttendanceService attendanceService;

    public AttendanceController(
            AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @PostMapping
    public ResponseEntity<AttendanceResponse> createAttendance(
            @Valid @RequestBody AttendanceRequest request) {

        return new ResponseEntity<>(
                attendanceService.createAttendance(request),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AttendanceResponse>> getAllAttendance() {

        return ResponseEntity.ok(
                attendanceService.getAllAttendance());
    }

    @GetMapping("/{attendanceId}")
    public ResponseEntity<AttendanceResponse> getAttendanceById(
            @PathVariable String attendanceId) {

        return ResponseEntity.ok(
                attendanceService.getAttendanceById(attendanceId));
    }

    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<AttendanceResponse>>
    getAttendanceByEmployee(
            @PathVariable String employeeId) {

        return ResponseEntity.ok(
                attendanceService
                        .getAttendanceByEmployee(employeeId));
    }

    @GetMapping("/site/{siteId}")
    public ResponseEntity<List<AttendanceResponse>>
    getAttendanceBySite(
            @PathVariable String siteId) {

        return ResponseEntity.ok(
                attendanceService
                        .getAttendanceBySite(siteId));
    }

    @GetMapping("/date/{date}")
    public ResponseEntity<List<AttendanceResponse>>
    getAttendanceByDate(
            @PathVariable
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate date) {

        return ResponseEntity.ok(
                attendanceService
                        .getAttendanceByDate(date));
    }

    @PutMapping("/{attendanceId}")
    public ResponseEntity<AttendanceResponse> updateAttendance(
            @PathVariable String attendanceId,
            @Valid @RequestBody AttendanceRequest request) {

        return ResponseEntity.ok(
                attendanceService.updateAttendance(
                        attendanceId,
                        request));
    }

    @PutMapping("/{attendanceId}/approve")
    public ResponseEntity<AttendanceResponse> approveAttendance(
            @PathVariable String attendanceId,
            @RequestParam String approvedBy) {

        return ResponseEntity.ok(
                attendanceService.approveAttendance(
                        attendanceId,
                        approvedBy));
    }

    @DeleteMapping("/{attendanceId}")
    public ResponseEntity<Void> deleteAttendance(
            @PathVariable String attendanceId) {

        attendanceService.deleteAttendance(attendanceId);

        return ResponseEntity.noContent().build();
    }
}