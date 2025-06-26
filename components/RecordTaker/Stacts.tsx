"use client";

import React, { useState } from "react";
import {
  Clock,
  CircleCheckBig,
  Users,
  X,
  Eye,
  CalendarClock,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type BoxProps = {
  timerange: string;
  totals: number | string;
  action: string;
  type: "user" | "service" | "report" | "clock";
};

const celebrationServices = [
  {
    id: 1,
    date: "2024-01-07",
    displayDate: "January 7, 2024",
    title: "New Year Celebration Service",
    attendance: 245,
    cellsReported: 11,
    totalCells: 12,
    onTimeSubmissions: 9,
    leader: "Pastor Johnson",
    theme: "New Beginnings",
    offerings: 2450.0,
    testimonies: 3,
    newMembers: 5,
  },
  {
    id: 2,
    date: "2024-01-14",
    displayDate: "January 14, 2024",
    title: "Unity Sunday Service",
    attendance: 198,
    cellsReported: 10,
    totalCells: 12,
    onTimeSubmissions: 8,
    leader: "Elder Smith",
    theme: "Walking in Unity",
    offerings: 1890.0,
    testimonies: 2,
    newMembers: 3,
  },
  {
    id: 3,
    date: "2024-01-21",
    displayDate: "January 21, 2024",
    title: "Faith & Family Service",
    attendance: 267,
    cellsReported: 12,
    totalCells: 12,
    onTimeSubmissions: 10,
    leader: "Pastor Williams",
    theme: "Strengthening Family Bonds",
    offerings: 3120.0,
    testimonies: 4,
    newMembers: 7,
  },
  {
    id: 4,
    date: "2024-01-28",
    displayDate: "January 28, 2024",
    title: "Breakthrough Sunday",
    attendance: 289,
    cellsReported: 11,
    totalCells: 12,
    onTimeSubmissions: 9,
    leader: "Elder Davis",
    theme: "Breaking Every Chain",
    offerings: 2780.0,
    testimonies: 5,
    newMembers: 4,
  },
];

const Stacts = ({ timerange, type, totals, action }: BoxProps) => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedServiceData, setSelectedServiceData] = useState<
    (typeof celebrationServices)[0] | null
  >(null);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    const service = celebrationServices.find(
      (s) => s.id.toString() === serviceId
    );
    setSelectedServiceData(service || null);
  };

  const renderIcon = () => {
    switch (type) {
      case "user":
        return <Users color="#0fa2f7" size={20} />;
      case "service":
        return <CalendarClock color="#0fa2f7" size={20} />;
      case "report":
        return <CircleCheckBig color="#28a745" size={20} />;
      case "clock":
        return <Clock color="#28a745" size={20} />;
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "user":
      case "service":
        return "bg-[#0fa2f7]/15";
      case "report":
      case "clock":
        return "bg-[#30961c]/15";
      default:
        return "bg-gray-200";
    }
  };

  const borderLeft = () => {
    switch (type) {
      case "user":
      case "service":
        return "border-l-[#0fa2f7]";
      case "report":
      case "clock":
        return "border-l-[#28a745]";
      default:
        return "border-l-[#30961c]";
    }
  };
  const [open, setOpen] = useState(false);

  const service = () => {
    switch (type) {
      case "service":
        return (
          <div
            onClick={() => setOpen(true)}
            className="absolute flex gap-1 text-[#0fa2f7] items-center cursor-pointer left-4 bottom-2 justify-center"
          >
            <Eye size={16} />{" "}
            <p className="underline font-light">view details</p>
          </div>
        );
        break;
      default:
        break;
    }
  };
  const serviceSelect = () => {
    switch (type) {
      case "service":
        return (
          <div className="space-y-2 mb-6">
            <Select value={selectedService} onValueChange={handleServiceSelect}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service date" />
              </SelectTrigger>
              <SelectContent>
                {celebrationServices.map((service) => (
                  <SelectItem key={service.id} value={service.id.toString()}>
                    <div className="flex items-center justify-between w-full">
                      <span>{service.displayDate}</span>
                      {/**  <Badge variant="outline" className="ml-2">
                        {service.cellsReported}/{service.totalCells}
                      </Badge> */}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
        break;

      default:
        break;
    }
  };
  return (
    <div
      className={`bg-white p-5 h-full min-h-[150px] border-l-4 ${borderLeft()} relative flex gap-2 flex-col border rounded-xl`}
    >
      <button
        className={`absolute top-4 p-2 rounded-md z-10 ${getBackgroundColor()} right-3`}
      >
        {renderIcon()}
      </button>
      <h1 className="text-black font-semibold text-[18px]">{timerange}</h1>
      {selectedServiceData && (
        <div className="mb-4">
          <h1 className="font-bold text-[20px]">
            {" "}
            {Math.round(
              (selectedServiceData.cellsReported /
                selectedServiceData.totalCells) *
                100
            )}
            %
          </h1>
          <div className="flex items-center gap-1">
            <span className="text-xs text-neutral-500">
              {selectedServiceData.cellsReported}/
              {selectedServiceData.totalCells}
            </span>
          </div>
        </div>
      )}
      {serviceSelect()}
      {selectedServiceData && service()}
      {open && (
        <div className="fixed flex items-center justify-center inset-0 z-20 bg-[#030f03]/50 w-full h-full bottom-0 left-0 right-0">
          <div className="bg-white relative rounded-md lg:w-[700px] p-5 w-full">
            <X
              onClick={() => setOpen(false)}
              size={18}
              className="absolute top-3 cursor-pointer right-3"
            />
            <div>
              {selectedServiceData && (
                <div className="max-w-2xl">
                  <div>
                    <h1 className="font-bold text-xl">
                      {selectedServiceData.title}
                    </h1>
                    <p>Service details for {selectedServiceData.displayDate}</p>
                  </div>

                  <div className="grid grid-cols-2 mt-4 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Service Information
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span>{selectedServiceData.displayDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Leader:</span>
                            <span>{selectedServiceData.leader}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Theme:</span>
                            <span>{selectedServiceData.theme}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Attendance:</span>
                            <span className="font-semibold">
                              {selectedServiceData.attendance}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Financial
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Offerings:</span>
                            <span className="font-semibold">
                              ${selectedServiceData.offerings.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Reporting Statistics
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              Cells Reported:
                            </span>
                            <span>
                              {selectedServiceData.cellsReported}/
                              {selectedServiceData.totalCells}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              On-Time Submissions:
                            </span>
                            <span>
                              {selectedServiceData.onTimeSubmissions}/
                              {selectedServiceData.cellsReported}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Report Rate:</span>
                            <span className="font-semibold">
                              {Math.round(
                                (selectedServiceData.cellsReported /
                                  selectedServiceData.totalCells) *
                                  100
                              )}
                              %
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Ministry Impact
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">New Members:</span>
                            <span className="font-semibold text-green-600">
                              {selectedServiceData.newMembers}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Testimonies:</span>
                            <span>{selectedServiceData.testimonies}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stacts;
