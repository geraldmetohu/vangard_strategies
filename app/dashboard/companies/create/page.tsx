"use client";

import { CreateCompany } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { companySchema } from "@/app/lib/zodSchemas";  // new schema for companies
import { SubmitButton } from "@/app/componets/SubmitButtons";
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

            <div className="flex items-center gap-3">
              <Switch
                id={fields.isClient.id}
                name={fields.isClient.name}
                defaultChecked={fields.isClient.initialValue as boolean}
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
