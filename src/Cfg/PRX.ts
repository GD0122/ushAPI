import { PrismaClient as PrismaMongoDB } from '../../prisma/generated/client1';
import { PrismaClient as PrismaPostgreSQL } from '../../prisma/generated/client2'

export const prismaDb1 = new PrismaMongoDB();
  
  // Membuat instance Prisma Client untuk PostgreSQL
export  const prismaDb2 = new PrismaPostgreSQL({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

export const CID = process.env.CID_IMGUR