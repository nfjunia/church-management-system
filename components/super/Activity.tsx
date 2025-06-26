import { AlertTriangle, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Activity() {
  const recentActivities = [
    {
      id: 1,
      title: "New network created",
      user: "Pastor Mike",
      time: "2 hours ago",
      status: "success",
      color: "bg-green-500",
    },
    {
      id: 2,
      title: "User suspended",
      user: "Admin",
      time: "4 hours ago",
      status: "warning",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Report submitted",
      user: "Cell Leader",
      time: "6 hours ago",
      status: "info",
      color: "bg-blue-500",
    },
    {
      id: 4,
      title: "System backup completed",
      user: "System",
      time: "12 hours ago",
      status: "success",
      color: "bg-green-500",
    },
  ];

  const systemAlerts = [
    {
      id: 1,
      title: "Low Report Submission",
      description: "3 networks have less than 70% report submission this week",
      type: "warning",
      icon: AlertTriangle,
      iconColor: "text-yellow-500",
    },
    {
      id: 2,
      title: "Growth Milestone",
      description: "Total attendance reached 5,000 this month!",
      type: "success",
      icon: TrendingUp,
      iconColor: "text-green-500",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid mt-8 grid-cols-1 w-full lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Recent Activity Section */}
        <div className="bg-white py-4 rounded-xl">
          <CardHeader>
            <CardTitle className="text-black text-xl font-semibold">
              Recent Activity
            </CardTitle>
            <CardDescription className="text-neutral-600">
              Latest system events and user actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${activity.color} flex-shrink-0`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-black font-medium">{activity.title}</p>
                  <p className="text-neutral-600 font-light text-sm">
                    by {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </div>

        {/* System Alerts Section */}
        <div className="bg-white py-4 rounded-xl">
          <CardHeader>
            <CardTitle className="text-black text-xl font-semibold">
              System Alerts
            </CardTitle>
            <CardDescription className="text-neutral-600">
              Important notifications requiring attention
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemAlerts.map((alert) => {
              const IconComponent = alert.icon;
              return (
                <div key={alert.id} className="flex items-start gap-3">
                  <IconComponent
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${alert.iconColor}`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-black font-medium">{alert.title}</p>
                    <p className="text-neutral-600 text-sm">
                      {alert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </div>
      </div>
    </div>
  );
}
