import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Building,
  Edit,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const cellLeaderData = {
  id: 1,
  fullName: "Asare Tutu",
  phoneNumber: "0531942973",
  emailAddress: "pastortutu@gmail.com",
  office: "Steward",
  address: "penkwaase",
  createdAt: "11/06/2025",
  gender: "male",
  status: "Active",
};

const page = async ({ params }: { params: { cellId: string } }) => {
  const { cellId } = await params;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mt-12 justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link
              href={"/dashboard/record-taker/cell-leaders"}
              className="flex px-3.5 py-1.5 bg-white border border-[#0fa2f7] rounded-md absolute top-4 left-5 items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Cell Leader Details
              </h1>
              <p className="text-gray-600">
                View and manage cell leader information
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl bg-[#0fa2f7]/15 text-[#0fa2f7]">
                    {getInitials(cellLeaderData.fullName)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">
                {cellLeaderData.fullName}
              </CardTitle>
              <div className="flex justify-center gap-2 mt-2">
                <Badge variant="secondary" className="capitalize">
                  {cellLeaderData.office}
                </Badge>
                <Badge
                  variant="outline"
                  className="capitalize text-green-600 border-green-200"
                >
                  {cellLeaderData.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="capitalize">{cellLeaderData.gender}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Joined {formatDate(cellLeaderData.createdAt)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="font-mono">
                      {cellLeaderData.phoneNumber}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      {cellLeaderData.emailAddress}
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Office/Position
                  </label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Building className="h-4 w-4 text-gray-500" />
                    <span className="capitalize">{cellLeaderData.office}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Address/Location
                  </label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="capitalize">{cellLeaderData.address}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">
                    Ministry Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member ID:</span>
                      <span className="font-mono">
                        CL-{cellLeaderData.id.toString().padStart(4, "0")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date Registered:</span>
                      <span>{formatDate(cellLeaderData.createdAt)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-200"
                      >
                        {cellLeaderData.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Member
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
