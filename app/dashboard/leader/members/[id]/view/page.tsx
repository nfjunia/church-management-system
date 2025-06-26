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

const Tablebody = [
  {
    id: 1,
    fullName: "Asare Yaw",
    phone: "0531942973",
    email: "pastortutu@gmail.com",
    adress: "penkwaase",
    createdAt: "11/06/2025",
    gender: "male",
    office: "deacon",
    status: "active",
  },
  {
    id: 2,
    fullName: "Yaw Solo",
    phone: "0531942973",
    email: "nfjunia@gmail.com",
    adress: "penkwaase",
    createdAt: "7/08/2025",
    gender: "female",
    office: "steward",
    status: "ative",
  },
  {
    id: 3,
    fullName: "Elder Blessing",
    phone: "0534747197",
    email: "elderblessin@mail.com",
    adress: "adomase road",
    createdAt: "11/08/2025",
    gender: "male",
    office: "Elder",
    status: "active",
  },
];

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const cellMember = Tablebody.find((member) => member.id === parseInt(id));

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
    <div className="min-h-screen bg-neutral-50 pb-16 pt-7 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mt-12 justify-between mb-6">
          <div className="flex items-center  gap-4">
            <Link
              href={"/dashboard/leader/members"}
              className="flex px-3.5 py-1.5 bg-white border shadow rounded-md absolute top-4 left-5 items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-black">Back</span>
            </Link>{" "}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Cell Member Details
              </h1>
              <p className="text-gray-600">
                View and manage cell member information
              </p>
            </div>
          </div>
          <div className="lg:flex hidden gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl bg-[#0fa2f7]/15 text-[#0fa2f7]">
                    {getInitials(cellMember?.fullName || "")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">
                {cellMember?.fullName || ""}
              </CardTitle>
              <div className="flex justify-center gap-2 mt-2">
                <Badge variant="secondary" className="capitalize">
                  {cellMember?.office || ""}
                </Badge>
                <Badge
                  variant="outline"
                  className="capitalize text-[#30961c] bg-[#30961c]/15"
                >
                  {cellMember?.status || ""}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="capitalize">{cellMember?.gender || ""}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Joined {formatDate(cellMember?.createdAt || "")}</span>
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
                  <div className="flex mt-2 items-center gap-2 p-3 bg-neutral-50 rounded-lg">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="font-mono">{cellMember?.phone || ""}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="flex mt-2 items-center gap-2 p-3 bg-neutral-50 rounded-lg">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-[#0fa2f7] hover:underline cursor-pointer">
                      {cellMember?.email || ""}
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
                  <div className="flex items-center mt-2 gap-2 p-3 bg-neutral-50 rounded-lg">
                    <Building className="h-4 w-4 text-gray-500" />
                    <span className="capitalize">
                      {cellMember?.office || ""}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Address/Location
                  </label>
                  <div className="flex mt-2 items-center gap-2 p-3 bg-neutral-50 rounded-lg">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="capitalize">
                      {cellMember?.adress || ""}
                    </span>
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
                        CL-{cellMember?.id.toString().padStart(4, "0") || ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date Registered:</span>
                      <span>{formatDate(cellMember?.createdAt || "")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <Badge
                        variant="outline"
                        className="capitalize text-[#30961c] bg-[#30961c]/15"
                      >
                        {cellMember?.status || ""}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Quick Actions</h4>
                  <div className="space-y-2 flex flex-col gap-3">
                    <Link
                      href={"mailto:info@example.com"}
                      className="flex items-center bg-[#0fa2f7]/15 border-[#0fa2f7] text-[#0fa2f7] w-full py-2 px-4 border rounded-md"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Link>
                    <Link
                      href={"tel:+233501234567"}
                      className="flex items-center bg-[#0fa2f7]/15 text-[#0fa2f7] border-[#0fa2f7] w-full py-2 px-4 border rounded-md"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Member
                    </Link>
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
