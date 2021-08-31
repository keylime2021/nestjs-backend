import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'test'})
export class TestEntity {

    @PrimaryGeneratedColumn('uuid')
    hashid:string;

    @Column()
    name: String;

    @Column()
    type: boolean;

    @Column()
    date: Date;

}