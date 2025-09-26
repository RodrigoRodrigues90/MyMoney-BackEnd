import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validate(username: string, password: string): Promise<{
        id: string;
        fullName: string;
        email: string;
        roles: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(user: any): Promise<{
        access_token: string;
        additional_information: {
            fullName: any;
            email: any;
            id: any;
        };
    }>;
}
