import { CreateWorkspaceDialog } from "@/components/dashboard/create-workspace-dialog";
import { WorkspaceCard } from "@/components/dashboard/workspace-card";

const workspaces = [
  {
    name: "Frontend Refactor",
    description: "Rebuilding the main client app with Next.js and Tailwind.",
    collaborators: [
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
    updatedAt: "2 hours ago",
  },
  {
    name: "API Gateway",
    description: "New GraphQL API gateway for mobile applications.",
    collaborators: [
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
      {
        id: 5,
        name: "Eve",
        email: "eve@example.com",
        avatar: "https://picsum.photos/seed/e/40/40",
      },
      {
        id: 6,
        name: "Frank",
        email: "frank@example.com",
        avatar: "https://picsum.photos/seed/f/40/40",
      },
    ],
    updatedAt: "1 day ago",
  },
  {
    name: "CI/CD Pipeline",
    description: "Automating build, test, and deployment processes.",
    collaborators: [
      {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        avatar: "https://picsum.photos/seed/b/40/40",
      },
    ],
    updatedAt: "3 days ago",
  },
  {
    name: "Design System",
    description: "Creating a unified component library for all products.",
    collaborators: [
      {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        avatar: "https://picsum.photos/seed/a/40/40",
      },
      {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        avatar: "https://picsum.photos/seed/c/40/40",
      },
      {
        id: 4,
        name: "Diana",
        email: "diana@example.com",
        avatar: "https://picsum.photos/seed/d/40/40",
      },
      {
        id: 5,
        name: "Eve",
        email: "eve@example.com",
        avatar: "https://picsum.photos/seed/e/40/40",
      },
      {
        id: 7,
        name: "Grace",
        email: "grace@example.com",
        avatar: "https://picsum.photos/seed/g/40/40",
      },
    ],
    updatedAt: "5 days ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Workspaces</h1>
          <p className="text-muted-foreground">
            Your collaborative code environments.
          </p>
        </div>
        <CreateWorkspaceDialog />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((ws) => (
          <WorkspaceCard key={ws.name} workspace={ws} />
        ))}
      </div>
    </div>
  );
}
