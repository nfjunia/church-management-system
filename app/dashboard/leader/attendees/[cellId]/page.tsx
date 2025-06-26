import AttendanceList from "@/components/leader/AttendeesList";
import Header from "@/components/leader/Header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    cellId: string;
  };
};

export default async function Page({ params }: Props) {
  const { cellId } = await params;
  return (
    <div className="flex items-center py-16 bg-neutral-100 min-h-screen w-full justify-center">
      <Link
        href={"/dashboard/leader"}
        className="flex px-3.5 py-1.5 shadow bg-white border rounded-md absolute top-4 left-5 items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </Link>{" "}
      <div className="w-full max-w-[1300px] mt-8 mx-auto">
        <AttendanceList />
      </div>
    </div>
  );
}
