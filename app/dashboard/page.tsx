// app/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User2 } from "lucide-react";
import { prisma } from "../lib/db";

export default async function Dashboard() {
  // grab counts from your new schema
  const [userCount, companyCount] = await Promise.all([
    prisma.user.count(),
    prisma.company.count(),
  ]);

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Total Users</CardTitle>
            <User2 className="h-6 w-6 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold">{userCount}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Total Companies</CardTitle>
            <Building2 className="h-6 w-6 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold">{companyCount}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
