import {Dispatch,SetStateAction  } from "react";

export type InputProps = {
	placeholder?: string;
	type?: string;
	label?: string;
	name?: string;
	value?: string;
	isInvalid: boolean;
	errorMessage: string;
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
	setError: Dispatch<SetStateAction<boolean>>
	error: boolean
};

export type Link = {
	name: string;
	url: string;
};

// export type Link = {
//   name: string;
//   icon: ReactNode;
//   url: string;
// };
