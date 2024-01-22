import { useState } from 'react';
import cls from './Posts.module.scss';
import { Post as PostModel } from "models/Post/Post";
import { typeSelectedSort } from "types/type";
import { PostList } from 'components/PostList';
import { CustomSelect } from 'components/UI/CustomSelect';
import { CustomModal } from 'components/UI/CustomModal';
import { CustomButton } from 'components/UI/CustomButton';
import { PostForm } from 'components/PostForm';
import { Loader } from 'components/UI/Loader';
import { Error } from 'components/UI/Error';
import { Pagination } from 'components/UI/Pagination';

interface Props {
	selectedSort: string;
	posts: PostModel[];
	postsLoading: string | boolean | (() => Promise<void>);
	postError: string | boolean | (() => Promise<void>);
	totalPages: number;
	page: number;
	countPosts: number;
	setSelectedSort: (text: typeSelectedSort) => void;
	create: (newPost: any) => void;
	remove: (post: any) => void;
	setPage: (num: number) => void;
}

const Posts = ({ selectedSort, posts, postsLoading, postError, totalPages, page, countPosts, setSelectedSort, create, remove, setPage }: Props) => {

	const [modal, setModal] = useState(false);

	//Формирование типа сортировки
	const sortPost = (sort: typeSelectedSort) => {
		setSelectedSort(sort);
	}

	return (
		<main>
			<div className='container'>
				<div className={cls.content}>
					<CustomSelect
						defaultValue='Сортировка'
						value={selectedSort}
						onChange={sortPost}
						disabled
						options={[
							{ value: 'title', text: 'По названию' },
							{ value: 'description', text: 'По описанию' }
						]}
					/>

					<div>
						<CustomButton onClick={() => setModal(true)}>Создать пост</CustomButton>
						<CustomModal visible={modal} setVisible={setModal}>
							<PostForm create={create} closeModal={setModal} countPosts={countPosts} />
						</CustomModal>
					</div>

				</div>

				{postError &&
					<Error postError={postError} />
				}

				{postsLoading
					? <Loader />
					: <PostList postError={postError} remove={remove} posts={posts} title='Список постов' />
				}

				<Pagination page={page} totalPages={totalPages} setPage={setPage} />

			</div>
		</main >
	);
};

export default Posts;