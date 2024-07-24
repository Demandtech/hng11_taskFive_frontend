import { Input } from "@nextui-org/react";
import React, { ChangeEvent, FC } from "react";
import { ProfileInfoProps } from "../../types";

const ProfileInfo: FC<ProfileInfoProps> = ({
  values,
  setValues,
  setInputsError,
  inputsError,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>): boolean => {
    const { name, value } = e.target;

    const newErrors = {
      email: { isError: false, message: "" },
      first_name: { isError: false, message: "" },
      last_name: { isError: false, message: "" },
      img: { isError: false, message: "" },
    };

    if (name === "email") {
      if (!value) {
        newErrors.email = { isError: true, message: "Can't be empty" };
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        newErrors.email = { isError: true, message: "Enter a valid email" };
      }
    }

    if (name === "first_name" && !value) {
      newErrors.first_name = { isError: true, message: "Can't be empty" };
    }

    if (name === "last_name" && !value) {
      newErrors.last_name = { isError: true, message: "Can't be empty" };
    }

    setInputsError(newErrors);

    return (
      !newErrors.email.isError &&
      !newErrors.first_name.isError &&
      !newErrors.last_name
    );
  };

  return (
    <div className="rounded-xl space-y-4 bg-lightGrey p-5">
      <div className="flex flex-col sm:items-center sm:flex-row">
        <label
          className="w-full text-grey sm:w-[220px] md:w-[250px] text-start"
          htmlFor="first_name"
        >
          First name*
        </label>
        <div className="flex-grow relative">
          <input
            className={`transition-all text-grey px-5 duration-300 ease-linear w-full h-10 border ${
              inputsError.first_name.isError
                ? "border-red"
                : "border-borders focus:border-purple focus-within:outline-purple"
            } rounded-lg hover:shadow-inputHover  focus-within:shadow-inputHover `}
            type="text"
            placeholder="e.g. John"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {inputsError.first_name.isError && (
            <span className="text-xs text-red absolute top-1/2 -translate-y-1/2  right-4">
              {inputsError.first_name.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:items-center sm:flex-row">
        <label
          className="w-full text-grey sm:w-[220px] md:w-[250px] text-start"
          htmlFor="first_name"
        >
          Last name*
        </label>
        <div className="relative flex-grow">
          <input
            className={`transition-all px-5 duration-300 ease-linear w-full h-10 border ${
              inputsError.last_name.isError
                ? "border-red"
                : "border-borders focus:border-purple focus-within:outline-purple"
            } rounded-lg hover:shadow-inputHover focus-within:shadow-inputHover`}
            type="text"
            placeholder="e.g. Appleseed"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {inputsError.last_name.isError && (
            <span className="text-xs text-red absolute top-1/2 -translate-y-1/2  right-4">
              {inputsError.last_name.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:items-center sm:flex-row">
        <label
          className="w-full text-grey sm:w-[220px] md:w-[250px] text-start"
          htmlFor="first_name"
        >
          Email
        </label>
        <div className="relative flex-grow h-10">
          <input
            className={`transition-all px-5 duration-300 ease-linear  w-full h-full border ${
              inputsError.email.isError
                ? "border-red"
                : "border-borders focus:border-purple focus-within:outline-purple"
            } rounded-lg hover:shadow-inputHover focus-within:shadow-inputHover `}
            type="text"
            placeholder="e.g. email@example.com"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {inputsError.email.isError && (
            <span className="text-xs text-red absolute top-1/2 -translate-y-1/2  right-4">
              {inputsError.email.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
