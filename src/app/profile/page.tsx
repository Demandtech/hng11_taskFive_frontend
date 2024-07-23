import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
DashboardLayout;

const Page = () => {
  return (
    <DashboardLayout>
      <div className="h-full overflow-y-auto bg-white rounded-xl p-6 sm:p-10"></div>
    </DashboardLayout>
  );
};

export default Page;
