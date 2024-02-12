import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HealthuserService } from 'src/modules/healthuser/healthuser.service';

@Injectable()
export class AuthService {

    constructor(private healthUser: HealthuserService, private jwtServ: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('validateUser', email)
    const user = await this.healthUser.findOne({email, password});
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('auth serv login',user)
    const payload = { email: user.email, sub: user.id, type: user.userType };
    return {
      access_token: this.jwtServ.sign(payload),
    };
  }
}
