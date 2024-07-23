import React, { useState } from "react";
import {
  AnchorIcon,
  EqualIcon,
  GithubIcon,
  FacebookIcon,
  LinkedinIcon,
  FrontendMentorIcon,
  YoutubeIcon,
} from "../Svgs";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { LinkCardProps } from "@/types";
import { useAppContext } from "@/app/contexts/AppContext";

const LinkCard: React.FC<LinkCardProps> = ({ index }) => {
  const [value, setValue] = React.useState({
    name: "",
    url: "",
    icon: "",
  });
  const { links, updateLinks } = useAppContext();

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue((prev) => {
      return {
        ...prev,
      };
    });
  };

  const platforms: Array<{ name: string; icon: React.ReactNode }> = [
    {
      name: "Github",
      icon: <GithubIcon />,
    },
    {
      name: "Facebook",
      icon: <FacebookIcon />,
    },
    {
      name: "Frontend Mentor",
      icon: <FrontendMentorIcon />,
    },
    {
      name: "Youtube",
      icon: <YoutubeIcon />,
    },
    {
      name: "Linkedin",
      icon: <LinkedinIcon />,
    },
  ];

  const handlRemoveLink = () => {
    const newLinks = links.filter((_, idx) => idx !== index);
    updateLinks(newLinks);
  };

  return (
    <div className="bg-lightGrey rounded-xl p-5">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1.5">
          <EqualIcon />
          <p className="font-bold text-grey">Link #{index + 1}</p>
        </div>
        <Button
          className="text-grey font-normal px-0 justify-end"
          variant="light"
          onPress={handlRemoveLink}
        >
          Remove
        </Button>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="">
          <Select
            labelPlacement="outside"
            label="Platform"
            className="w-full rounded-lg"
            variant="bordered"
            radius="sm"
            placeholder="Select platform"
            classNames={{
              mainWrapper: "",
              innerWrapper: "rounded-sm ",
              trigger: "border-1 focus:shadow-inputHover",
            }}
            onChange={handleSelectionChange}
            selectedKeys={[value]}
            startContent={value !== "" && platforms[Number(value)]?.icon}
          >
            {platforms.map((platform, index) => (
              <SelectItem startContent={platform.icon} key={index}>
                {platform.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <Input
            startContent={<AnchorIcon className="fill-grey" />}
            variant="bordered"
            color="primary"
            label="Link"
            placeholder="e.g. https://www.github.com/johnappleseed"
            labelPlacement="outside"
            classNames={{
              label: "text-darkGrey",
              inputWrapper:
                "rounded-lg hover:border-primary hover:shadow-inputHover border-1 focus-within:shadow-inputHover",
            }}
            className="hover:border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
