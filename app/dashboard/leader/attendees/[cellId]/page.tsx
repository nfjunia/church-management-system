import AttendanceList from "@/components/leader/AttendeesList";
import Header from "@/components/leader/Header";
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
      <Header />
      <div className="w-full max-w-[1300px] mt-8 mx-auto">
        <AttendanceList />
      </div>
    </div>
  );
}
