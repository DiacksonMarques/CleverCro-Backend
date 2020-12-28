import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Service } from './entities/Service';
import { ServiceService } from './services/service.service';
import { ServiceController } from './controller/service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  providers: [ServiceService],
  controllers: [ServiceController],
})
export class ServiceModule { }
