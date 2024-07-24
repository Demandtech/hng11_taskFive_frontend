import { useAppContext } from "@/app/contexts/AppContext";
import { InputsError } from "@/types";
import { Button } from "@nextui-org/react";
import React, { FC } from "react";

const LinkPageHeader = () => {
  const { updateLinks, links } = useAppContext();

  const addNewLink = () => {
    if (links.length > 0) {
      const lastLink = links[links.length - 1];
      try {
        if (!lastLink.name || !lastLink.url) {
          alert("Fill the last Detail");
          return;
        } else {
          new URL(lastLink.url);
          const newLinks = [...links, { name: "", url: "", value: "" }];

          updateLinks(newLinks);
        }
      } catch (err) {
        alert("Enter valid Link");
        return;
      }
    }

    const newLinks = [...links, { name: "", url: "", value: "" }];

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
