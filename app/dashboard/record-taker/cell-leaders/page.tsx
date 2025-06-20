import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, Trash2, Pencil, Eye } from "lucide-react";
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
import Link from "next/link";
import Header from "@/components/RecordTaker/Header";

const Tablebody = [
  {
    id: 1,
    fullName: "Asare Tutu",
    phone: "0531942973",
    office: "Steward",
    email: "pastortutu@gmail.com",
    adress: "penkwaase",
    createdAt: "11/06/2025",
    gender: "male",
  },
  {
    id: 2,
    fullName: "Yaw Gideon",
    office: "Elder",
    phone: "0531942973",
    email: "nfjunia@gmail.com",
    adress: "penkwaase",
    createdAt: "7/08/2025",
    gender: "female",
  },
];
const page = () => {
  return (
    <div className="min-h-screen w-full px-3 pt-[120px] bg-neutral-100">
      <Header />
      <div className="w-full lg:p-5 px-2 py-5 rounded-t-md bg-white mx-auto max-w-[1300px]">
        <div className="flex items-center pb-5 justify-between">
          <h1 className="font-bold text-[16px] lg:text-xl">
            List of all cell leaders
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
              <TableHead>Office</TableHead>
              <TableHead>Adress/Location</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="px-5">
            {Tablebody.map((leader) => {
              return (
                <TableRow key={leader.id} className="px-5 text-neutral-500">
                  <TableCell className=" flex items-center gap-1.5">
                    <span className="bg-[#30961c] w-1.5 h-1.5 rounded-full" />
                    <p>{leader.fullName}</p>
                  </TableCell>
                  <TableCell>{leader.phone}</TableCell>
                  <TableCell>{leader.email}</TableCell>
                  <TableCell>{leader.office}</TableCell>
                  <TableCell>{leader.adress}</TableCell>
                  <TableCell>{leader.createdAt}</TableCell>
                  <TableCell>{leader.gender}</TableCell>
                  <TableCell className="text-right w-[130px]">
                    <div className="flex w-full gap-1.5">
                      <Link
                        href={`/dashboard/record-taker/cell-leaders/${leader.id}/view`}
                        className="border px-2 flex gap-1 rounded-sm border-neutral-500 py-1 items-center"
                      >
                        <Eye size={14} className="cursor-pointer" />
                        <span className="text-[11px]">view</span>
                      </Link>
                      <Link
                        href={`/dashboard/record-taker/cell-leaders/${leader.id}`}
                        className="border px-2 flex gap-1 rounded-sm border-neutral-500 py-1 items-center"
                      >
                        <Pencil size={14} className="cursor-pointer" />
                        <span className="text-[11px]">edit</span>
                      </Link>
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
      </div>
    </div>
  );
};

export default page;
