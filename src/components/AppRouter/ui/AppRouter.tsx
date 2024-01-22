import { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from 'pages/Home';
import { usePosts } from 'hooks/usePost/usePost';
import { Post as PostModel } from 'models/Post/Post';
import PostService from 'API/PostService';
import { useFetching } from 'hooks/useFetching/useFetching';
import { getPageCount } from 'utils/pages';
import { typeSelectedSort } from 'types/type';
import MainLayout from 'layouts/MainLayout';
import { About } from 'pages/About';
import { Loader } from 'components/UI/Loader';
import { NotFound } from 'pages/NotFound';
import { Posts } from 'pages/Posts';
import { Post } from 'pages/Post';
import { Sign } from 'pages/Sign';

export const AppRouter = () => {

	const [selectedSort, setSelectedSort] = useState<typeSelectedSort>("");
	const [searchPost, setSearchPost] = useState('');
	const [countPosts, setCountPosts] = useState(0);
	const [changePost, setChangePost] = useState(false);

	const [posts, setPosts] = useState<PostModel[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));

		const responseAll = await PostService.getPostCount();
		const lastPost: PostModel = responseAll.data.pop();
		setCountPosts(+lastPost.id);
	});

	useEffect(() => {
		fetchPosts();
	}, [page, changePost])

	const sortedAndSearchPost = usePosts(posts, selectedSort, searchPost);

	//Создание нового поста
	const createPost = (newPost: any) => {
		setPosts([...posts, newPost]);
		setChangePost(!changePost);
	}

	//Удаление поста
	const removePost = (post: any) => {
		setPosts(posts.filter(item => item.id !== post.id));
	}

	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<MainLayout searchPost={searchPost} setSearchPost={setSearchPost} />}>
					<Route path="" element={
						<Home />
					} />

					<Route path="posts" element={
						<Posts
							selectedSort={selectedSort}
							setSelectedSort={setSelectedSort}
							create={createPost}
							remove={removePost}
							posts={sortedAndSearchPost}
							postsLoading={isPostsLoading}
							postError={postError}
							totalPages={totalPages}
							page={page}
							setPage={setPage}
							countPosts={countPosts}
						/>
					} />

					<Route path="posts/:id" element={
						<Post />
					} />

					<Route path="about" element={
						<About />
					} />

					<Route path="login" element={
						<Sign />
					} />

					<Route path="*" element={
						<NotFound />
					} />
				</Route>
			</Routes>
		</Suspense>
	);
};