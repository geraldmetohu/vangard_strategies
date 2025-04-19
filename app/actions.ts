"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "./lib/db";
import { parseWithZod } from "@conform-to/zod";
import { companySchema } from "./lib/zodSchemas";
import { revalidatePath } from "next/cache";

export async function EditCompany(_prev: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "geraldmetohu@gmail.com") {
    return redirect("/");
  }

  // extract the id first
  const companyId = formData.get("companyId") as string;
  if (!companyId) throw new Error("Missing companyId");

  // validate only the updatable bits
  const submission = parseWithZod(formData, { schema: companySchema });
  if (submission.status !== "success") {
    return submission.reply();
  }
  const { name, address, isClient } = submission.value;

  await prisma.company.update({
    where: { id: companyId },
    data: {
      name,
      address: address || null,
      isClient,
    },
  });

  revalidatePath("/dashboard/companies");
  redirect("/dashboard/companies");
}

export async function CreateCompany(_prev: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");

  const submission = parseWithZod(formData, { schema: companySchema });
  if (submission.status !== "success") {
    return submission.reply();
  }
  const { name, address, isClient } = submission.value;

  await prisma.company.create({
    data: {
      name,
      address: address || null,
      isClient,
      userId: user.id,
    },
  });

  revalidatePath("/dashboard/companies");
  redirect("/dashboard/companies");
}

export async function DeleteCompany(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");

  const companyId = formData.get("companyId") as string;
  if (!companyId) throw new Error("Missing companyId");

  await prisma.company.delete({
    where: { id: companyId },
  });

  revalidatePath("/dashboard/companies");
  redirect("/dashboard/companies");
}
