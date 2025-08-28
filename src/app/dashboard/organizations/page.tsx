import { CreateOrganizationDialog } from "@/components/dashboard/create-organization-dialog";
import { OrganizationCard } from "@/components/dashboard/organization-card";

const organizations = [
  {
    name: "Innovate Inc.",
    description: "Dedicated to pushing the boundaries of technology and innovation.",
    members: [
      {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        avatar: "https://picsum.photos/seed/a/40/40",
      },
      {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        avatar: "https://picsum.photos/seed/b/40/40",
      },
      {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        avatar: "https://picsum.photos/seed/c/40/40",
      },
    ],
  },
    {
    name: "QuantumLeap",
    description: "Exploring the next generation of computing.",
    members: [
      {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        avatar: "https://picsum.photos/seed/a/40/40",
      },
      {
        id: 4,
        name: "Diana",
        email: "diana@example.com",
        avatar: "https://picsum.photos/seed/d/40/40",
      },
    ],
  },
];

export default function OrganizationsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Organizations</h1>
          <p className="text-muted-foreground">
            Your teams and collaborative structures.
          </p>
        </div>
        <CreateOrganizationDialog />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <OrganizationCard key={org.name} organization={org} />
        ))}
      </div>
    </div>
  );
}
