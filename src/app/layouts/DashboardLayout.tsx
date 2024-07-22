import React from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="p-6 min-h-dvh bg-lightGrey">
			<Navbar />
			<div className="flex">
				<Aside />
				<div>{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
