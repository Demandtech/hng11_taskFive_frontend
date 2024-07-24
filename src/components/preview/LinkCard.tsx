import React from "react";
import {
  ArrorRightIcon,
  GithubIcon,
  FacebookIcon,
  YoutubeIcon,
  FrontendMentorIcon,
  LinkedinIcon,
} from "../Svgs";
import { Link } from "../../types";

type LinkCardProps = {
  link: Link;
};

const LinkCard: React.FC<LinkCardProps> = ({link}) => {
  return (
    <a
      href={link?.url}
      target="_blank"
      className={`${
        link.name === "Github"
          ? "bg-github"
          : link.name === "Linkedin"
          ? "bg-linkedin"
          : link.name === "Facebook"
          ? "bg-facebook"
          : link.name === "Youtube"
          ? "bg-youtube"
          : link.name === "Frontend Mentor"
          ? "bg-mentor"
          : ""
      } bg-[#EEEEEE] gap-3 h-12 rounded-lg z-50 text-white flex items-center px-3`}
    >
      {link.name === "Github" ? (
        <GithubIcon color="#ffffff" />
      ) : link.name === "Linkedin" ? (
        <LinkedinIcon color="#ffffff" />
      ) : link.name === "Facebook" ? (
        <FacebookIcon color="#ffffff" />
      ) : link.name === "Frontend Mentor" ? (
        <FrontendMentorIcon color="#ffffff" />
      ) : link.name === "Youtube" ? (
        <YoutubeIcon color="#ffffff" />
      ) : (
        ""
      )}

      {link?.name}

      <div className="ml-auto">
        <ArrorRightIcon />
      </div>
    </a>
  );
};

export default LinkCard;
