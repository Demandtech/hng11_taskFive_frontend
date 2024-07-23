import { Button } from "@nextui-org/react";
import React from "react";

const LinkPageHeader = () => {
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
