import React from "react";
import LinkCard from "./LinkCard";

const Links = () => {
  return (
    <div className="space-y-6">
      {[" ", " "].map((_, index) => {
        return <LinkCard index={index} key={index} />;
      })}
    </div>
  );
};

export default Links;
