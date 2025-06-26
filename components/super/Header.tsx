"use client";
import React from "react";
import { Bell } from "lucide-react";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import churchLogo from "../../public/logo.jpeg";
import Link from "next/link";

const Header = () => {
  const navigate = useRouter();
  return (
    <div className="w-full fixed left-0 px-5 right-0 top-0 z-20 h-[80px] border  bg-white">
      <div className="w-full flex items-center h-full mx-auto justify-between max-w-[1300px]">
        <Link href="/dashboard/superadmin" className="flex items-center gap-2">
          <Image src={churchLogo} height={50} width={50} alt="church_logo" />
          <div>
            <h1 className="font-semibold text-[17px]">Super Admin Dashboard</h1>
            <p className="font-light text-[14px] lg:block hidden">
              System overview and management
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button className="relative cursor-pointer">
            {" "}
            <Bell />
            <span className="absolute w-[7px] top-0.5 right-1 h-[7px] rounded-full bg-red-600"></span>
          </button>
          <div className="cursor-pointer flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center outline-none cursor-pointer gap-2.5">
                <User />{" "}
                <span className="font-light text-[15px] hidden lg:block">
                  Super Admin
                </span>
                <ChevronDown size={15} className=" hidden lg:block" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>admin@church.com</DropdownMenuLabel>
                <DropdownMenuLabel className="flex">
                  <div className="bg-[#30961c]/15 text-xs py-0.5 px-3 rounded-xl text-[#30961c]">
                    Super Admin
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate.push("/")}
                  className="flex hover:text-red-600 cursor-pointer hover:bg-red-600/25 items-center gap-2.5"
                >
                  <LogOut />
                  <span>LogOut</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
