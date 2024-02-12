import { Get, Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './login.service';
import { healthuser } from '../healthuser/healthuser.entity';

@Module({
  controllers: [LoginController],
  imports: [TypeOrmModule.forFeature([healthuser])],
  providers: [LoginService]
})
export class LoginModule {


}
