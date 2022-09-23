/*
  Warnings:

  - Added the required column `unitQuantity` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitSize` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Made the column `namespaceId` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Item` DROP FOREIGN KEY `Item_namespaceId_fkey`;

-- AlterTable
ALTER TABLE `Item` ADD COLUMN `unitQuantity` VARCHAR(191) NOT NULL,
    ADD COLUMN `unitSize` VARCHAR(191) NOT NULL,
    MODIFY `namespaceId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_namespaceId_fkey` FOREIGN KEY (`namespaceId`) REFERENCES `Namespace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
