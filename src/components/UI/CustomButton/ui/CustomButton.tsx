import React from "react";
import cls from "./CustomButton.module.scss";

interface Props {
	children?: React.ReactNode;
	disabled?: boolean;
	bgc?: string;
	fz?: string;
	type?: "button" | "submit" | "reset";
	onClick?: (e: React.SyntheticEvent) => void;
}

export const CustomButton = ({ children, disabled, bgc, fz, type, onClick }: Props) => {

	return (
		<button
			style={{ backgroundColor: `${bgc}`, fontSize: `${fz}` }}
			className={cls.btn}
			disabled={disabled}
			onClick={onClick}
			type={type}
		>
			{children}
		</button >
	);
};