"use client";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Input from "@/components/reusables/Input";
import { LogoIcon, LogoText } from "@/components/Svgs";
import Link from "next/link";
import { LoginProps, LoginInputError } from "@/types";
import { login } from "./action";

const Page = () => {
	const [value, setValue] = useState<LoginProps>({
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [inputError, setInputError] = useState<LoginInputError>({
		email: { isInvalid: false, message: "" },
		password: { isInvalid: false, message: "" },
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;

		setValue((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});

		setInputError((prev) => ({
			...prev,
			[name]: { isInvalid: false, message: "" },
		}));
	};

	const validateInputs = () => {
		const newErrors = {
			email: { isInvalid: false, message: "" },
			password: { isInvalid: false, message: "" },
		};

		if (!value.email) {
			newErrors.email = { isInvalid: true, message: "Can't be empty" };
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
			newErrors.email = { isInvalid: true, message: "Enter a valid email" };
		}

		if (!value.password) {
			newErrors.password = { isInvalid: true, message: "Can't be empty" };
		} else if (value.password.length < 8) {
			newErrors.password = { isInvalid: true, message: "Password too short" };
		}

		setInputError(newErrors);

		return !newErrors.email.isInvalid && !newErrors.password.isInvalid;
	};

	const handleSubmit = async () => {
		if (validateInputs()) {
			try {
				setIsLoading(true);
				const formData = new FormData();

				formData.append("email", value.email);
				formData.append("password", value.password);

				await login(formData);
				console.log("Form has no error");
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		} else {
			console.log("Form have error");
		}
	};

	useEffect(() => {
		localStorage.setItem("login-data", JSON.stringify(value));
	}, [value]);

	useEffect(() => {
		const savedValue = localStorage.getItem("login-data");
		if (savedValue) {
			setValue(JSON.parse(savedValue));
		}
	}, []);

	return (
		<div className="max-w-[476px] flex gap-10 flex-col pt-10 sm:justify-center mx-auto bg-white sm:bg-lightGrey min-h-dvh">
			<div className="flex items-center gap-3 justify-center ">
				<LogoIcon />
				<LogoText />
			</div>
			<div className="bg-white p-8 sm:p-10 rounded-xl">
				<div className="mb-10">
					<h2 className="font-semibold text-lg md:text-3xl mb-2 text-darkGrey">
						Login
					</h2>
					<p className="text-grey">
						Add your details below to get back into the app
					</p>
				</div>
				<form className="flex flex-col gap-5">
					<Input
						name="email"
						label="Email address"
						type="email"
						placeholder="e.g. alex@gmail.com"
						value={value.email}
						onChange={handleChange}
						isInvalid={inputError.email.isInvalid}
						errorMessage={inputError.email.message}
					/>
					<Input
						label="Password"
						type="password"
						placeholder="Enter your password"
						name="password"
						value={value.password}
						onChange={handleChange}
						isInvalid={inputError.password.isInvalid}
						errorMessage={inputError.password.message}
					/>
					<Button
						onPress={handleSubmit}
						isLoading={isLoading}
						size="lg"
						color="primary"
						className="text-white w-full rounded-lg hover:bg-purpleHover"
					>
						Login{" "}
					</Button>
				</form>

				<div className="text-center mt-10">
					<p className="text-darkGrey">
						Don’t have an account? <br className="sm:hidden" />{" "}
						<Link className="text-purple" href="/register">
							Create account
						</Link>{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Page;
