/*
  Warnings:

  - Added the required column `phones_number` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_image` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "phones_number" TEXT NOT NULL,
ADD COLUMN     "user_image" TEXT NOT NULL;
