"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Eye,
  MapPin,
  Search,
  UserCheck,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertDialogAction } from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const page = () => {
  const [selected, setSelected] = useState<(typeof cellLeaders)[number] | null>(
    null
  );
  const [showMembersDialog, setShowMembersDialog] = useState(false);

  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelected(null);
      }
    });
  }, []);
  return (
    <div className="w-full min-h-screen pb-14 px-5 pt-16 bg-neutral-100">
      <Link
        href={"/dashboard/pastor"}
        className="flex px-3.5 py-1.5 bg-white border rounded-md absolute top-4 left-5 items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" color="#0fa2f7" />
        <span className="text-[#0fa2f7]">Back</span>
      </Link>
      <div className="mt-10 w-full mx-auto max-w-[1300px] ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2.5 justify-between">
          <h1 className="font-bold text-xl">List Of All Cell Members</h1>
          <div className="relative flex items-center">
            <Search className="absolute left-2" size={18} />
            <Input placeholder="Search user.." className="bg-white pl-8 pr-3" />
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 lg:grid-cols-4 gap-6">
          {cellLeaders.map((leader) => (
            <div key={leader.id}>
              <div className="text-center py-4 rounded-[7px] shadow bg-white">
                <CardContent>
                  <div className="space-y-2">
                    <Avatar className="w-20 h-20 mx-auto">
                      <AvatarImage
                        src={leader.profileImage || "/placeholder.svg"}
                        alt={leader.name}
                      />
                      <AvatarFallback className="text-2xl">
                        {leader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {leader.name}
                      </p>
                      <span className="text-[#28a745] px-3 py-1 rounded-xl mt-1.5 font-light text-[11px] bg-[#28a745]/15 mb-2">
                        {leader.role}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#28a745]">
                          {leader.cell.members.length}
                        </div>
                        <div className="text-gray-600 font-light">
                          Total Members
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-left">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{leader.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>Joined </span>
                        <span>{leader.joinDate}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-4 border-t">
                      <Button
                        variant="outline"
                        onClick={() => setSelected(leader)}
                        className="flex cursor-pointer items-center gap-2"
                      >
                        <span className="font-light">Cell Detail</span>
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex bg-transparent border text-black hover:bg-transparent cursor-pointer items-center gap-2">
                            <span className="font-light">View Members</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>
                              Members of {leader.cell.name}
                            </DialogTitle>
                            <DialogDescription>
                              Complete list of {leader.cell.members.length}{" "}
                              members in this cell
                            </DialogDescription>
                          </DialogHeader>
                          <div className="max-h-96 overflow-y-auto">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Name</TableHead>
                                  <TableHead>Phone</TableHead>
                                  <TableHead>Email</TableHead>
                                  <TableHead>CreatedAt</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {leader.cell.members.map((member) => (
                                  <TableRow key={member.id}>
                                    <TableCell className="font-medium">
                                      {member.name}
                                    </TableCell>
                                    <TableCell>{member.phone}</TableCell>
                                    <TableCell>{member.email}</TableCell>
                                    <TableCell>
                                      {new Date(
                                        member.joinDate
                                      ).toLocaleDateString()}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
                <AnimatePresence>
                  {selected && (
                    <motion.div
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full bg-[#030f03]/10 px-5 flex items-center justify-center z-50 fixed inset-0"
                    >
                      <div
                        ref={modalRef}
                        className="bg-white relative py-5 rounded-md w-full lg:w-[450px] "
                      >
                        <div>
                          <div className="w-full flex items-center px-5 justify-between">
                            <h1 className="font-semibold text-left text-xl">
                              Cell Details
                            </h1>
                            <div className="flex items-center gap-2.5">
                              <div>
                                <button
                                  className={`px-4 rounded-md py-1 ${
                                    selected.cell.status === "active" &&
                                    "bg-[#28a745]/15 border border-[#28a745] text-[#28a745]"
                                  }`}
                                >
                                  {selected.cell.status}
                                </button>
                              </div>
                              <X
                                onClick={() => setSelected(null)}
                                className=" cursor-pointer"
                                size={18}
                              />
                            </div>
                          </div>
                          <Separator className="mt-3" />
                          <div className="flex mt-4 w-full px-5 justify-between">
                            <div className="flex text-left gap-2 text-sm flex-col">
                              <p>Cell Name:</p>
                              <p>Meeting Day:</p>
                            </div>
                            <div className="text-left text-sm flex flex-col gap-2 font-light">
                              <p>{selected.cell.name}</p>
                              <p>{selected.cell.meetingDay}</p>
                            </div>
                          </div>
                          <div className="py-3">
                            <Separator />
                          </div>
                          <div className="flex w-full px-5 justify-between">
                            <div className="flex text-left text-sm font-light gap-2 flex-col">
                              <p>Meeting Time:</p>
                              <p>Location:</p>
                              <p>Total Members:</p>
                            </div>
                            <div className="text-left flex flex-col gap-2 text-sm font-light">
                              <p>{selected.cell.meetingTime}</p>
                              <p>{selected.cell.address}</p>
                              <p>{selected.cell.members.length}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

const cellLeaders = [
  {
    id: 1,
    name: "Jane Cooper",
    title: "Cell Leader",
    role: "Admin",
    email: "jane.cooper@church.com",
    phone: "+1 (555) 123-4567",
    profileImage: "/images/leader-profile.png",
    joinDate: "2020-01-15",
    location: "Main Campus",
    cell: {
      id: 1,
      name: "Victory Cell",
      meetingDay: "Wednesday",
      meetingTime: "7:00 PM",
      status: "active",
      address: "123 Main St, Springfield",
      members: [
        {
          id: 1,
          name: "Sarah Johnson",
          phone: "+1 (555) 111-1111",
          email: "sarah.j@email.com",
          joinDate: "2023-01-15",
        },
        {
          id: 2,
          name: "Michael Davis",
          phone: "+1 (555) 222-2222",
          email: "michael.d@email.com",
          joinDate: "2023-02-20",
        },
        {
          id: 3,
          name: "Emily Wilson",
          phone: "+1 (555) 333-3333",
          email: "emily.w@email.com",
          joinDate: "2023-03-10",
        },
        {
          id: 4,
          name: "David Brown",
          phone: "+1 (555) 444-4444",
          email: "david.b@email.com",
          joinDate: "2023-04-05",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Pastor Johnson",
    title: "Cell Leader",
    role: "Leader",
    email: "pastor.johnson@church.com",
    phone: "+1 (555) 234-5678",
    profileImage: "/placeholder.svg?height=200&width=200",
    joinDate: "2021-03-10",
    location: "North Campus",
    cell: {
      id: 2,
      name: "Faith Builders",

      meetingDay: "Thursday",
      meetingTime: "6:30 PM",
      status: "active",
      address: "456 Oak Ave, Springfield",
      members: [
        {
          id: 25,
          name: "Grace Thompson",
          phone: "+1 (555) 301-0101",
          email: "grace.t@email.com",
          joinDate: "2023-01-10",
        },
        {
          id: 26,
          name: "Peter Wilson",
          phone: "+1 (555) 302-0202",
          email: "peter.w@email.com",
          joinDate: "2023-02-15",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Elder Smith",
    title: "Cell Leader",
    role: "Leader",
    email: "elder.smith@church.com",
    phone: "+1 (555) 345-6789",
    profileImage: "/placeholder.svg?height=200&width=200",
    joinDate: "2022-05-20",
    location: "South Campus",
    cell: {
      id: 3,
      name: "Young Adults",
      meetingDay: "Friday",
      meetingTime: "7:30 PM",
      status: "active",
      address: "789 Pine Rd, Springfield",
      members: [
        {
          id: 43,
          name: "Alex Johnson",
          phone: "+1 (555) 401-0101",
          email: "alex.j@email.com",
          joinDate: "2023-01-05",
        },
        {
          id: 44,
          name: "Sophia Davis",
          phone: "+1 (555) 402-0202",
          email: "sophia.d@email.com",
          joinDate: "2023-01-12",
        },
        {
          id: 45,
          name: "Ethan Wilson",
          phone: "+1 (555) 403-0303",
          email: "ethan.w@email.com",
          joinDate: "2023-01-19",
        },
        {
          id: 46,
          name: "Olivia Brown",
          phone: "+1 (555) 404-0404",
          email: "olivia.b@email.com",
          joinDate: "2023-01-26",
        },
        {
          id: 47,
          name: "Mason Miller",
          phone: "+1 (555) 405-0505",
          email: "mason.m@email.com",
          joinDate: "2023-02-02",
        },
        {
          id: 48,
          name: "Emma Garcia",
          phone: "+1 (555) 406-0606",
          email: "emma.g@email.com",
          joinDate: "2023-02-09",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Jane Cooper",
    title: "Cell Leader",
    role: "Admin",
    email: "jane.cooper@church.com",
    phone: "+1 (555) 123-4567",
    profileImage: "/images/leader-profile.png",
    joinDate: "2020-01-15",
    location: "Main Campus",
    cell: {
      id: 1,
      name: "Victory Cell",
      meetingDay: "Wednesday",
      meetingTime: "7:00 PM",
      status: "active",
      address: "123 Main St, Springfield",
      members: [
        {
          id: 1,
          name: "Sarah Johnson",
          phone: "+1 (555) 111-1111",
          email: "sarah.j@email.com",
          joinDate: "2023-01-15",
        },
        {
          id: 2,
          name: "Michael Davis",
          phone: "+1 (555) 222-2222",
          email: "michael.d@email.com",
          joinDate: "2023-02-20",
        },
        {
          id: 3,
          name: "Emily Wilson",
          phone: "+1 (555) 333-3333",
          email: "emily.w@email.com",
          joinDate: "2023-03-10",
        },
        {
          id: 4,
          name: "David Brown",
          phone: "+1 (555) 444-4444",
          email: "david.b@email.com",
          joinDate: "2023-04-05",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Jane Cooper",
    title: "Cell Leader",
    role: "Admin",
    email: "jane.cooper@church.com",
    phone: "+1 (555) 123-4567",
    profileImage: "/images/leader-profile.png",
    joinDate: "2020-01-15",
    location: "Main Campus",
    cell: {
      id: 1,
      name: "Victory Cell",
      meetingDay: "Wednesday",
      meetingTime: "7:00 PM",
      status: "active",
      address: "123 Main St, Springfield",
      members: [
        {
          id: 1,
          name: "Sarah Johnson",
          phone: "+1 (555) 111-1111",
          email: "sarah.j@email.com",
          joinDate: "2023-01-15",
        },
        {
          id: 2,
          name: "Michael Davis",
          phone: "+1 (555) 222-2222",
          email: "michael.d@email.com",
          joinDate: "2023-02-20",
        },
        {
          id: 3,
          name: "Emily Wilson",
          phone: "+1 (555) 333-3333",
          email: "emily.w@email.com",
          joinDate: "2023-03-10",
        },
        {
          id: 4,
          name: "David Brown",
          phone: "+1 (555) 444-4444",
          email: "david.b@email.com",
          joinDate: "2023-04-05",
        },
      ],
    },
  },
];
