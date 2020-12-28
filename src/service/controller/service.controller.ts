import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { ServiceService } from '../services/service.service';
import { Service } from '../entities/Service';

@Controller('service')
export class ServiceController {
    constructor(
        private serviceService: ServiceService
    ) { }

    @Get()
    findAll() {
        return this.serviceService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.serviceService.getById(id);
    }

    @Post()
    create(@Body() body: Service) {
        return this.serviceService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: Service) {
        return this.serviceService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.serviceService.delete(id);
    }
}
