"use client";
import Header from "@/components/leader/Header";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [hasCell, setHasCell] = useState(false);
  const [cellId, setCellId] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserCell = async () => {
      const userHasCell = true;
      const fakeCellId = "100";

      if (userHasCell) {
        setCellId(fakeCellId);
        setHasCell(true);
      }

      setLoading(false);
    };

    fetchUserCell();
  }, []);

  useEffect(() => {
    if (!loading && hasCell && cellId) {
      router.push(`/dashboard/leader/attendees/${cellId}`);
    }
  }, [loading, hasCell, cellId, router]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-neutral-100">
        <Header />
        <div className="text-center mt-10 text-gray-600">
          Checking for cell...
        </div>
      </div>
    );
  }

  if (!hasCell) {
    return (
      <div className="w-full min-h-screen flex items-center bg-neutral-100">
        <Header />
        <div className="max-w-md mx-auto mt-10 px-5">
          <div>
            <Image
              src={require("../../../../public/assets/empty-folder.png")}
              alt="empty_icon"
              className="mx-auto"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-xl font-bold text-center">No Cell Found</h2>
            <p className="text-gray-600 text-center">
              You haven’t created a cell yet. Start by creating one to begin
              adding and managing attendees.
            </p>
            <div className="flex justify-center ">
              <Link
                href="/dashboard/leader"
                className="inline-block bg-[#03a1fc] px-8 py-2 rounded-md text-white text-center"
              >
                Create Cell
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-neutral-100">
      <Header />
      <div className="text-center mt-10 text-gray-700">
        Redirecting to your cell attendees...
      </div>
    </div>
  );
};

export default page;
