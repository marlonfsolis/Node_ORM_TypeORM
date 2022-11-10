import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Permission {
    @PrimaryColumn({type:"varchar", length: 100})
    name: string | undefined

    @Column({type:"varchar", length: 1000})
    description: string | undefined
}
