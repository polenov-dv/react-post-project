import React, { useContext, useState } from 'react';
import cls from './Header.module.scss';
import { CustomInput } from 'components/UI/CustomInput';
import { Link, useLocation } from 'react-router-dom';
import { AuthorizationContext } from 'context/AuthorizationContext';
import avatar from 'shared/assets/images/profile.jpg';

interface Props {
	searchPost: string;
	setSearchPost: (text: string) => void;
}

export const Header = ({ searchPost, setSearchPost }: Props) => {

	const location = useLocation();
	const { user } = useContext(AuthorizationContext);
	const [openMenu, setOpenMenu] = useState(false);

	const nav_list = openMenu
		? cls.menu_list + " " + cls.menu_open
		: cls.menu_list;

	return (
		<header className={`${cls.header} container`}>
			<div className={cls.inner}>
				<Link className={cls.logo} to="/">
					Post
				</Link>
				<CustomInput
					type='text'
					placeholder='Поиск'
					value={searchPost}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchPost(e.currentTarget.value)}
					width='40%'
				/>

				<nav className={cls.menu}>
					<div onClick={() => setOpenMenu(!openMenu)} className={cls.menu_btn}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul className={nav_list}>
						<li className={cls.nav_item}>
							<Link
								onClick={() => setOpenMenu(false)}
								className={location.pathname === "/" ? cls.nav_link_active : cls.nav_link}
								to="/"
							>
								Главная
							</Link>
						</li>
						<li className={cls.nav_item}>
							<Link
								onClick={() => setOpenMenu(false)}
								className={location.pathname === "/posts" ? cls.nav_link_active : cls.nav_link}
								to="/posts"
							>
								Посты
							</Link>
						</li>
						<li className={`${cls.nav_item} ${cls.nav_item_fix}`}>
							<Link
								onClick={() => setOpenMenu(false)}
								className={location.pathname === "/about" ? cls.nav_link_active : cls.nav_link}
								to="/about"
							>
								O сайте
							</Link>
						</li>
						<li className={cls.nav_item}>
							<Link
								onClick={() => setOpenMenu(false)}
								className={location.pathname === "/login" ? cls.nav_link_active : cls.nav_link}
								to="/login"
							>
								{
									user ? <img className={cls.avatar} src={avatar} alt="Аватарка" /> : <span>Регистрация</span>
								}
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header >
	);
};