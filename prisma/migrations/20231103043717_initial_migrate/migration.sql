-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nick" VARCHAR(8) NOT NULL,
    "name" VARCHAR(16) NOT NULL,
    "email" VARCHAR(32) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nick_key" ON "users"("nick");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
