import { IsNotEmpty, Length } from "class-validator";

export class HealthUserDto {
    @IsNotEmpty({message: "user can not be empty"})
    @Length(3.255)
    username: string;

    @IsNotEmpty({message: "user can not be email"})
    @Length(3.255)
    email: string;

    @IsNotEmpty({message: "user can not be password"})
    @Length(3.255)
    password: string;





}