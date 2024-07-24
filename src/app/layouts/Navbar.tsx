"use client";
import {
  LogoIcon,
  LogoText,
  UserIcon,
  AnchorIcon,
  PreviewIcon,
} from "@/components/Svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
usePathname;

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="bg-white flex justify-between p-3 rounded-xl mb-3">
      <div className="flex items-center gap-3">
        <LogoIcon />
        <div className="hidden sm:block">
          <LogoText />
        </div>
      </div>
      <div className="space-x-3 flex">
        <Link
          className={`group hover:text-purple gap-2 flex items-center px-6 rounded-lg transition-background duration-300 ease-linear ${
            path === "/" ? "bg-lightPurple text-purple" : "text-grey"
          }`}
          href={"/"}
        >
          <AnchorIcon
            className={`${
              path === "/" ? "bg-lightPurple fill-purple" : "fill-grey"
            } group-hover:fill-purple`}
          />
          <span className="hidden sm:block">Links</span>
        </Link>
        <Link
          className={`group hover:text-purple gap-2 flex items-center px-6 rounded-lg transition-background duration-300 ease-linear ${
            path === "/profile" ? "bg-lightPurple text-purple" : "text-grey"
          }`}
          href={"/profile"}
        >
          <UserIcon
            className={`${
              path === "/profile" ? "bg-lightPurple fill-purple" : "fill-grey"
            } group-hover:fill-purple`}
          />
          <span className="hidden sm:block">Profile Detail</span>
        </Link>
      </div>
      <div>
        <Link
          className="text-purple hover:bg-lightPurple border border-purple px-3 sm:px-6 flex h-full items-center rounded-lg transition-background duration-300 ease-linear"
          href="/profile/preview/9898"
        >
          <div className="sm:hidden">
            <PreviewIcon />
          </div>
          <span className="hidden sm:block">Preview</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
