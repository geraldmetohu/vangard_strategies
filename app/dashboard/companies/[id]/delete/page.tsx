// app/dashboard/companies/[id]/delete/page.tsx

import { DeleteCompany } from "@/app/actions";
import { SubmitButton } from "@/app/componets/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteCompanyRoute({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="h-[88vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this company?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete this
            company and all related data.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant="secondary" asChild>
            <Link href="/dashboard/companies">Cancel</Link>
          </Button>
          <form action={DeleteCompany}>
            <input type="hidden" name="companyId" value={params.id} />
            <SubmitButton variant="destructive" text="Delete Company" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
