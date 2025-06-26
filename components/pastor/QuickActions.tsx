"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Clock, Users, Send, X, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import { AnimatePresence, motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";

export default function QuickActions() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agenda, setAgenda] = useState<string>("");

  const navigate = useRouter();

  const quickActions = [
    {
      icon: Clock,
      route: "",
      title: "View History",
      description: "Review past attendance records",
    },
    {
      icon: Users,
      title: "Cell Leaders",
      route: "/dashboard/pastor/leaders",
      description: "Browse member information",
    },
    {
      icon: Users,
      title: "All Record Takers",
      route: "/dashboard/pastor/takers",
      description: "Browse member information",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedDate.toLocaleString()) {
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
    } else if (!agenda) {
      toast.error("Please fill in the textArea", {
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
      toast.success("Church review meeting scheduled successfully..", {
        style: { backgroundColor: "#093317", color: "white" },
        duration: 4000,
      });
      setIsLoading(false);
      setIsVisible(false);
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
                Add Record Taker
              </CardTitle>
              <CardDescription className="text-neutral-600 mb-2 font-medium">
                Assign someone to help keep accurate records of attendance,
                decisions, and growth within the church
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
                    <SelectItem value="deacon">Deacon</SelectItem>
                    <SelectItem value="deaconess">Deaconess</SelectItem>
                    <SelectItem value="steward">Steward</SelectItem>
                    <SelectItem value="leader">Leader</SelectItem>
                    <SelectItem value="work force">Work Force</SelectItem>
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
                <button
                  key={index}
                  onClick={() => navigate.push(action.route as string)}
                  className="w-full bg-[#0fa2f7]/10 flex rounded-md px-4 items-center gap-3 hover:bg-[#0fa2f7]/10 justify-start cursor-pointer h-auto py-2 border border-[#0fa2f7] text-left"
                >
                  <action.icon className="w-5 h-5 mr-3 text-[#0fa2f7] flex-shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="text-[#0fa2f7]">{action.title}</span>
                  </div>
                </button>
              ))}
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="w-full bg-[#0fa2f7]/10 flex rounded-md px-4 items-center gap-3 hover:bg-[#0fa2f7]/10 justify-start cursor-pointer h-auto py-2 border border-[#0fa2f7] text-left"
              >
                <Calendar className="w-5 h-5 mr-3 text-[#0fa2f7] flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <span className="text-[#0fa2f7]">Schedule Church Review</span>
                </div>
              </button>
            </CardContent>
          </div>

          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="w-full h-full bg-[#030f03]/50 px-5 flex items-center justify-center z-20 fixed inset-0"
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
                      Schedule Church Review Meeting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm">Date</Label>
                      <div className="border w-full rounded-md py-2 px-3">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          showTimeSelect
                          dateFormat="Pp"
                          placeholderText="select date and time"
                          className="w-full outline-none cursor-pointer"
                        />
                      </div>
                    </div>
                    <div>
                      <Textarea
                        onChange={(e) => setAgenda(e.target.value)}
                        placeholder="Meeting Agenda (optional)"
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      className="w-full bg-[#0fa2f7] cursor-pointer hover:bg-[#0fa2f9]"
                    >
                      {isLoading ? "Submitting..." : "Submit"}
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
