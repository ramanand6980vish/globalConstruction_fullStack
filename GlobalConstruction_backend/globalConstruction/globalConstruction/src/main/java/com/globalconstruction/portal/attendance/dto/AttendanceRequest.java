package com.globalconstruction.portal.attendance.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.globalconstruction.portal.attendance.entity.AttendanceSource;
import com.globalconstruction.portal.attendance.entity.AttendanceStatus;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class AttendanceRequest {

    @NotBlank
    private String employeeId;

    @NotBlank
    private String siteId;

    @NotNull
    private LocalDate attendanceDate;

    @NotNull
    private AttendanceStatus attendanceStatus;

    private LocalDateTime checkInTime;

    private LocalDateTime checkOutTime;

    private BigDecimal regularHours;

    private BigDecimal halfDayHours;

    private String remarks;

    @NotNull
    private AttendanceSource source;

    private String approvedBy;

    public AttendanceRequest() {
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getSiteId() {
        return siteId;
    }

    public void setSiteId(String siteId) {
        this.siteId = siteId;
    }

    public LocalDate getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(LocalDate attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public AttendanceStatus getAttendanceStatus() {
        return attendanceStatus;
    }

    public void setAttendanceStatus(AttendanceStatus attendanceStatus) {
        this.attendanceStatus = attendanceStatus;
    }

    public LocalDateTime getCheckInTime() {
        return checkInTime;
    }

    public void setCheckInTime(LocalDateTime checkInTime) {
        this.checkInTime = checkInTime;
    }

    public LocalDateTime getCheckOutTime() {
        return checkOutTime;
    }

    public void setCheckOutTime(LocalDateTime checkOutTime) {
        this.checkOutTime = checkOutTime;
    }

    public BigDecimal getRegularHours() {
        return regularHours;
    }

    public void setRegularHours(BigDecimal regularHours) {
        this.regularHours = regularHours;
    }

    public BigDecimal getHalfDayHours() {
        return halfDayHours;
    }

    public void setHalfDayHours(BigDecimal halfDayHours) {
        this.halfDayHours = halfDayHours;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public AttendanceSource getSource() {
        return source;
    }

    public void setSource(AttendanceSource source) {
        this.source = source;
    }

    public String getApprovedBy() {
        return approvedBy;
    }

    public void setApprovedBy(String approvedBy) {
        this.approvedBy = approvedBy;
    }
}