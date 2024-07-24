"use client";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProfileHeader from "@/components/profile/ProfileHeader";
import UploadImage from "@/components/profile/UploadImage";
import ProfileInfo from "@/components/profile/ProfileInfo";
import { Button } from "@nextui-org/react";
import {ProfileInfoErrors, ProfileInfoValues} from "../../types"


const Page: React.FC = () => {
  const [values, setValues] = useState<ProfileInfoValues>({
    first_name: "",
    last_name: "",
    email: "",
    img: "",
  });

  const [inputError, setInputsError] = useState<ProfileInfoErrors>({
    first_name: { isError: false, message: "" },
    last_name: { isError: false, message: "" },
    email: { isError: false, message: "" },
    img: { isError: false, message: "" },
  });
  

  return (
    <DashboardLayout>
      <div className="h-full overflow-y-auto bg-white rounded-xl p-6 sm:p-10">
        <div className="min-h-[calc(100vh-320px)] flex flex-col md:min-h-[calc(100vh-290px)]">
          <ProfileHeader />

          <UploadImage />
          <ProfileInfo
            setInputsError={setInputsError}
            inputsError={inputError}
            values={values}
            setValues={setValues}
          />
        </div>

        <div className="flex justify-end border-t border-borders mt-10 pt-5">
          <Button
            color="primary"
            className="text-white w-full sm:w-auto hover:bg-purpleHover hover:shadow-inputHover"
            size="lg"
            isDisabled={Object.values(inputError).some(
              (input) => input.isError
            )}
          >
            Save
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Page;
