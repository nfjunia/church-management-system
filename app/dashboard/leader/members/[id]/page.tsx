import Header from "@/components/leader/Header";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="w-full bg-neutral-100 min-h-screen pt-16">
      <Link
        href={"/dashboard/leader/members"}
        className="flex px-3.5 py-1.5 shadow bg-white border rounded-md absolute top-4 left-5 items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </Link>{" "}
      <div className="w-full px-5 max-w-[1300px] mx-auto">
        <div className="bg-white w-full lg:w-[500px] mx-auto py-2.5 md:p-6 mt-8 rounded-md">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-semibold text-black">
              Edit A Member
            </CardTitle>
            <CardDescription className="text-neutral-600 mb-2 font-medium">
              Grow Your Cell, One Soul at a Time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Full name" />
            <Input placeholder="Phone Number" type="tel" />
            <Input placeholder="Email (optional)" />
            <Input placeholder="Address/Location" />
            <div>
              <Select>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 flex-wrap pt-4">
              <Button className="flex-1 bg-[#0fa2f7] cursor-pointer hover:bg-[#03a1fc] text-white">
                <Send className="w-4 h-4 mr-2" />
                <span>Add Edit</span>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default page;
