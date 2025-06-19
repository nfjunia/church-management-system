"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Clock,
  Plus,
  Users,
  Save,
  Send,
  ChevronDownIcon,
  X,
  CalendarPlus,
  PlusCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function QuickActions() {
  const [attendanceCount, setAttendanceCount] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const navigate = useRouter();

  const quickActions = [
    {
      icon: Clock,
      route: "/dashboard/record-taker",
      title: "View History",
      description: "Review past attendance records",
    },
    {
      icon: Users,
      title: "Missing Reports",
      route: "/dashboard/record-taker",
      description: "Browse member information",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fakeCellId = "100";
    if (!date || !date.toLocaleString()) {
      toast.error("Please select a date for the cell.", {
        style: {
          backgroundColor: "#6b0000",
          color: "white",
          border: "1px solid #fcc2c2",
          borderRadius: "8px",
          zIndex: 1,
        },
        duration: 4000,
      });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Cell created successfully.", {
        style: { backgroundColor: "#093317", color: "white" },
        duration: 4000,
      });
      setIsLoading(false);
      navigate.push(`/dashboard/${fakeCellId}`);
    }, 3000);
  };

  return (
    <div>
      <div className="mx-auto w-full">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Attendance Submission Form */}
          <div className="bg-white py-7 md:p-6 rounded-md">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-semibold text-black">
                Add Cell Leader
              </CardTitle>
              <CardDescription className="text-neutral-600 mb-2 font-medium">
                Grow Your Cell, One Soul at a Time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Full name" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Email (optional)" />
              <div>
                <Select>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pastor">Pastor</SelectItem>
                    <SelectItem value="minister">Minister</SelectItem>
                    <SelectItem value="elder">Elder</SelectItem>
                    <SelectItem value="minister">Minister</SelectItem>
                    <SelectItem value="minister">Minister</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input placeholder="Address/Location" />
              <div>
                <Select>
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

          {/* Quick Actions */}
          <div className="bg-white  py-6 pb-10 md:p-6 rounded-md">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-semibold text-black">
                Quick Actions
              </CardTitle>
              <CardDescription className="text-neutral-600 mb-3">
                Manage attendance data and cell leaders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => navigate.push(action.route as string)}
                  className="w-full bg-[#0fa2f7]/10 hover:bg-[#0fa2f7]/10 justify-start cursor-pointer h-auto p-4 border border-[#0fa2f7] text-left"
                >
                  <action.icon className="w-5 h-5 mr-3 text-[#0fa2f7] flex-shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="text-[#0fa2f7] font-medium">
                      {action.title}
                    </span>
                  </div>
                </Button>
              ))}
              <Button
                variant="ghost"
                onClick={() => setIsVisible(!isVisible)}
                className="w-full bg-[#0fa2f7]/10 hover:bg-[#0fa2f7]/10 justify-start cursor-pointer h-auto p-4 border border-[#0fa2f7] text-left"
              >
                <Plus className="w-5 h-5 mr-3 text-[#0fa2f7] flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <span className="text-[#0fa2f7] font-medium">
                    Create Service
                  </span>
                </div>
              </Button>
            </CardContent>
          </div>
          {/** */}
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="w-full h-full bg-[#030f03]/50 px-5 flex items-center justify-center z-20 fixed top-0 right-0 left-0 bottom-0"
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="lg:w-[450px] w-full relative bg-white py-6 rounded-md">
                  <X
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2.5 right-2.5 cursor-pointer"
                    size={19}
                  />
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-xl font-semibold text-black">
                      Create New Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm">Name</Label>
                      <Input
                        placeholder="Name of service"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-sm">Date</Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            id="date"
                            className="w-full cursor-pointer justify-between mt-2 font-normal"
                          >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto overflow-hidden p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                              setDate(date);
                              setOpen(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <Button
                      onClick={handleSubmit}
                      className="w-full bg-[#0fa2f7] cursor-pointer hover:bg-[#0fa2f9]"
                    >
                      <PlusCircle />
                      {isLoading ? "Creating cell..." : "Create cell"}
                    </Button>
                  </CardContent>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
