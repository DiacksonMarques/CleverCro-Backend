import { Body, Get, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Attendance } from '../entities/Attendance';

@Injectable()
export class AttendanceService {
    constructor(
        @InjectRepository(Attendance) private attendanceRepo: Repository<Attendance>,
    ) { }

    @Get()
    async getAll() {
        return await this.attendanceRepo.find();
    }

    async create(body: Attendance) {
        const newService = await this.attendanceRepo.create(body);
        return this.attendanceRepo.save(newService);
    }
}
