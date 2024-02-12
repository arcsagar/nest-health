import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('healthusers')

export class healthuser extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'this is user unique id'
    })
    id: number;

    @Column({
        type: "varchar"
    })
    username: string;

    @Column({
        type:  "varchar"
    })
    email: string;

    @Column({
        type: "varchar"
    })
    password: string;

    @Column({
        type: "enum",
        enum: ['admin','patient', 'doctor'],
        default: 'patient'
    })
    userType: string
    
    @Column({
        type:"boolean"
    })
    isActive: true


}