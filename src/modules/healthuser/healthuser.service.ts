import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HealthUserDto } from './healthUser.dto';
import { healthuser } from './healthuser.entity';

@Injectable()
export class HealthuserService {

    constructor(
        @InjectRepository(healthuser) private healthUserRepository: Repository<healthuser>
    ){
        
    }

    userLoginMethod(user: any) {
        return {name: 'login'}
    }

    async findOne(user: any): Promise<any> {
      
        return await this.healthUserRepository.findOne({where: { email: user.email, password: user.password}})
      }

    async createNewUser(user: HealthUserDto) {
        return await this.healthUserRepository.save(user)
    }

    async getAllHealthUser() {
        return await this.healthUserRepository.find();
    }
}
