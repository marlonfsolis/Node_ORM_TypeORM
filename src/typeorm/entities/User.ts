import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column({type:"varchar"})
    firstName: string | undefined

    @Column({type:"varchar"})
    lastName: string | undefined
}
