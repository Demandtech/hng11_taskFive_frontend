import React, { useState } from "react";
import { AnchorIcon, EqualIcon, GithubIcon } from "../Svgs";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { LinkCardProps } from "@/types";

const LinkCard: React.FC<LinkCardProps> = ({ index }) => {
  const [value, setValue] = React.useState("");

  const handleSelectionChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value)

  const platforms = [
    {
      name: "Github",
      icon: <GithubIcon />,
    },
    {
      name: "Facebook",
      icon: "",
    },
    {
      name: "Twitter",
      icon: "",
    },
    {
      name: "Github",
      icon: "",
    },
  ];

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
              innerWrapper: "rounded-sm ",
              trigger: "hover:border-primary focus:shadow-inputHover",
            }}
            onChange={handleSelectionChange}
            selectedKeys={[value]}
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
