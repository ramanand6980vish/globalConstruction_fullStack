package com.globalconstruction.portal.attendance.mapper;

import com.globalconstruction.portal.attendance.dto.AttendanceRequest;
import com.globalconstruction.portal.attendance.dto.AttendanceResponse;
import com.globalconstruction.portal.attendance.entity.Attendance;

public final class AttendanceMapper {

    private AttendanceMapper() {
    }

    public static Attendance toEntity(AttendanceRequest request) {

        Attendance attendance = new Attendance();

        attendance.setEmployeeId(request.getEmployeeId());
        attendance.setSiteId(request.getSiteId());
        attendance.setAttendanceDate(request.getAttendanceDate());
        attendance.setAttendanceStatus(request.getAttendanceStatus());
        attendance.setCheckInTime(request.getCheckInTime());
        attendance.setCheckOutTime(request.getCheckOutTime());
        attendance.setRegularHours(request.getRegularHours());
        attendance.setHalfDayHours(request.getHalfDayHours());
        attendance.setRemarks(request.getRemarks());
        attendance.setSource(request.getSource());
        attendance.setApprovedBy(request.getApprovedBy());

        return attendance;
    }

    public static AttendanceResponse toResponse(Attendance attendance) {

        AttendanceResponse response = new AttendanceResponse();

        response.setAttendanceId(attendance.getAttendanceId());
        response.setEmployeeId(attendance.getEmployeeId());
        response.setSiteId(attendance.getSiteId());
        response.setAttendanceDate(attendance.getAttendanceDate());
        response.setAttendanceStatus(attendance.getAttendanceStatus());
        response.setCheckInTime(attendance.getCheckInTime());
        response.setCheckOutTime(attendance.getCheckOutTime());
        response.setRegularHours(attendance.getRegularHours());
        response.setHalfDayHours(attendance.getHalfDayHours());
        response.setRemarks(attendance.getRemarks());
        response.setSource(attendance.getSource());
        response.setApprovedBy(attendance.getApprovedBy());
        response.setApprovedAt(attendance.getApprovedAt());
        response.setStatus(attendance.getStatus());
        response.setCreatedAt(attendance.getCreatedAt());
        response.setUpdatedAt(attendance.getUpdatedAt());

        return response;
    }
}