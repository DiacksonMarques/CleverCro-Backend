import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Service } from '../../service/entities/Service';

@Entity('attendance')
export class Attendance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal')
    price: number;

    @Column('decimal')
    duration: number;

    @ManyToMany(() => Service)
    @JoinTable()
    service_id: Service[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}