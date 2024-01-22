import cls from './Error.module.scss';

interface Props {
	postError: string | boolean | (() => Promise<void>);
}

export const Error = ({ postError }: Props) => {
	return (
		<div className={cls.error}>
			Ошибка загрузки постов: {String(postError)}
		</div>
	);
};
