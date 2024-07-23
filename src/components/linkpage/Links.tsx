import React, { useState } from "react";
import LinkCard from "./LinkCard";
import { useAppContext } from "@/app/contexts/AppContext";

const Links = () => {
  const { updateLinks, links } = useAppContext();
  return (
    <div className="space-y-6">
      {links.map((_, index) => {
        return <LinkCard setLinks={updateLinks} index={index} key={index} />;
      })}
    </div>
  );
};

export default Links;
