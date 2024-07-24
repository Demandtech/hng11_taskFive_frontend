import React, { useState, SetStateAction, Dispatch } from "react";
import LinkCard from "./NewLinkCard";
import { useAppContext } from "@/app/contexts/AppContext";
import { InputsError } from "@/types";

const Links = ({
  setError,
  inputsError,
}: {
  setError:Dispatch<SetStateAction<InputsError>>;
  inputsError: InputsError;
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
            inputError={inputsError}
          />
        );
      })}
    </div>
  );
};

export default Links;
