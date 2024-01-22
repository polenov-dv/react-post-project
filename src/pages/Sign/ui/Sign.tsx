import { useContext } from 'react';
import cls from './Sign.module.scss';
import { AuthorizationContext } from 'context/AuthorizationContext';
import { User } from 'components/User';
import { ChangeUser } from 'components/ChangeUser';

export const Sign = () => {

	const { user } = useContext(AuthorizationContext);

	return (
		<main className='container'>
			<div className={cls.inner}>
				{
					!user
						? <ChangeUser />
						: <User />
				}
			</div>
		</main>
	);
};
