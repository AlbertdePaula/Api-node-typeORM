import { 
    BaseEntity,
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,     
} from "typeorm";

@Entity()
export class Engine extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
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