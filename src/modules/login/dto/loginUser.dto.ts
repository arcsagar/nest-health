import { IsNotEmpty, Length } from "class-validator";

export class LoginUserDto {
 
    @IsNotEmpty({message: "user can not be email"})
    @Length(3.255)
    email: string;

    @IsNotEmpty({message: "user can not be password"})
    @Length(3.255)
    password: string;
}