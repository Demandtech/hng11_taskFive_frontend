"use client";
import React from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-3 h-full min-h-dvh bg-lightGrey">
      <Navbar />
      <div className="grid lg:grid-cols-3 gap-3 min-h-[calc(100vh-94px)]">
        <div className="hidden f-full lg:block lg:col-span-1">
          <Aside />
        </div>
        <div className="lg:col-span-2">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
