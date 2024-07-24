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
import { LinkCardProps, Link, InputsError } from "@/types";
import { useAppContext } from "@/app/contexts/AppContext";

const LinkCard: FC<LinkCardProps> = ({ index, link, setError, inputError }) => {
  const [value, setValue] = useState(link.name);
  const [url, setUrl] = useState(link.url);
  const { links, updateLinks } = useAppContext();
  const [error, setErrors] = useState(inputError);

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    setValue(selectedValue);

    const updatedLinks = links.map((li, idx) =>
      idx === index ? { ...li, name: selectedValue } : li
    );

    updateLinks(updatedLinks);

    setError((prev) => {
      return {
        ...prev,
        platform: { isError: false, message: "" },
      };
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    const newUrl = e.target.value;

    const updatedLinks = links.map((li, idx) =>
      li.name === link.name ? { ...li, url: newUrl } : li
    );

    updateLinks(updatedLinks);
    setError((prev) => {
      return {
        ...prev,
        link: { isError: false, message: "" },
      };
    });

    setErrors((prev) => {
      return {
        ...prev,
        link: { isError: false, message: "" },
      };
    });
  };

  const handleInputBlur = () => {
    try {
      if (url) {
        new URL(url);
      } else {
        setError((prev) => {
          return {
            ...prev,
            link: { isError: true, message: "Link can not be empty" },
          };
        });
        setErrors((prev) => {
          return {
            ...prev,
            link: { isError: true, message: "Link can not be empty" },
          };
        });
      }
    } catch (error) {
      setError((prev) => {
        return {
          ...prev,
          link: { isError: true, message: "Enter a valid url" },
        };
      });

      setErrors((prev) => {
        return {
          ...prev,
          link: { isError: true, message: "Enter a valid url" },
        };
      });
    }
  };

  const handleSelectBlur = () => {
    if (!value) {
      setError((prev) => {
        return {
          ...prev,
          platform: { isError: true, message: "Can not be empty" },
        };
      });
    } else {
      setError((prev) => {
        return {
          ...prev,
          platform: { isError: false, message: "" },
        };
      });
    }
  };

  const platforms: Array<{ name: string; icon: React.ReactNode; id: number }> =
    [
      {
        id: 1,
        name: "Github",
        icon: <GithubIcon color="#737373" />,
      },
      {
        id: 2,
        name: "Facebook",
        icon: <FacebookIcon color="#737373" />,
      },
      {
        id: 3,
        name: "Frontend Mentor",
        icon: <FrontendMentorIcon color="#737373" />,
      },
      {
        id: 4,
        name: "Youtube",
        icon: <YoutubeIcon color="#737373" />,
      },
      {
        id: 5,
        name: "Linkedin",
        icon: <LinkedinIcon color="#737373" />,
      },
    ];

  const handlRemoveLink = () => {
    const newLinks = links.filter((_, idx) => idx !== index);
    updateLinks(newLinks);
  };

  const selectedPlatforms = links.map((li) => li.name);

  const availablePlatforms = platforms.filter(
    (platform) => !selectedPlatforms.includes(platform.name)
  );

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
        <div className="relative">
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
            isInvalid={error?.link.isError}
          />
          {error.link.isError && (
            <span className="text-xs text-red absolute top-1/2 pt-1 right-4">
              {error.link.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
