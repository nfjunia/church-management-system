"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface User {
  id: string;
  name: string;
  email: string;
  attended: boolean;
  status?: "pending" | "confirmed";
}

export default function AttendanceList() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Ray Clarke", email: "ray.c@acme.com", attended: true },
    {
      id: "2",
      name: "Jessica Taylor",
      email: "jessica.t@acme.com",
      attended: false,
    },
    {
      id: "3",
      name: "Nathan Foster",
      email: "nathan.f@acme.com",
      attended: true,
    },
    {
      id: "4",
      name: "Catherine Reynolds",
      email: "catherine.r@acme.com",
      attended: false,
    },
    {
      id: "5",
      name: "Olivia Knight",
      email: "jonathan.m@acme.com",
      attended: true,
    },
  ]);

  const handleAttendanceToggle = (userId: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, attended: !user.attended } : user
      )
    );
  };

  const attendedCount = users.filter((user) => user.attended).length;
  const totalCount = users.length;

  const handleSubmitAttendance = async () => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success(
        `Successfully recorded attendance for ${attendedCount} of ${totalCount} attendees.`,
        {
          style: { backgroundColor: "#093317", color: "white" },
          duration: 4000,
        }
      );
    } catch (error) {
      toast.error(
        "There was an error submitting the attendance. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Cell Attendance
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            {attendedCount} of {totalCount} attendees present
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">
            {attendedCount}
          </div>
          <div className="text-sm text-gray-500">Members attended</div>
        </div>
      </div>

      <Card className="divide-y divide-gray-100">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors"
          >
            <div className="flex items-center space-x-3 flex-1">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.name}
                  </p>
                </div>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <Label
                  htmlFor={`attendance-${user.id}`}
                  className={`text-sm font-medium ${
                    user.attended ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {user.attended ? "Present" : "Absent"}
                </Label>
              </div>
              <Switch
                id={`attendance-${user.id}`}
                checked={user.attended}
                onCheckedChange={() => handleAttendanceToggle(user.id)}
                disabled={user.status === "pending"}
                className="data-[state=checked]:bg-green-600"
              />
            </div>
          </div>
        ))}
      </Card>
      <div className="">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={handleSubmitAttendance}
            disabled={isSubmitting}
            className="w-full h-12 bg-[#0fa2f7] cursor-pointer hover:bg-[#03a1fc] text-base font-medium"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <p className="flex items-center gap-2.5">
                {" "}
                <Send />
                <span>Submit Attendance</span>
              </p>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
