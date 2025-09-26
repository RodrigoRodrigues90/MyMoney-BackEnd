import { Goal, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class GoalService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.GoalCreateInput): Promise<Goal>;
    findAll(): Promise<Goal[]>;
    findByUser(userId: string): Promise<Goal>;
}
