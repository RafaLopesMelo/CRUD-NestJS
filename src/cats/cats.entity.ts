import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    breed: string;
}