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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const crypt_1 = require("./helper/crypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        data.password = await (0, crypt_1.generateHash)(data.password);
        const result = await this.prisma.user.create({ data });
        return {
            id: result.id,
            fullName: result.fullName,
            email: result.email,
            roles: result.roles,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
        };
    }
    async findAll() {
        const resultList = await this.prisma.user.findMany();
        const userList = [];
        resultList.forEach((result) => {
            const { password, ...user } = result;
            userList.push(user);
        });
        return userList;
    }
    async findOne(where) {
        const result = await this.prisma.user.findUnique({ where });
        const { password, ...user } = result;
        return user;
    }
    async findOneByAuth(where) {
        return this.prisma.user.findUnique({ where });
    }
    async update(params) {
        const { where, data } = params;
        if (data.password != null) {
            data.password = await (0, crypt_1.generateHash)(data.password.toString());
        }
        const result = await this.prisma.user.update({
            data,
            where,
        });
        const { password, ...user } = result;
        return user;
    }
    async remove(where) {
        await this.prisma.user.delete({ where });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map