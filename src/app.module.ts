import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './modules/health/health.module';
import { LoginModule } from './modules/login/login.module';
import { typeOrmConfig } from './config/typeorm.config';
import { HealthuserModule } from './modules/healthuser/healthuser.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppointmentController } from './modules/appointment/appointment.controller';
import { AppointmentService } from './modules/appointment/appointment.service';
import { AppointmentModule } from './modules/appointment/appointment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    HealthModule,
    LoginModule,
    HealthuserModule,
    AuthModule,
    AppointmentModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
