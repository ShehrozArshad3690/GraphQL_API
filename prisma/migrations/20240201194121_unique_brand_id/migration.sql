/*
  Warnings:

  - A unique constraint covering the columns `[brandId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Made the column `brandId` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_brandId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "brandId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_brandId_key" ON "Post"("brandId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
