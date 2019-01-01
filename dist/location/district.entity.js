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
const city_entity_1 = require("./city.entity");
let District = class District {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], District.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], District.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], District.prototype, "slug", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], District.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], District.prototype, "nameWithType", void 0);
__decorate([
    typeorm_1.ManyToOne(() => city_entity_1.City, (city) => city.districts),
    __metadata("design:type", city_entity_1.City)
], District.prototype, "city", void 0);
District = __decorate([
    typeorm_1.Entity()
], District);
exports.District = District;
//# sourceMappingURL=district.entity.js.map