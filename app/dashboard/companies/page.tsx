// app/dashboard/companies/page.tsx
import { prisma } from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Link from "next/link";

type CompanyWithUser = {
  id: string;
  name: string;
  address: string | null;
  isClient: boolean;
  createdAt: Date;
  user: { id: string; email: string } | null;
};

async function getData(): Promise<CompanyWithUser[]> {
  return prisma.company.findMany({
    include: { user: { select: { id: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });
}

export default async function CompaniesRoute() {
  const companies = await getData();

  return (
    <>
      <div className="flex justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/companies/create">
            <PlusCircle className="w-4 h-4" />
            <span>Add Company</span>
          </Link>
        </Button>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Companies</CardTitle>
          <CardDescription>
            Manage your companies and their owners
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Client?</TableHead>
                <TableHead>Owner Email</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {companies.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.address ?? "-"}</TableCell>
                  <TableCell>{c.isClient ? "Yes" : "No"}</TableCell>
                  <TableCell>{c.user?.email ?? "—"}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat("en-GB").format(c.createdAt)}
                  </TableCell>
                  <TableCell className="text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/companies/${c.id}/edit`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/companies/${c.id}/delete`}>
                            Delete
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
