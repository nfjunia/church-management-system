"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CellLeader {
  id: string;
  name: string;
  cellGroup: string;
  status: "submitted" | "pending";
  submissionTiming: string;
  dataQuality: number;
}

export default function Reporting() {
  const cellLeaders: CellLeader[] = [
    {
      id: "1",
      name: "John Smith",
      cellGroup: "Alpha Cell",
      status: "submitted",
      submissionTiming: "On time",
      dataQuality: 100,
    },
    {
      id: "2",
      name: "Mary Johnson",
      cellGroup: "Beta Cell",
      status: "submitted",
      submissionTiming: "1 day late",
      dataQuality: 95,
    },
    {
      id: "3",
      name: "David Wilson",
      cellGroup: "Gamma Cell",
      status: "submitted",
      submissionTiming: "On time",
      dataQuality: 90,
    },
    {
      id: "4",
      name: "Sarah Brown",
      cellGroup: "Delta Cell",
      status: "pending",
      submissionTiming: "3 days overdue",
      dataQuality: 0,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1300px] m-8 rounded-md bg-white text-gray-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Cell Leader Reporting Status
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Track submission status and data quality by cell leader
          </p>
        </div>

        {/* Cell Leader Cards */}
        <div className="space-y-4">
          {cellLeaders.map((leader) => (
            <Card
              key={leader.id}
              className="bg-white border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                {/* Left Section - Name and Cell */}
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {leader.name}
                      </h3>
                      <Badge
                        variant={
                          leader.status === "submitted"
                            ? "default"
                            : "destructive"
                        }
                        className={
                          leader.status === "submitted"
                            ? "bg-[#30961c]/15 hover:bg-green-700 text-[#30961c]"
                            : "bg-red-600/15 hover:bg-red-700 text-red-600"
                        }
                      >
                        {leader.status === "submitted"
                          ? "Submitted"
                          : "Pending"}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      {leader.cellGroup}
                    </p>
                  </div>
                </div>

                {/* Right Section - Status, Quality, Contact */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="text-right">
                    <div className="text-gray-900 font-medium">
                      {leader.submissionTiming}
                    </div>
                    <div className="text-gray-500 text-sm">Submission</div>
                  </div>

                  <div className="w-full sm:w-32">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 font-bold text-lg">
                        {leader.dataQuality}%
                      </span>
                    </div>
                    <Progress
                      value={leader.dataQuality}
                      className="h-2 bg-gray-200"
                    />
                  </div>

                  <Button
                    variant="outline"
                    className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
