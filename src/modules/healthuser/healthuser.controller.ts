import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { HealthUserDto } from './healthUser.dto';
import { HealthuserService } from './healthuser.service';
import { Public } from 'src/auth/auth-public.strategy';

@Controller('healthuser')
export class HealthuserController {

    constructor(private healthuserServ: HealthuserService){}
    

    @Public()
    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async  createUser(@Body() userdata: HealthUserDto) {
        return await this.healthuserServ.createNewUser(userdata)
    }


    @Get('/allUser')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async getallUser() {
        return await this.healthuserServ.getAllHealthUser()
    }
}
