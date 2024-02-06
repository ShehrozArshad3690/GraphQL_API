/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `Brand` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_userId_fkey";

-- AlterTable
ALTER TABLE "Brand" ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Brand_userId_key" ON "Brand"("userId");

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
