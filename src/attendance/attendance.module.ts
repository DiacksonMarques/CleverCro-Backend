import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { AttendanceController } from './controllers/attendance.controller';
import { AttendanceService } from './services/attendance.service';
import { Attendance } from './entities/Attendance';

@Module({
  imports: [TypeOrmModule.forFeature([Attendance])],
  providers: [AttendanceService],
  controllers: [AttendanceController],
})
export class AttendanceModule { }
