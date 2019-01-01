"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const district_entity_1 = require("./district.entity");
let City = class City {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], City.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], City.prototype, "slug", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], City.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], City.prototype, "nameWithType", void 0);
__decorate([
    typeorm_1.OneToMany(() => district_entity_1.District, (district) => district.city, { cascade: true }),
    __metadata("design:type", Array)
], City.prototype, "districts", void 0);
City = __decorate([
    typeorm_1.Entity()
], City);
exports.City = City;
//# sourceMappingURL=city.entity.js.map