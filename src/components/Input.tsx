import { Input } from "@nextui-org/react";
import React from "react";
import { InputProps } from "@/types";
import { Envelop, Lock } from "./Svgs";

const Comp: React.FC<InputProps> = ({
	placeholder,
	type,
	label,
	name,
	onChange,
	value,
	isInvalid,
	errorMessage,
}) => {
	return (
		<div className='relative'>
			<Input
				placeholder={placeholder}
				classNames={{
					inputWrapper:
						"!min-h-12 border-1 text-darkGrey rounded-lg border-borders focus-within:shadow-inputHover focus:border-purple focus-within:outline-purple",
					label: `${isInvalid ? "text-darkGrey" : "text-darkGrey"}`,
				}}
				variant="bordered"
				color="primary"
				type={type}
				label={label}
				labelPlacement="outside"
				startContent={type === "password" ? <Lock /> : <Envelop />}
				onChange={onChange}
				value={value}
				name={name}
				isInvalid={isInvalid}
			/>
			{isInvalid && <span className='text-xs text-red absolute top-1/2 pt-1 right-4'>{errorMessage}</span>}
		</div>
	);
};

export default Comp;
