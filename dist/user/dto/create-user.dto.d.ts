import { Role } from 'src/auth/roles/role';
export declare class CreateUserDto {
    id: string;
    fullName: string;
    email: string;
    roles: Role;
    createdAt: Date;
    updatedAt: Date;
}
