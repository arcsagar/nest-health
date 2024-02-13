import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constant";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,

    });
  }

  async validate(payload: any) {
    console.log('payload',payload)
    return { userId: payload.sub, email: payload.email, type: payload.type };
  }
}