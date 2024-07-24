import { Dispatch, SetStateAction } from "react";

export type InputProps = {
  placeholder?: string;
  type?: string;
  label?: string;
  name?: string;
  value?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type RegisterProps = {
  email: string;
  password: string;
  confirm_password: string;
};

export type LoginInputError = {
  email: { isInvalid: boolean; message: string };
  password: { isInvalid: boolean; message: string };
};

export type RegisterInputError = {
  email: { isInvalid: boolean; message: string };
  password: { isInvalid: boolean; message: string };
  confirm_password: { isInvalid: boolean; message: string };
};

export type LinkCardProps = {
  index: number;
  link: Link;
  setError: Dispatch<SetStateAction<InputsError>>;
  inputError: InputsError;
};

export type Link = {
  name: string;
  url: string;
};

export type InputError = {
  isError: boolean;
  message: string;
};

export type InputsError = {
  link: InputError;
  platform: InputError;
};

export type ProfileInfoValues = {
  first_name: string;
  last_name: string;
  email: string;
  img: string;
};


export type ProfileInfoErrors = {
  first_name: InputError;
  last_name:InputError;
  email:InputError;
  img: InputError;
};

export type ProfileInfoProps = {
  values: ProfileInfoValues;
  setValues: React.Dispatch<SetStateAction<ProfileInfoValues>>;
  inputsError: ProfileInfoErrors;
  setInputsError: React.Dispatch<SetStateAction<ProfileInfoErrors>>;
};
