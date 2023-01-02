/*
  Warnings:

  - You are about to drop the column `username` on the `Connection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Connection" DROP COLUMN "username",
ADD COLUMN     "chatId" TEXT;
