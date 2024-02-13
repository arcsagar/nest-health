import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { healthuser } from "../healthuser/healthuser.entity";

@Entity('appointments')

export class appointment extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'this is appointment unique id'
    })
    id: number;

    @Column({
        type: "varchar"
    })
    title: string;

    @Column({
        type:  "varchar"
    })
    startStr: string;

    @Column({
        type: "varchar"
    })
    endStr: string;

    @Column({
        type:  "varchar"
    })
    start: string;

    @Column({
        type: "varchar"
    })
    end: string;

    
    @Column({
        type:"boolean"
    })
    allDay: boolean

    @Column({
        type:"boolean"
    })
    isDeleted: boolean
    
    @Column({
        type:"boolean",
        default: false
    })
    isBooked: boolean
    
    @Column({
        type: "int"
    })
    doctorId: number
    
    @ManyToOne(type => healthuser)
    @JoinColumn()
    healthuser: healthuser

}