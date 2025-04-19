import { prisma } from "@/app/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User2, Briefcase, Users } from "lucide-react";

async function getData() {
  const [userCount, companyCount, clientCount] = await Promise.all([
    prisma.user.count(),
    prisma.company.count(),
    prisma.company.count({ where: { isClient: true } }),
  ]);
  return { userCount, companyCount, clientCount };
}

export async function DashboardStats() {
  const { userCount, companyCount, clientCount } = await getData();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Total Users */}
      <Card>
        <CardHeader className="flex justify-between items-center p-2">
          <CardTitle>Total Users</CardTitle>
          <User2 className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{userCount}</p>
          <p className="text-xs text-muted-foreground">Users signed up</p>
        </CardContent>
      </Card>

      {/* Total Companies */}
      <Card>
        <CardHeader className="flex justify-between items-center p-2">
          <CardTitle>Total Companies</CardTitle>
          <Briefcase className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{companyCount}</p>
          <p className="text-xs text-muted-foreground">Companies registered</p>
        </CardContent>
      </Card>

      {/* Client Companies */}
      <Card>
        <CardHeader className="flex justify-between items-center p-2">
          <CardTitle>Client Companies</CardTitle>
          <Users className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{clientCount}</p>
          <p className="text-xs text-muted-foreground">Marked as clients</p>
        </CardContent>
      </Card>
    </div>
  );
}
