import Header from "@/components/RecordTaker/Header";
import QuickActions from "@/components/RecordTaker/QuickActions";
import Reporting from "@/components/RecordTaker/Reporting";
import Stacts from "@/components/RecordTaker/Stacts";
import Summary from "@/components/RecordTaker/Summary";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen px-5 w-full bg-neutral-100">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1300px] mx-auto items-center pt-28">
        <Stacts
          totals={"89%"}
          timerange="Reports Submitted"
          type="note"
          action="11/12 cells"
        />
        <Stacts
          totals={"75%"}
          timerange="On Time Submissions"
          type="clock"
          action="9/12 cells"
        />
        <Stacts
          totals={22}
          timerange="Cell Leaders Active"
          type="user"
          action="All assigned"
        />
        <Stacts
          totals={"94%"}
          timerange="Data Quality"
          type="report"
          action="Complete records"
        />
      </div>
      <div className="w-full mx-auto mt-8 max-w-[1300px]">
        <QuickActions />
        <Reporting />
        <Summary />
      </div>
    </div>
  );
};

export default page;
