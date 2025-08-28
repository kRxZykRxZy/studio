"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function CreateOrganizationDialog() {
  const [logo, setLogo] = useState<File | null>(null);
  const { toast } = useToast();

  const handleCreate = () => {
    // Here you would handle the upload to Firebase Storage
    // and then create the organization in Firestore.
    console.log("Creating organization...");
    toast({
      title: "Organization Created",
      description: "Your new organization has been created successfully.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Organization
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Create Organization</DialogTitle>
          <DialogDescription>
            Give your new organization a name, description, and an optional logo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Organization Name</Label>
            <Input
              id="name"
              placeholder="My Awesome Company"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="A short description of your organization."
            />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="logo">Logo</Label>
            <div className="flex items-center gap-4">
              <Input
                id="logo"
                type="file"
                className="hidden"
                onChange={(e) => setLogo(e.target.files?.[0] ?? null)}
              />
              <Label
                htmlFor="logo"
                className="cursor-pointer flex-grow inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary/10"
              >
                <Upload className="mr-2 h-4 w-4" />
                {logo ? "Change logo" : "Upload logo"}
              </Label>
              {logo && (
                <div className="text-sm text-muted-foreground truncate w-40" title={logo.name}>
                  {logo.name}
                </div>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" className="bg-primary hover:bg-primary/90" onClick={handleCreate}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
