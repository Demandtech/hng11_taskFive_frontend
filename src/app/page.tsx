"use client";
import DashboardLayout from "@/app/layouts/DashboardLayout";
import EmptyLink from "@/components/linkpage/EmptyLink";
import LinkPageHeader from "@/components/linkpage/LinkPageHeader";
import Links from "@/components/linkpage/NewLinks";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useAppContext } from "./contexts/AppContext";
import { InputsError } from "../types";
export default function Home() {
  const { links } = useAppContext();
  const isValidLink = links.length > 0;
  const [inputsError, setInputsError] = useState<InputsError>({
    link: { isError: false, message: "" },
    platform: { isError: false, message: "" },
  });

  return (
    <DashboardLayout>
      <div className="h-full overflow-y-auto bg-white rounded-xl p-6 sm:p-10">
        <LinkPageHeader />

        <div className="min-h-[calc(100vh-474px)] flex flex-col md:min-h-[calc(100vh-465px)]">
          {links.length > 0 ? (
            <Links inputsError={inputsError} setError={setInputsError} />
          ) : (
            <EmptyLink />
          )}
        </div>
        <div className="flex justify-end border-t border-borders mt-10 pt-5">
          <Button
            color="primary"
            className="text-white w-full sm:w-auto hover:bg-purpleHover hover:shadow-inputHover"
            size="lg"
            isDisabled={
              !isValidLink ||
              Object.values(inputsError).some((input) => input.isError)
            }
          >
            Save
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
