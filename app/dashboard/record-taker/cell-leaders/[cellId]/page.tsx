"use client";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ cellId: string }>;
}) {
  const { cellId } = React.use(params);

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
  const cell_leader = Tablebody.find(
    (leader) => leader.id === parseInt(cellId)
  );

  const [formData, setFormData] = useState({
    fullName: cell_leader?.fullName || "",
    phone: cell_leader?.phone || "",
    email: cell_leader?.email || "",
    address: cell_leader?.adress || "",
    office: cell_leader?.office?.toLowerCase() || "",
    gender: cell_leader?.gender || "",
  });

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center w-full">
      <div className="w-full px-4">
        <Link
          href={"/dashboard/record-taker/cell-leaders"}
          className="flex px-3.5 py-1.5 bg-white border rounded-md absolute top-4 left-5 items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" color="#0fa2f7" />
          <span className="text-[#0fa2f7]">Back</span>
        </Link>
        <div className="bg-white lg:w-[500px] mx-auto w-full py-7 md:p-6 rounded-md">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-semibold text-black">
              Add Cell Leader
            </CardTitle>
            <CardDescription className="text-neutral-600 mb-2 font-medium">
              Grow Your Cell, One Soul at a Time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              value={formData.fullName}
              placeholder="Full name"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <Input
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              type="tel"
            />
            <Input
              placeholder="Email (optional)"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <div>
              <Select
                value={formData.office}
                onValueChange={(value) =>
                  setFormData({ ...formData, office: value })
                }
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Office" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pastor">Pastor</SelectItem>
                  <SelectItem value="minister">Minister</SelectItem>
                  <SelectItem value="elder">Elder</SelectItem>
                  <SelectItem value="deacon">Deacon</SelectItem>
                  <SelectItem value="deaconess">Deaconess</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              placeholder="Address/Location"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <div>
              <Select
                value={formData.gender}
                onValueChange={(value) =>
                  setFormData({ ...formData, gender: value })
                }
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 flex-wrap pt-4">
              <Button className="flex-1 bg-[#0fa2f7] cursor-pointer hover:bg-[#03a1fc] text-white">
                <Send className="w-4 h-4 mr-2" />
                <span>Submit</span>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
