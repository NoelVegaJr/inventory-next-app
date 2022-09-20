-- AlterTable
ALTER TABLE `Item` ADD COLUMN `namespaceId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_namespaceId_fkey` FOREIGN KEY (`namespaceId`) REFERENCES `Namespace`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
