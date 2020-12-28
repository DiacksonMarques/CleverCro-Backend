import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Service } from '../entities/Service';

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service) private serviceRepo: Repository<Service>,
    ) { }

    getAll() {
        return this.serviceRepo.find();
    }

    getById(id: string) {
        return this.serviceRepo.findOne(id);
    }

    async create(body: Service) {
        const newService = await this.serviceRepo.create(body);
        return this.serviceRepo.save(newService);
    }

    async update(id: string, body: Service) {
        const serviceId = await this.serviceRepo.findOne(id);
        this.serviceRepo.merge(serviceId, body);
        return this.serviceRepo.save(serviceId);
    }

    async delete(id: string) {
        await this.serviceRepo.delete(id);
        return true;
    }
}
