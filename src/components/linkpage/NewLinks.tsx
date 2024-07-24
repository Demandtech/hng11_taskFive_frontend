import React, { useState, SetStateAction, Dispatch } from "react";
import LinkCard from "./NewLinkCard";
import { useAppContext } from "@/app/contexts/AppContext";

const Links = ({
  setError,
  error,
}: {
  setError: Dispatch<SetStateAction<boolean>>;
  error: boolean;
}) => {
  const { links } = useAppContext();

  return (
    <div className="space-y-6">
      {links.map((link, index) => {
        return (
          <LinkCard
            setError={setError}
            link={link}
            index={index}
            key={link.name}
            error={error}
          />
        );
      })}
    </div>
  );
};

export default Links;
