import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDistrictAndCity1546312524278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "district" ("id" integer NOT NULL, "name" text NOT NULL, "slug" text NOT NULL, "type" text NOT NULL, "nameWithType" text NOT NULL, "cityId" integer, CONSTRAINT "PK_ee5cb6fd5223164bb87ea693f1e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city" ("id" integer NOT NULL, "name" text NOT NULL, "slug" text NOT NULL, "type" text NOT NULL, "nameWithType" text NOT NULL, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "district" ADD CONSTRAINT "FK_148f1c944d0fec4114a54984da1" FOREIGN KEY ("cityId") REFERENCES "city"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "district" DROP CONSTRAINT "FK_148f1c944d0fec4114a54984da1"`);
        await queryRunner.query(`DROP TABLE "city"`);
        await queryRunner.query(`DROP TABLE "district"`);
    }

}
