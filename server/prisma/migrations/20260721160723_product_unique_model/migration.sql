/*
  Warnings:

  - A unique constraint covering the columns `[model]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "products_model_key" ON "products"("model");
