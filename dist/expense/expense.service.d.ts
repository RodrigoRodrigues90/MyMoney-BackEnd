import { Expenses, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class ExpenseService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ExpensesCreateInput): Promise<Expenses>;
    findAllByUser(userid: string): Promise<Expenses[]>;
    findOne(where: Prisma.ExpensesWhereUniqueInput): Promise<Expenses | null>;
    update(params: {
        where: Prisma.ExpensesWhereUniqueInput;
        data: Prisma.ExpensesUpdateInput;
    }): Promise<Expenses>;
    remove(where: Prisma.ExpensesWhereUniqueInput): Promise<Expenses>;
}
