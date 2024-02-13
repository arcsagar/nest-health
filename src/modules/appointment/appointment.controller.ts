import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Public } from 'src/auth/auth-public.strategy';
import { HealthUserDto } from '../healthuser/healthUser.dto';
import { AppointmentDTO } from './appointment.dto';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
    constructor(private appointmentServ: AppointmentService){}

    @Public()
    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async  createAppointment(@Body() apointmentData: AppointmentDTO) {
        return await this.appointmentServ.createNewAppointment(apointmentData)
    }

    @Public()
    @Get('/')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async  getAllAppointment() {
        return await this.appointmentServ.allAppointment()
    }
}
