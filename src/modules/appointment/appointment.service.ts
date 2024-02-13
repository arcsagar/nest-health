import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { appointment } from './appointment.entity';
import { Repository } from 'typeorm';
import { AppointmentDTO } from './appointment.dto';

@Injectable()
export class AppointmentService {
    constructor(
        @InjectRepository(appointment) private appointmentRepository: Repository<appointment>
    ){
        
    }
    async createNewAppointment(user: AppointmentDTO) {
        return await this.appointmentRepository.save(user)
    }

    async allAppointment() {
        return await this.appointmentRepository.find()
    }

}

