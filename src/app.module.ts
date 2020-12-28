import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServiceModule } from './service/service.module';
import { AttendanceModule } from './attendance/attendance.module';

import { Service } from './service/entities/Service';
import { Attendance } from './attendance/entities/Attendance';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mesha',
      database: 'meshacro',
      entities: [Service, Attendance],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    ServiceModule,
    AttendanceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
