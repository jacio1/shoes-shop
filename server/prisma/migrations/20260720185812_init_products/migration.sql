-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "brand" VARCHAR(100) NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "sex" VARCHAR(50) NOT NULL,
    "size" VARCHAR(10) NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "photo" VARCHAR(500),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
