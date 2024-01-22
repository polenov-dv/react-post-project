import cls from './Comment.module.scss';
import user_img from 'shared/assets/images/profile.jpg';

interface Props {
	user: string;
	text: string;
}

export const Comment = ({ user, text }: Props) => {
	return (
		<div className={cls.content}>
			<div className={cls.user}>
				<img className={cls.user_img} src={user_img} alt="Пользователь" />
				<p className={cls.name}>{user}</p>
			</div>

			<div className={cls.comment_text}>
				{text}
			</div>
		</div>
	);
};
