package com.globalconstruction.portal.attendance.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.globalconstruction.portal.attendance.entity.AttendanceApprovalStatus;
import com.globalconstruction.portal.attendance.entity.AttendanceSource;
import com.globalconstruction.portal.attendance.entity.AttendanceStatus;

public class AttendanceResponse {

    private String attendanceId;
    private String employeeId;
    private String siteId;
    private LocalDate attendanceDate;
    private AttendanceStatus attendanceStatus;
    private LocalDateTime checkInTime;
    private LocalDateTime checkOutTime;
    private BigDecimal regularHours;
    private BigDecimal halfDayHours;
    private String remarks;
    private AttendanceSource source;
    private String approvedBy;
    private LocalDateTime approvedAt;
    private AttendanceApprovalStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public AttendanceResponse() {
    }

    public String getAttendanceId() {
        return attendanceId;
    }

    public void setAttendanceId(String attendanceId) {
        this.attendanceId = attendanceId;
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

    public LocalDateTime getApprovedAt() {
        return approvedAt;
    }

    public void setApprovedAt(LocalDateTime approvedAt) {
        this.approvedAt = approvedAt;
    }

    public AttendanceApprovalStatus getStatus() {
        return status;
    }

    public void setStatus(AttendanceApprovalStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}