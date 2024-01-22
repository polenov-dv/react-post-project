import React from "react";
import cls from "./CustomSelect.module.scss";

type Option = {
	value: string;
	text: string;
}

interface Props {
	options: Option[];
	defaultValue: string;
	disabled?: boolean;
	value: string;
	onChange: (sort: string) => void;
}

export const CustomSelect = ({ options, defaultValue, disabled, value, onChange }: Props) => {
	return (
		<select
			className={cls.content}
			value={value}
			onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.currentTarget.value)}
		>
			<option disabled={disabled} value="">{defaultValue}</option>
			{
				options.map((option) => (
					<option key={option.value} value={option.value}>{option.text}</option>
				))
			}
		</select>
	);
};