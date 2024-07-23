import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div>
			<div className="sm:bg-purple p-3 sm:min-h-[350px] rounded-b-3xl">
				<div className="bg-white gap-5 flex justify-between p-3 rounded-xl mb-3">
					<Link
						className="border text-purple whitespace-nowrap w-full sm:w-auto border-purple px-6 flex items-center rounded-lg"
						href="profile"
					>
						Back to Editor
					</Link>
					<Button
						className="text-white w-full sm:w-auto"
						variant="solid"
						color="primary"
					>
						Share Link
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Page;
