"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { companySchema } from "@/app/lib/zodSchemas";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { SubmitButton } from "../SubmitButtons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

interface EditCompanyFormProps {
  data: {
    id: string;
    name: string;
    address?: string;
    isClient: boolean;
  };
}

export function EditCompanyForm({ data }: EditCompanyFormProps) {
  const [lastResult, action] = useActionState(EditCompany, undefined);
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
      <input type="hidden" name="companyId" value={data.id} />

      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="icon">
          <Link href="/dashboard/companies">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">Edit Company</h1>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
          <CardDescription>Update the information for this company.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-3">
              <Label htmlFor={fields.name.id}>Name</Label>
              <Input
                id={fields.name.id}
                name={fields.name.name}
                defaultValue={data.name}
                placeholder="Company Name"
                className="w-full"
              />
              {fields.name.errors && (
                <p className="text-red-500">{fields.name.errors}</p>
              )}
            </div>

            {/* Address */}
            <div className="flex flex-col gap-3">
              <Label htmlFor={fields.address.id}>Address</Label>
              <Input
                id={fields.address.id}
                name={fields.address.name}
                defaultValue={data.address || ""}
                placeholder="Company Address (optional)"
                className="w-full"
              />
              {fields.address.errors && (
                <p className="text-red-500">{fields.address.errors}</p>
              )}
            </div>

            {/* Is Client */}
            <div className="flex flex-col gap-3">
              <Label htmlFor={fields.isClient.id}>Is Client</Label>
              <Switch
                id={fields.isClient.id}
                name={fields.isClient.name}
                defaultChecked={data.isClient}
              />
              {fields.isClient.errors && (
                <p className="text-red-500">{fields.isClient.errors}</p>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <SubmitButton text="Save Company" />
        </CardFooter>
      </Card>
    </form>
  );
}
function EditCompany(state: undefined): Promise<undefined> | undefined {
    throw new Error("Function not implemented.");
}

