import React, { useEffect } from "react";
import { Calendar, Clock, CircleCheckBig, Users } from "lucide-react";

type Boxprops = {
  timerange: string;
  totals: number | string;
  action: string;
  type: "user" | "calender" | "report" | "clock";
};
const Stacts = ({ timerange, type, totals, action }: Boxprops) => {
  const renderIcon = () => {
    switch (type) {
      case "user":
        return <Users color="#0fa2f7" size={20} />;
      case "calender":
        return <Calendar color="#e279d5" size={20} />;
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
        return "bg-[#0fa2f7]/15";
      case "calender":
        return "bg-[#e279d5]/15";
      case "report":
        return "bg-[#30961c]/15";
      case "clock":
        return "bg-[#30961c]/15";
      default:
        return "bg-gray-200";
    }
  };

  const Borderleft = () => {
    switch (type) {
      case "user":
        return "border-l-[#0fa2f7]";
      case "calender":
        return "border-l-[#e279d5]";
      case "report":
        return "border-l-[#28a745]";
      case "clock":
        return "border-l-[#28a745]";
      default:
        return "border-l-[#30961c]";
    }
  };
  return (
    <div
      className={`bg-white p-5 border-l-4 ${Borderleft()} relative flex gap-2 flex-col border rounded-xl`}
    >
      <button
        className={`absolute top-4 p-2 rounded-md z-10 ${getBackgroundColor()} right-3`}
      >
        {renderIcon() || null}
      </button>
      <h1 className="text-neutral-600 font-semibold text-[15px]">
        {timerange}
      </h1>
      <h1 className="font-bold text-[20px]">{totals}</h1>
      <div className="flex items-center gap-1">
        <span className="text-xs text-neutral-500">{action}</span>
      </div>
    </div>
  );
};

export default Stacts;
