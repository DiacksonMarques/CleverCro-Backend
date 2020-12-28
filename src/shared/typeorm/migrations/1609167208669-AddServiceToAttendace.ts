import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class AddServiceToAttendace1609167208669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'attendance',
            new TableColumn({
                name: 'service_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'attendance',
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'service',
                name: 'AttendanceService',
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('attendance', 'AttendanceService');
        await queryRunner.dropColumn('attendance', 'service_id');
    }

}
