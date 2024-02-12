import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HealthuserModule } from 'src/modules/healthuser/healthuser.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { healthuser } from 'src/modules/healthuser/healthuser.entity';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    HealthuserModule,
    TypeOrmModule.forFeature([healthuser]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
