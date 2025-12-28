import { PrismaClient } from '@prisma/client';
import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');

const adapter = new PrismaBetterSQLite3({ url: dbPath });

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;