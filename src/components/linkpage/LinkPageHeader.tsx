import { useAppContext } from "@/app/contexts/AppContext";
import { Button } from "@nextui-org/react";
import React from "react";

const LinkPageHeader = () => {
	const { updateLinks, links } = useAppContext();

	const addNewLink = () => {
		if (links.length > 0) {
			const lastLink = links[links.length - 1];
			if (!lastLink.name || !lastLink.url) {
				alert(
					"Please fill out the last link completely before adding a new one."
				);
				return;
			}
		}
		const newLinks = [...links, { name: "", url: "", value: "" }];
		// newLinks.push({ name: "", url: "", value: "" });

		updateLinks(newLinks);
	};
	return (
		<div className="mb-6">
			<h2 className="text-darkGrey font-bold md:text-3xl leading-[48px] mb-2">
				Customize your links
			</h2>
			<p className="text-grey leading-6">
				Add/edit/remove links below and then share all your profiles with the
				world!
			</p>
			<Button
				onPress={addNewLink}
				size="lg"
				color="primary"
				variant="bordered"
				className="w-full border-1 font-semibold mt-10 rounded-lg hover:bg-lightPurple"
			>
				+ Add new link
			</Button>
		</div>
	);
};

export default LinkPageHeader;
