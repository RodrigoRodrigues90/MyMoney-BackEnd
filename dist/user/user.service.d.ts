import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<CreateUserDto>;
    findAll(): Promise<UserDto[]>;
    findOne(where: Prisma.UserWhereUniqueInput): Promise<UserDto | null>;
    findOneByAuth(where: Prisma.UserWhereUniqueInput): Promise<User | null>;
    update(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<UserDto>;
    remove(where: Prisma.UserWhereUniqueInput): Promise<void>;
}
