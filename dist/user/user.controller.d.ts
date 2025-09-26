import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userData: Prisma.UserCreateInput): Promise<CreateUserDto>;
    findAll(): Promise<UserDto[]>;
    findOne(id: string): Promise<UserDto | null>;
    update(id: string, userData: Prisma.UserUpdateInput): Promise<UserDto>;
    remove(id: string): Promise<void>;
}
