import React, { useState } from "react";
import LinkCard from "./LinkCard";
import { useAppContext } from "@/app/contexts/AppContext";

const Links = () => {
	const { links } = useAppContext();
	return (
		<div className="space-y-6">
			{links.map((link, index) => {
				return <LinkCard link={link} index={index} key={link.name} />;
			})}
		</div>
	);
};

export default Links;
