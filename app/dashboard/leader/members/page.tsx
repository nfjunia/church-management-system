import Header from "@/components/leader/Header";
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
import { Search, Trash2, Pencil, Eye, ArrowLeft } from "lucide-react";
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
  },
  {
    id: 2,
    fullName: "Yaw Solomon",
    phone: "0531942973",
    email: "nfjunia@gmail.com",
    adress: "new town",
    createdAt: "7/08/2025",
    gender: "male",
    office: "leader",
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
  },
];
const page = () => {
  return (
    <div className="min-h-screen w-full px-5 pt-[120px] bg-neutral-100">
      <Link
        href={"/dashboard/leader"}
        className="flex px-3.5 py-1.5 shadow bg-white border rounded-md absolute top-4 left-5 items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </Link>{" "}
      <div className="w-full p-5 rounded-t-md bg-white mx-auto max-w-[1300px]">
        <div className="flex items-center pb-5 justify-between">
          <h1 className="font-bold text-[16px] lg:text-xl">
            List of all members
          </h1>
          <div className="relative">
            <Search
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <Input placeholder="Search.." className="pl-8 " />
          </div>
        </div>
        <Table className="px-5">
          <TableHeader>
            <TableRow className="font-bold">
              <TableHead className="w-[140px]">Full name</TableHead>
              <TableHead>Phone number</TableHead>
              <TableHead>Email address</TableHead>
              <TableHead>Adress/Location</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="px-5">
            {Tablebody.map((member) => {
              return (
                <TableRow key={member.id} className="px-5 text-neutral-500">
                  <TableCell className=" flex items-center gap-1.5">
                    <span className="bg-[#30961c] w-1.5 h-1.5 rounded-full" />
                    <p>{member.fullName}</p>
                  </TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.adress}</TableCell>
                  <TableCell>{member.createdAt}</TableCell>
                  <TableCell>{member.gender}</TableCell>
                  <TableCell className="text-right w-[130px]">
                    <div className="flex w-full gap-1.5">
                      <Link
                        href={`/dashboard/leader/members/${member.id}/view`}
                        className="border px-2 flex gap-1 rounded-sm border-neutral-500 py-1 items-center"
                      >
                        <Eye size={14} className="cursor-pointer" />
                        <span className="text-[11px]">view</span>
                      </Link>
                      <Link
                        href={`/dashboard/leader/members/${member.id}`}
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
