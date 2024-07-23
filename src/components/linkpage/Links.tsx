import React, { useState } from "react";
import LinkCard from "./LinkCard";

const Links = ({setLinks, links}) => {
  
  return (
    <div className="space-y-6">
      {links.map((_, index) => {
        return <LinkCard setLinks={setLinks} index={index} key={index} />;
      })}
    </div>
  );
};

export default Links;
