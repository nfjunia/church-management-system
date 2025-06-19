import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock } from "lucide-react";

export default function Summary() {
  return (
    <div className="w-full max-w-[1300px] pb-16">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* This Week's Summary Card */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">
              This Week's Summary
            </CardTitle>
            <p className="text-sm text-gray-600">Attendance data overview</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 font-medium">
                Total Attendance
              </span>
              <span className="text-gray-900 font-semibold">284 people</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 font-medium">
                First Time Visitors
              </span>
              <span className="text-gray-900 font-semibold">12 people</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 font-medium">
                Mobile Attendants
              </span>
              <span className="text-gray-900 font-semibold">23 people</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 font-medium">
                Average per Cell
              </span>
              <span className="text-gray-900 font-semibold">24 people</span>
            </div>
          </CardContent>
        </Card>

        {/* Action Items Card */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Action Items
            </CardTitle>
            <p className="text-sm text-gray-600">Tasks requiring attention</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Overdue Report */}
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-900">Overdue Report</h3>
                <p className="text-sm text-red-700">
                  Delta Cell - 3 days overdue
                </p>
              </div>
            </div>

            {/* Late Submissions */}
            <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-yellow-900">
                  Late Submissions
                </h3>
                <p className="text-sm text-yellow-700">
                  3 cells submitted after deadline
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
