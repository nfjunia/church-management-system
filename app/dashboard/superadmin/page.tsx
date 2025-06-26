import Activity from "@/components/super/Activity";
import Header from "@/components/super/Header";
import QuickActions from "@/components/super/QuickActions";
import Stacts from "@/components/super/Stacts";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen px-5 pb-14 w-full bg-neutral-100">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1300px] mx-auto items-center pt-28">
        <Stacts
          totals={"1,247"}
          timerange="Total Users"
          type="user"
          action="11/12 cells"
        />
        <Stacts
          totals={"23"}
          timerange="All Networks"
          type="network"
          action="9/12 cells"
        />
        <Stacts
          totals={22}
          timerange="Weekly Reports"
          type="chart"
          action="+5% from last month"
        />
        <Stacts
          totals={"89%"}
          timerange="Data Quality"
          type="network"
          action="Complete records"
        />
      </div>
      <div className="w-full mx-auto mt-8 max-w-[1300px]">
        <QuickActions />
        {/**  <Reporting /> */}
        <Activity />
      </div>
    </div>
  );
};

export default page;
