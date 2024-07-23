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
					className={`text-purple gap-2 flex items-center px-6 rounded-lg transition-background duration-300 ease-linear ${
						path === "/" ? "bg-lightPurple" : ""
					}`}
					href={"/"}
				>
					<AnchorIcon />
					<span className="hidden sm:block">Links</span>
				</Link>
				<Link
					className={`text-purple gap-2 flex items-center px-6 rounded-lg transition-background duration-300 ease-linear ${
						path === "/profile" ? "bg-lightPurple" : ""
					}`}
					href={"/profile"}
				>
					<UserIcon />
					<span className="hidden sm:block">Profile Detail</span>
				</Link>
			</div>
			<div>
				<Link
					className="text-purple border border-purple px-3 sm:px-6 flex h-full items-center rounded-lg"
					href="/preview"
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
