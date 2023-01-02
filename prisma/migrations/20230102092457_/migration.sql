/*
  Warnings:

  - A unique constraint covering the columns `[id,triggerId]` on the table `Automation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,actionId]` on the table `Automation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId]` on the table `Automation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Automation_id_triggerId_actionId_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Automation_id_triggerId_key" ON "Automation"("id", "triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "Automation_id_actionId_key" ON "Automation"("id", "actionId");

-- CreateIndex
CREATE UNIQUE INDEX "Automation_id_userId_key" ON "Automation"("id", "userId");
