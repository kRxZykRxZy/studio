"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FileText, Plus, Trash2, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Collaborator = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

type Workspace = {
  name: string;
  description: string;
  collaborators: Collaborator[];
  updatedAt: string;
};

export function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  const { name, description, collaborators, updatedAt } = workspace;
  const visibleCollaborators = collaborators.slice(0, 3);
  const remainingCollaborators =
    collaborators.length - visibleCollaborators.length;

  return (
    <Card className="flex flex-col transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="text-primary" />
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex -space-x-2">
          <TooltipProvider>
            {visibleCollaborators.map((c) => (
              <Tooltip key={c.id}>
                <TooltipTrigger>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src={c.avatar} alt={c.name} data-ai-hint="person face" />
                    <AvatarFallback>{c.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{c.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
          {remainingCollaborators > 0 && (
            <Avatar className="border-2 border-background">
              <AvatarFallback>+{remainingCollaborators}</AvatarFallback>
            </Avatar>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
        <span>Updated {updatedAt}</span>
        <ManageCollaboratorsDialog collaborators={collaborators} />
      </CardFooter>
    </Card>
  );
}

function ManageCollaboratorsDialog({
  collaborators,
}: {
  collaborators: Collaborator[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Users className="mr-2 h-4 w-4" />
          Manage
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" /> Manage Collaborators
          </DialogTitle>
          <DialogDescription>
            Add or remove collaborators from this workspace.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-2">
            <Input id="email" type="email" placeholder="collaborator@example.com" />
            <Button
              type="button"
              size="sm"
              className="bg-primary hover:bg-primary/90 shrink-0"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
          <div className="space-y-3 mt-4 max-h-60 overflow-y-auto pr-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Current Collaborators ({collaborators.length})
            </h3>
            {collaborators.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={c.avatar} alt={c.name} data-ai-hint="person face" />
                    <AvatarFallback>{c.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.email}</p>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Remove {c.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
