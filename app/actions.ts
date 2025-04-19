// app/actions.ts
"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/db";
import { parseWithZod } from "@conform-to/zod";
import { companySchema } from "@/app/lib/zodSchemas";
import { revalidatePath } from "next/cache";

export async function EditCompany(_prev: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "geraldmetohu@gmail.com") {
    return redirect("/");
  }

  // 1) pull out the companyId
  const companyId = formData.get("companyId") as string;
  if (!companyId) throw new Error("Missing companyId");

  // 2) validate just the updatable fields
  const submission = parseWithZod(formData, { schema: companySchema });
  if (submission.status !== "success") return submission.reply();

  const { name, address, isClient } = submission.value;

  // 3) update
  await prisma.company.update({
    where: { id: companyId },
    data: {
      name,
      address: address || null,
      isClient,
    },
  });

  // 4) revalidate & redirect
  revalidatePath("/dashboard/companies");
  redirect("/dashboard/companies");
}

export async function CreateCompany(_prev: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");

  // 1) validate the incoming form
  const submission = parseWithZod(formData, { schema: companySchema });
  if (submission.status !== "success") return submission.reply();

  const { name, address, isClient } = submission.value;

  // 2) create — NO `id` field needed, Prisma will auto‑generate via uuid()
  await prisma.company.create({
    data: {
      name,
      address: address || null,
      isClient,
      userId: user.id,
    },
  });

  // 3) revalidate & redirect
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
