"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Eye, Pencil, Search, Trash2, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const recordTakers = [
  {
    id: 1,
    fullName: "Sarah Johnson",
    phoneNumber: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com",
    leader: "Pastor Johnson",
    address: "123 Main St, Springfield",
    gender: "Female",
    dateAdded: "2024-01-15",
    status: "Active",
    cellsAssigned: 3,
  },
  {
    id: 2,
    fullName: "Michael Davis",
    phoneNumber: "+1 (555) 234-5678",
    email: "michael.davis@email.com",
    leader: "Elder Smith",
    address: "456 Oak Ave, Springfield",
    gender: "Male",
    dateAdded: "2024-01-20",
    status: "Active",
    cellsAssigned: 2,
  },
  {
    id: 3,
    fullName: "Emily Wilson",
    phoneNumber: "+1 (555) 345-6789",
    email: "emily.wilson@email.com",
    leader: "Pastor Williams",
    address: "789 Pine Rd, Springfield",
    gender: "Female",
    dateAdded: "2024-02-01",
    status: "Active",
    cellsAssigned: 4,
  },
  {
    id: 4,
    fullName: "David Brown",
    phoneNumber: "+1 (555) 456-7890",
    email: "",
    leader: "Elder Davis",
    address: "321 Elm St, Springfield",
    gender: "Male",
    dateAdded: "2024-02-10",
    status: "Inactive",
    cellsAssigned: 1,
  },
  {
    id: 5,
    fullName: "Lisa Anderson",
    phoneNumber: "+1 (555) 567-8901",
    email: "lisa.anderson@email.com",
    leader: "Pastor Johnson",
    address: "654 Maple Dr, Springfield",
    gender: "Female",
    dateAdded: "2024-02-15",
    status: "Active",
    cellsAssigned: 2,
  },
  {
    id: 6,
    fullName: "James Miller",
    phoneNumber: "+1 (555) 678-9012",
    email: "james.miller@email.com",
    leader: "Elder Smith",
    address: "987 Cedar Ln, Springfield",
    gender: "Male",
    dateAdded: "2024-02-20",
    status: "Active",
    cellsAssigned: 3,
  },
];

const page = () => {
  const [selectedRecordTaker, setSelectedRecordTaker] = useState<
    (typeof recordTakers)[number] | null
  >(null);
  return (
    <div className="min-h-screen w-full px-3 pt-[120px] bg-neutral-100">
      <Link
        href={"/dashboard/pastor"}
        className="flex px-3.5 py-1.5 bg-white border rounded-md absolute top-4 left-5 items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" color="#0fa2f7" />
        <span className="text-[#0fa2f7]">Back</span>
      </Link>
      <div className="w-full lg:p-5 px-2 py-5 rounded-t-md bg-white mx-auto max-w-[1300px]">
        <div className="flex items-center pb-5 justify-between">
          <h1 className="font-bold text-[16px] lg:text-xl">
            List of all record takers
          </h1>
          <div className="relative">
            <Search
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <Input placeholder="Search.." className="pl-8 bg-neutral-50" />
          </div>
        </div>
        <Table className="px-5">
          <TableHeader>
            <TableRow className="font-bold text-[16px]">
              <TableHead className="w-[140px]">Full name</TableHead>
              <TableHead>Phone number</TableHead>
              <TableHead>Email address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="px-5">
            {recordTakers.map((recordTaker) => {
              return (
                <TableRow
                  key={recordTaker.id}
                  className="px-5 text-neutral-500"
                >
                  <TableCell className=" flex items-center gap-1.5">
                    <span className="bg-[#30961c] w-1.5 h-1.5 rounded-full" />
                    <p>{recordTaker.fullName}</p>
                  </TableCell>
                  <TableCell>{recordTaker.phoneNumber}</TableCell>
                  <TableCell>{recordTaker.email}</TableCell>
                  <TableCell>{recordTaker.status}</TableCell>
                  <TableCell>{recordTaker.dateAdded}</TableCell>
                  <TableCell className="text-right w-[130px]">
                    <div className="flex w-full gap-1.5">
                      <div
                        onClick={() =>
                          setSelectedRecordTaker(recordTaker as any)
                        }
                        className="border px-2 flex gap-1 rounded-sm border-neutral-500 py-1 items-center"
                      >
                        <Eye size={14} className="cursor-pointer" />
                        <span className="text-[11px]">view</span>
                      </div>
                      <div className="border px-2 flex gap-1 rounded-sm border-neutral-500 py-1 items-center">
                        <Pencil size={14} className="cursor-pointer" />
                        <span className="text-[11px]">edit</span>
                      </div>
                      <AlertDialog>
                        <AlertDialogTrigger className="border border-red-600 px-2 flex gap-1 cursor-pointer rounded-sm py-1 items-center">
                          <Trash2 size={14} color="red" />
                          <span className="text-[11px] text-red-600">
                            delete
                          </span>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you sure you want to delete this member?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action will permanently remove the member and
                              all associated data from the system. This cannot
                              be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="cursor-pointer">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-red-600 hover:bg-red-600 cursor-pointer">
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <AnimatePresence>
          {selectedRecordTaker && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10 flex items-center justify-center bg-[#030f03]/60"
            >
              <div className="bg-white relative p-5 rounded-md lg:w-[600px] ">
                <div className="py-3">
                  <h1 className="font-bold">
                    Record Taker Details Complete information for Sarah Johnson
                  </h1>
                  <p className="font-light">
                    Complete information for {selectedRecordTaker.fullName}
                  </p>
                </div>
                <div className="grid  grid-cols-2 gap-4 text-sm">
                  <X
                    size={18}
                    onClick={() => setSelectedRecordTaker(null)}
                    className="absolute cursor-pointer top-4 right-4"
                  />

                  <div>
                    <span className="font-medium text-gray-600">Name:</span>
                    <p>{selectedRecordTaker.fullName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Gender:</span>
                    <p>{selectedRecordTaker.gender}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Phone:</span>
                    <p>{selectedRecordTaker.phoneNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Email:</span>
                    <p>{selectedRecordTaker.email || "Not provided"}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Leader:</span>
                    <p>{selectedRecordTaker.leader}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Status:</span>
                    <p></p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium text-gray-600">Address:</span>
                    <p>{selectedRecordTaker.address}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">
                      Cells Assigned:
                    </span>
                    <p>{selectedRecordTaker.cellsAssigned}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">
                      Date Added:
                    </span>
                    <p>
                      {new Date(
                        selectedRecordTaker.dateAdded
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default page;
