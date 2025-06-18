import AttendanceHistory from "@/components/leader/AttendanceHistory";
import Header from "@/components/leader/Header";
import QuickActions from "@/components/leader/QuickActions";
import Stacts from "@/components/leader/Stacts";
import React from "react";

const page = async () => {
  return (
    <div className="bg-neutral-100 pb-16 px-5 min-h-screen w-full ">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1300px] mx-auto items-center pt-28">
        <Stacts
          totals={18}
          timerange="This Week"
          type="user"
          action="compared to last month"
        />
        <Stacts
          totals={39}
          timerange="Monthly Average"
          type="calender"
          action="Consistend growth"
        />
        <Stacts
          totals={22}
          timerange="Reports Submitted"
          type="report"
          action="100% compliance"
        />
        <Stacts
          totals={6}
          timerange="Last Submission"
          type="clock"
          action="sunday 6:00 PM"
        />
      </div>

      <div className="w-full mx-auto mt-8 max-w-[1300px]">
        <QuickActions />
        <AttendanceHistory />
      </div>
    </div>
  );
};

export default page;
