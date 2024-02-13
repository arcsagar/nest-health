import { Body, Controller, Get, HttpCode, Post, UseGuards, UsePipes,Request, ValidationPipe } from '@nestjs/common';
import { Public } from 'src/auth/auth-public.strategy';
import { HealthUserDto } from '../healthuser/healthUser.dto';
import { AppointmentDTO } from './appointment.dto';
import { AppointmentService } from './appointment.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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

    @UseGuards(JwtAuthGuard)
    @Get('/')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async  getAllAppointment(@Request() req) {
        return await this.appointmentServ.allAppointment(req.user.userId)
    }
}
