import { useEffect, useState } from 'react';
import cls from './ChangeUser.module.scss';
import { CustomButton } from 'components/UI/CustomButton';
import PostService from 'API/PostService';
import { User as ModelUser } from 'models/User/User';
import { useFetching } from 'hooks/useFetching/useFetching';
import { useAutorization } from 'hooks/useAutorization/useAutorization';
import { ErrorMessage } from 'components/ErrorMessage';

export const ChangeUser = () => {

	const [isLogin, setIsLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const [users, setUsers] = useState<ModelUser[]>([]);

	const pageTitle = isLogin ? 'Войти' : 'Зарегистрироватся';
	const descriptionText = isLogin ? 'Создать аккаунт?' : 'Есть аккаунт?';

	const [fetchUser] = useFetching(async () => {
		const response = await PostService.getAllUsers();
		setUsers(response.data);
	});

	useEffect(() => {
		fetchUser();
	}, [])

	const { authorization, errorMessage } = useAutorization(userName, email, password, users, isLogin);

	return (
		<div className={cls.content}>
			<h1 className={cls.title}>{pageTitle}</h1>
			<span className={cls.change_login}
				onClick={() => setIsLogin(!isLogin)}
			>{descriptionText}</span>
			<form className={cls.form} onSubmit={authorization}>
				<fieldset className={cls.form_content}>
					<ErrorMessage textMessage={errorMessage} />
					<fieldset className={cls.form_item}>
						<input
							type="text"
							className={cls.form_input}
							placeholder='Имя'
							value={userName}
							onChange={e => setUserName(e.target.value)}
						/>
					</fieldset>
					{!isLogin && (
						<fieldset className={cls.form_item}>
							<input
								type="email"
								className={cls.form_input}
								placeholder='Электронная почта'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</fieldset>
					)}
					<fieldset className={cls.form_item}>
						<input
							type="password"
							className={cls.form_input}
							placeholder='Пароль'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</fieldset>
					<CustomButton type='submit'>{pageTitle}</CustomButton>
				</fieldset>
			</form>
		</div>
	);
};
