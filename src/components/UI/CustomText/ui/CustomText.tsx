import React from 'react';
import cls from './CustomText.module.scss';

interface Props {
	width?: string;
	height?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const CustomText = ({ width, height, value, onChange }: Props) => {
	return (
		<textarea
			className={cls.content}
			value={value}
			onChange={onChange}
			style={{ width: `${width}`, height: `${height}` }}
		>
		</textarea>
	);
};
