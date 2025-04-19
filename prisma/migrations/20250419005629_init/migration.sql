-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_user_id_fkey";

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
