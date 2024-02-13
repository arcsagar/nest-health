import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appointment } from './appointment.entity';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([appointment])
    ],
    providers: [AppointmentService],
    controllers: [AppointmentController],
    exports: [AppointmentService]
  })
export class AppointmentModule {}
