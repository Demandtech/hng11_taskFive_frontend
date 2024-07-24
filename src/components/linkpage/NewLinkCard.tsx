import { useEffect, useState, FC, FocusEventHandler, ChangeEvent } from "react";
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
import { LinkCardProps, Link } from "@/types";
import { useAppContext } from "@/app/contexts/AppContext";

const LinkCard: FC<LinkCardProps> = ({ index, link, setError, error }) => {
  const [value, setValue] = useState(link.name);
  const [url, setUrl] = useState(link.url);
  const { links, updateLinks } = useAppContext();
//   const [error, setError] = useState(false);

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    setValue(selectedValue);

    const updatedLinks = links.map((li, idx) =>
      li.name === link.name
        ? {
            ...li,
            name: selectedValue,
          }
        : li
    );

    updateLinks(updatedLinks);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    const newUrl = e.target.value;

    const updatedLinks = links.map((li, idx) =>
      li.name === link.name ? { ...li, url: newUrl } : li
    );

    updateLinks(updatedLinks);
  };

  const handleInputBlur = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const { name, value } = e.target;
    setUrl(value);

    try {
      new URL(value);

      setUrl(value);
    } catch (error) {
      console.error("Invalid URL:", value);
      setError(true);

      alert("Please enter a valid URL.");
    }
  };

  const platforms: Array<{ name: string; icon: React.ReactNode; id: number }> =
    [
      {
        id: 1,
        name: "Github",
        icon: <GithubIcon />,
      },
      {
        id: 2,
        name: "Facebook",
        icon: <FacebookIcon />,
      },
      {
        id: 3,
        name: "Frontend Mentor",
        icon: <FrontendMentorIcon />,
      },
      {
        id: 4,
        name: "Youtube",
        icon: <YoutubeIcon />,
      },
      {
        id: 5,
        name: "Linkedin",
        icon: <LinkedinIcon />,
      },
    ];

  const handlRemoveLink = () => {
    const newLinks = links.filter((li) => li.name !== link.name);
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
            startContent={platforms.find((plat) => plat.name == value)?.icon}
          >
            {platforms.map((platform) => (
              <SelectItem startContent={platform.icon} key={platform.name}>
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
            name="url"
            className="hover:border-primary"
            value={url}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            isInvalid={error}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
