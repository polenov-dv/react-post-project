import React from "react";
import cls from "./CustomModal.module.scss";

interface Props {
	children?: React.ReactNode;
	visible: boolean;
	setVisible: (status: boolean) => void;
}

export const CustomModal = ({ children, visible, setVisible }: Props) => {

	const modalClasses = [cls.modalWindow];
	if (visible) {
		modalClasses.push(cls.active);
	}

	return (
		<div
			className={modalClasses.join(' ')}
			onClick={() => setVisible(false)}
		>
			<div
				className={cls.content}
				onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}