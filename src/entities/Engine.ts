import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Engine {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    tag: string;

    @Column()
    description: string;

    @Column()
    current: number;

    @Column()
    power: number;

    @Column()
    rpm: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;
}