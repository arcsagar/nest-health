import { IsNotEmpty, Length } from "class-validator";

export class AppointmentDTO {
    @IsNotEmpty({message: "title can not be empty"})
    title: string;

    @IsNotEmpty({message: "startStr can not be empty"})
    startStr: string;

    @IsNotEmpty({message: "endStr can not be empty"})
    endStr: string;
    
    @IsNotEmpty({message: "start can not be empty"})
    start: string;

    @IsNotEmpty({message: "end can not be empty"})
    end: string;

    @IsNotEmpty({message: "isDelete can not be empty"})
    isDeleted: boolean;
    
    @IsNotEmpty({message: "allDay can not be empty"})
    allDay: boolean;

    @IsNotEmpty({message: "healthuser can not be empty"})
    healthuser: any;






}