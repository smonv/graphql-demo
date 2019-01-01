"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class InitDistrictAndCity1546312524278 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "district" ("id" integer NOT NULL, "name" text NOT NULL, "slug" text NOT NULL, "type" text NOT NULL, "nameWithType" text NOT NULL, "cityId" integer, CONSTRAINT "PK_ee5cb6fd5223164bb87ea693f1e" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "city" ("id" integer NOT NULL, "name" text NOT NULL, "slug" text NOT NULL, "type" text NOT NULL, "nameWithType" text NOT NULL, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "district" ADD CONSTRAINT "FK_148f1c944d0fec4114a54984da1" FOREIGN KEY ("cityId") REFERENCES "city"("id")`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "district" DROP CONSTRAINT "FK_148f1c944d0fec4114a54984da1"`);
            yield queryRunner.query(`DROP TABLE "city"`);
            yield queryRunner.query(`DROP TABLE "district"`);
        });
    }
}
exports.InitDistrictAndCity1546312524278 = InitDistrictAndCity1546312524278;
//# sourceMappingURL=1546312524278-InitDistrictAndCity.js.map