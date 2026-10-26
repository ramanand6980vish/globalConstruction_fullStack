package com.globalconstruction.portal.attendance.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.globalconstruction.portal.attendance.dto.AttendanceRequest;
import com.globalconstruction.portal.attendance.dto.AttendanceResponse;
import com.globalconstruction.portal.attendance.entity.Attendance;
import com.globalconstruction.portal.attendance.entity.AttendanceApprovalStatus;
import com.globalconstruction.portal.attendance.mapper.AttendanceMapper;
import com.globalconstruction.portal.attendance.repository.AttendanceRepository;

@Service
@Transactional
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceServiceImpl(
            AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public AttendanceResponse createAttendance(
            AttendanceRequest request) {

        attendanceRepository
                .findByEmployeeIdAndAttendanceDateAndSiteId(
                        request.getEmployeeId(),
                        request.getAttendanceDate(),
                        request.getSiteId())
                .ifPresent(existing -> {
                    throw new RuntimeException(
                            "Attendance already exists for this employee, site and date");
                });

        Attendance attendance = AttendanceMapper.toEntity(request);

        attendance.setAttendanceId(
                "ATT-" + UUID.randomUUID());

        attendance.setStatus(
                AttendanceApprovalStatus.SUBMITTED);

        attendance.setApprovedAt(null);

        LocalDateTime now = LocalDateTime.now();

        attendance.setCreatedAt(now);
        attendance.setUpdatedAt(now);

        Attendance saved = attendanceRepository.save(attendance);

        return AttendanceMapper.toResponse(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public AttendanceResponse getAttendanceById(
            String attendanceId) {

        Attendance attendance = attendanceRepository
                .findById(attendanceId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Attendance not found: " + attendanceId));

        return AttendanceMapper.toResponse(attendance);
    }

    @Override
    @Transactional(readOnly = true)
    public List<AttendanceResponse> getAllAttendance() {

        return attendanceRepository.findAll()
                .stream()
                .map(AttendanceMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<AttendanceResponse> getAttendanceByEmployee(
            String employeeId) {

        return attendanceRepository
                .findByEmployeeId(employeeId)
                .stream()
                .map(AttendanceMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<AttendanceResponse> getAttendanceBySite(
            String siteId) {

        return attendanceRepository
                .findBySiteId(siteId)
                .stream()
                .map(AttendanceMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<AttendanceResponse> getAttendanceByDate(
            LocalDate date) {

        return attendanceRepository
                .findByAttendanceDate(date)
                .stream()
                .map(AttendanceMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public AttendanceResponse updateAttendance(
            String attendanceId,
            AttendanceRequest request) {

        Attendance attendance = attendanceRepository
                .findById(attendanceId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Attendance not found: " + attendanceId));

        attendance.setEmployeeId(request.getEmployeeId());
        attendance.setSiteId(request.getSiteId());
        attendance.setAttendanceDate(request.getAttendanceDate());
        attendance.setAttendanceStatus(
                request.getAttendanceStatus());
        attendance.setCheckInTime(request.getCheckInTime());
        attendance.setCheckOutTime(request.getCheckOutTime());
        attendance.setRegularHours(request.getRegularHours());
        attendance.setHalfDayHours(request.getHalfDayHours());
        attendance.setRemarks(request.getRemarks());
        attendance.setSource(request.getSource());

        attendance.setUpdatedAt(LocalDateTime.now());

        Attendance updated =
                attendanceRepository.save(attendance);

        return AttendanceMapper.toResponse(updated);
    }

    @Override
    public AttendanceResponse approveAttendance(
            String attendanceId,
            String approvedBy) {

        Attendance attendance = attendanceRepository
                .findById(attendanceId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Attendance not found: " + attendanceId));

        attendance.setStatus(
                AttendanceApprovalStatus.APPROVED);

        attendance.setApprovedBy(approvedBy);
        attendance.setApprovedAt(LocalDateTime.now());
        attendance.setUpdatedAt(LocalDateTime.now());

        Attendance updated =
                attendanceRepository.save(attendance);

        return AttendanceMapper.toResponse(updated);
    }

    @Override
    public void deleteAttendance(String attendanceId) {

        if (!attendanceRepository.existsById(attendanceId)) {
            throw new RuntimeException(
                    "Attendance not found: " + attendanceId);
        }

        attendanceRepository.deleteById(attendanceId);
    }
}