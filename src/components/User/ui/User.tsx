import React, { useContext } from 'react';
import cls from './User.module.scss';
import { AuthorizationContext, LOCAL_STORAGE_AUTORIZATION_KEY } from 'context/AuthorizationContext';
import { CustomButton } from 'components/UI/CustomButton';
import avatar from 'shared/assets/images/profile.jpg';

export const User = () => {

	const { user, setUser } = useContext(AuthorizationContext);

	//Сменить пользователя
	const changeUser = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setUser('');
		localStorage.setItem(LOCAL_STORAGE_AUTORIZATION_KEY, "")
	}

	return (
		<div className='content'>
			<div className={cls.menu}>
				<div className={cls.id_user}>
					<img className={cls.user_img} src={avatar} alt="Логотип" />
					<p className={cls.user_text}>{user}</p>
				</div>
				<CustomButton onClick={changeUser}>Выйти</CustomButton>
			</div>

			<div className={cls.info}>
				Информация о пользователe:
			</div>
		</div>
	);
};
