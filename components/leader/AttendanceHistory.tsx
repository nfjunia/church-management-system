"use client";
import { Card, CardContent } from "@/components/ui/card";
import { record } from "zod";

type attendanceRecord = {
  date: string;
  description: string;
  attendees: number;
  status: "Submitted" | "pending";
};
export default function AttendanceHistory() {
  const attendanceRecords: attendanceRecord[] = [
    {
      date: "Dec 15, 2024",
      description: "Great worship session",
      attendees: 24,
      status: "pending",
    },
    {
      date: "Dec 8, 2024",
      description: "New visitor joined",
      attendees: 21,
      status: "Submitted",
    },
    {
      date: "Dec 1, 2024",
      description: "Prayer meeting focus",
      attendees: 23,
      status: "pending",
    },
    {
      date: "Nov 24, 2024",
      description: "Thanksgiving service",
      attendees: 19,
      status: "Submitted",
    },
    {
      date: "Nov 24, 2024",
      description: "Thanksgiving service",
      attendees: 19,
      status: "Submitted",
    },
    {
      date: "Nov 24, 2024",
      description: "Thanksgiving service",
      attendees: 19,
      status: "Submitted",
    },
    {
      date: "Nov 24, 2024",
      description: "Thanksgiving service",
      attendees: 19,
      status: "pending",
    },
  ];

  return (
    <div className="w-full mx-auto mt-8 rounded-md p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Recent Attendance History
        </h1>
        <p className="text-gray-600">Your last few submissions</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {attendanceRecords.map((record, index) => {
          return (
            <div
              key={index}
              className={`border ${
                record.status === "Submitted"
                  ? "border-l-[#30961c]"
                  : "border-l-[#fd7e14]"
              } border-l-4 p-4`}
            >
              <div className="w-full flex items-center justify-between">
                <h1>{record.date}</h1>
                <p
                  className={`text-xs rounded-xl flex items-center gap-1.5 px-2 py-0.5 ${
                    record.status === "Submitted"
                      ? "bg-[#30961c]/15 text-[#30961c]"
                      : "bg-[#fd7e14]/15 text-[#fd7e14]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 ${
                      record.status === "Submitted"
                        ? "bg-[#28a745]"
                        : "bg-[#fd7e14]"
                    } rounded-full`}
                  />
                  {record.status}
                </p>
              </div>
              <div className="w-full py-3">
                <hr className="" />
              </div>
              <div className="flex items-center w-full justify-between">
                <h1>Total Attendees:</h1>
                <span className="">{record.attendees}</span>
              </div>
              <div className="w-full py-3">
                <hr className="" />
              </div>
              <div className="w-full flex items-center justify-between">
                <h1>Note:</h1>
                <span className="font-light text-[14px]">
                  {record.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
