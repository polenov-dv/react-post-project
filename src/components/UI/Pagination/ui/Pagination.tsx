import { useState } from 'react';
import cls from './Pagination.module.scss';
import { usePagination } from 'hooks/usePagination/usePagination';

interface Props {
	page: number;
	totalPages: number;
	setPage: (num: number) => void;
}

export const Pagination = ({ page, totalPages, setPage }: Props) => {

	const displayPage = 3;
	const defaltBaseIndex = page <= displayPage ? 0 : page - displayPage;
	const [baseIndex, setBaseIndex] = useState(defaltBaseIndex);

	//Формирование массива кнопок пагинации
	const pages = usePagination(totalPages);

	//Изменение номера сираницы
	const changePage = (item: number) => {
		setPage(item)
	}

	const minusBaseIndex = () => {
		if (baseIndex > 0) {
			setBaseIndex(baseIndex - 1);
		}
	}

	const plusBaseIndex = () => {
		if (baseIndex < totalPages - displayPage) {
			setBaseIndex(baseIndex + 1);
		}
	}

	return (
		<div className={cls.pagination}>
			<span
				className={baseIndex !== 0 ? cls.left_arrow : `${cls.left_arrow} ${cls.end_arrow}`}
				onClick={() => minusBaseIndex()}
			>
			</span>

			{pages.map((item, index) => (
				<span
					style={index >= baseIndex && index < baseIndex + displayPage ? { display: 'block' } : { display: 'none' }}
					key={item}
					className={item === page ? `${cls.pagination_item} ${cls.pagination_item_current}` : cls.pagination_item}
					onClick={() => changePage(item)}
				>
					{item}
				</span>
			))}

			<span
				className={baseIndex !== totalPages - displayPage && totalPages > displayPage ? cls.right_arrow : `${cls.right_arrow} ${cls.end_arrow}`}
				onClick={() => plusBaseIndex()}
			>
			</span>
		</div>
	);
};
