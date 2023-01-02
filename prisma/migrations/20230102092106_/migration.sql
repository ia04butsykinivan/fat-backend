/*
  Warnings:

  - A unique constraint covering the columns `[id,triggerId,actionId,userId]` on the table `Automation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Automation_id_triggerId_actionId_userId_key" ON "Automation"("id", "triggerId", "actionId", "userId");
