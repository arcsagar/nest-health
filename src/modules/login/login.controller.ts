import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginUserDto } from './dto/loginUser.dto';
// import { HealthUserDto } from './dto/healthUser.dto';

@Controller('login')
export class LoginController {
    constructor(public loginServ: LoginService) {

    }
    @Get('/')
    userLogin() {
        // return this.loginServ.userLoginMethod('test')
    }

    @Post('/')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async  createUser(@Body() userdata: LoginUserDto) {
        return await this.loginServ.userLoginMethod(userdata)
    }

   
}
