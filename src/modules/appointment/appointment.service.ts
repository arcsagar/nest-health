import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { appointment } from './appointment.entity';
import { Repository } from 'typeorm';
import { AppointmentDTO } from './appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(appointment)
    private appointmentRepository: Repository<appointment>,
  ) {}
  async createNewAppointment(user: AppointmentDTO) {
    return await this.appointmentRepository.save(user);
  }

  async allAppointment(userId) {
    return await this.appointmentRepository.find({
      where: {
        doctorId: userId,
      },
      relations: {
        healthuser: true,
      },
    });
  }

  async getAllnotBookedAppointment() {
    return await this.appointmentRepository.find({
      where: {
        isBooked: false,
      },
      relations: {
        healthuser: true,
      },
    });
  }

  async bookAppointemnt(id, patientId) {
    const result = await this.appointmentRepository.update(
      { id , isBooked: false},
      { patientId, patientuser: patientId, isBooked: true },
    );
    return result.affected > 0; // Check if update was successful
  }

  async getAllBookedAppointmentPatient(patientId) {
    return await this.appointmentRepository.find({
      where: {
        isBooked: true,
        patientId
      },relations : ['patientuser', 'healthuser']
    });
  }
  async getAllBookedAppointmentDoctor(doctorId) {
    return await this.appointmentRepository.find({
      where: {
        isBooked: true,
        doctorId
      },relations : ['patientuser', 'healthuser']
    });
  }
}
