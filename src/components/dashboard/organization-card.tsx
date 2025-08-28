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
import { Building, Plus, Trash2, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";


type Member = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

type Organization = {
  name: string;
  description: string;
  logo?: string;
  members: Member[];
};

export function OrganizationCard({ organization }: { organization: Organization }) {
  const { name, description, members, logo } = organization;
  const visibleMembers = members.slice(0, 3);
  const remainingMembers =
    members.length - visibleMembers.length;

  return (
    <Card className="flex flex-col transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader className="flex flex-row items-start gap-4">
        {logo ? (
            <Image
              src={logo}
              alt={`${name} logo`}
              width={48}
              height={48}
              className="rounded-lg border"
              data-ai-hint="logo"
            />
        ) : (
          <div className="p-3 bg-muted rounded-lg border">
            <Building className="text-primary w-6 h-6" />
          </div>
        )}
        <div className="flex-grow">
          <CardTitle>
            {name}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex -space-x-2">
          <TooltipProvider>
            {visibleMembers.map((m) => (
              <Tooltip key={m.id}>
                <TooltipTrigger>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src={m.avatar} alt={m.name} data-ai-hint="person face" />
                    <AvatarFallback>{m.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{m.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
          {remainingMembers > 0 && (
            <Avatar className="border-2 border-background">
              <AvatarFallback>+{remainingMembers}</AvatarFallback>
            </Avatar>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
        <span>{members.length} members</span>
        <ManageMembersDialog members={members} />
      </CardFooter>
    </Card>
  );
}

function ManageMembersDialog({
  members,
}: {
  members: Member[];
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
            <Users className="h-5 w-5" /> Manage Members
          </DialogTitle>
          <DialogDescription>
            Add or remove members from this organization.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-2">
            <Input id="email" type="email" placeholder="member@example.com" />
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
              Current Members ({members.length})
            </h3>
            {members.map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={m.avatar} alt={m.name} data-ai-hint="person face"/>
                    <AvatarFallback>{m.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-sm text-muted-foreground">{m.email}</p>
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
                      <p>Remove {m.name}</p>
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
