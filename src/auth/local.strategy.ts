import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "./auth.service";
import { ContextIdFactory, ModuleRef } from "@nestjs/core";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService,private moduleRef: ModuleRef) {
    super({ usernameField: 'email',  passReqToCallback: true, });
  }

  async validate( request: Request,email: string, password: string): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(request);
    console.log('email',email, password)
    const authService = await this.moduleRef.resolve(AuthService, contextId);

    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}