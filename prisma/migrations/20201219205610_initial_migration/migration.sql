-- CreateTable
CREATE TABLE "Job" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Job.title_unique" ON "Job"("title");
