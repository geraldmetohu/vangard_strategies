"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { companySchema } from "@/app/lib/zodSchemas";  // make sure this is the right import name
import { CreateCompany } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { SubmitButton } from "@/app/componets/SubmitButtons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

export default function CompanyCreateRoute() {
  const [lastResult, action] = useActionState(CreateCompany, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: companySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="icon">
          <Link href="/dashboard/companies">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Company</h1>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
          <CardDescription>Enter your company’s information</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-3">
              <Label htmlFor={fields.name.id}>Name</Label>
              <Input
                id={fields.name.id}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                placeholder="Company Name"
              />
              <p className="text-red-500">{fields.name.errors}</p>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-3">
              <Label htmlFor={fields.address.id}>Address</Label>
              <Input
                id={fields.address.id}
                name={fields.address.name}
                defaultValue={fields.address.initialValue}
                placeholder="Street, City, ZIP"
              />
              <p className="text-red-500">{fields.address.errors}</p>
            </div>

            {/* Is Client */}
            <div className="flex items-center gap-3">
              <Switch
                id={fields.isClient.id}
                name={fields.isClient.name}
                defaultChecked={fields.isClient.initialValue === "true"}
              />
              <Label htmlFor={fields.isClient.id}>Is Client?</Label>
            </div>
            <p className="text-red-500">{fields.isClient.errors}</p>
          </div>
        </CardContent>

        <CardFooter>
          <SubmitButton text="Create Company" />
        </CardFooter>
      </Card>
    </form>
  );
}
