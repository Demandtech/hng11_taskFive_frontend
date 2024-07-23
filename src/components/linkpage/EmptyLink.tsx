import React from "react";
import { EmptyIcon } from "../Svgs";

const EmptyLink = () => {
  return (
    <div  className="bg-lightGrey flex-1 flex p-3 flex-col justify-center items-center">
      <div className="text-center flex flex-col max-w-md   items-center">
        <EmptyIcon />
        <h3 className="sm:text-3xl text-darkGrey leading-[48px] mt-4 sm:mt-10 font-bold mb-4 sm:mb-6">
          Let’s get you started
        </h3>
        <p className="text-grey leading-6 font-normal text-justify sm:text-center">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default EmptyLink;
