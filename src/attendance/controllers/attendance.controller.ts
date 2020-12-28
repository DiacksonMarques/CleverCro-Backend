import { Controller, Post, Get, Body } from '@nestjs/common';

import { AttendanceService } from '../services/attendance.service';
import { Attendance } from '../entities/Attendance';

@Controller('attendance')
export class AttendanceController {
    constructor(
        private attendanceserviceService: AttendanceService
    ) { }

    @Get()
    findAll() {
        return this.attendanceserviceService.getAll();
    }

    @Post()
    create(@Body() body: Attendance) {
        return this.attendanceserviceService.create(body);
    }
}