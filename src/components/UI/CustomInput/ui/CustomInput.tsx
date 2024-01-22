import React from "react";
import cls from "./CustomInput.module.scss";

interface Props {
	type: string;
	placeholder?: string;
	value?: string;
	width?: string;
	min_height?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CustomInput = ({ type, placeholder, value, width, min_height, onChange }: Props) => {

	return (
		<input
			className={cls.content}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			style={{ width: `${width}`, minHeight: `${min_height}` }}
		/>
	)
}