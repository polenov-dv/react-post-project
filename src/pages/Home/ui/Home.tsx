import { useState, useEffect } from 'react';
import cls from './Home.module.scss';
import simple from 'shared/assets/images/simple.jpg';
import integration from 'shared/assets/images/integration.jpg';
import support from 'shared/assets/images/support.jpg';
import { changeSlide } from 'utils/slide';

const Home = () => {
	const [activeSlide, setActiveSlide] = useState(1);

	//Функция запускается при изменении слайда
	useEffect(() => {
		changeSlide(activeSlide, cls.item, cls.nav_item, cls.active);
	}, [activeSlide]);

	return (
		<main className='container'>
			<div className={cls.content}>
				<h1 className={cls.title}>Что делает JavaScript особенным? </h1>
				<ul className={cls.list}>
					<li className={cls.item}>
						<img className={cls.item_img} src={integration} alt="Интеграция" />
						<p className={cls.item_text}>
							Полная интеграция с HTML/CSS
						</p>
					</li>
					<li className={cls.item}>
						<img className={cls.item_img} src={simple} alt="Интеграция" />
						<p className={cls.item_text}>
							Простые вещи делаются просто
						</p>
					</li>
					<li className={cls.item}>
						<img className={cls.item_img} src={support} alt="Интеграция" />
						<p className={cls.item_text}>
							Поддерживается всеми основными браузерами и включён по умолчанию
						</p>
					</li>
				</ul>

				<div className={cls.nav}>
					<span onClick={() => setActiveSlide(1)} className={`${cls.nav_item} ${cls.active}`}></span>
					<span onClick={() => setActiveSlide(2)} className={cls.nav_item}></span>
					<span onClick={() => setActiveSlide(3)} className={cls.nav_item}></span>
				</div>
			</div>
		</main>
	);
};

export default Home;