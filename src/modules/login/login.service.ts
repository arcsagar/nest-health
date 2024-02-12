import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { healthuser } from '../healthuser/healthuser.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/loginUser.dto';

@Injectable()
export class LoginService {
 
    constructor(
        @InjectRepository(healthuser) private loginRepository: Repository<healthuser>
    ){
        
    }

    async userLoginMethod(user: LoginUserDto) {
        return await this.loginRepository.findOne({where: { email: user.email, password: user.password}})
    }

    // async createNewUser(user: HealthUserDto) {
    //     return await this.loginRepository.save(user)
    // }
}
