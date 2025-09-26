import { Goal, Prisma } from '@prisma/client';
import { GoalService } from './goal.service';
export declare class GoalController {
    private readonly goalService;
    constructor(goalService: GoalService);
    create(goalData: Prisma.GoalCreateInput): Promise<Goal>;
    findAll(): Promise<Goal[]>;
    findByUser(id: string): Promise<Goal>;
}
