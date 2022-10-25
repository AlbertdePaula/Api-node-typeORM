import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Part {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
    code: number;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column()
    area: string;

    @Column()
    createdFor: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;
}