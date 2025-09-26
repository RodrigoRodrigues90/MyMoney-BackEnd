import { ExpenseService } from './expense.service';
import { Expenses, Prisma } from '@prisma/client';
export declare class ExpenseController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    create(expenseData: Prisma.ExpensesCreateInput): Promise<Expenses>;
    findAllByUser(id: string): Promise<Expenses[]>;
    findOne(id: string): Promise<{
        id: string;
        userId: string;
        category: string;
        description: string;
        value: number;
        registrationDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, expenseData: Prisma.ExpensesUpdateInput): Promise<Expenses>;
    remove(id: string): Promise<Expenses>;
}
