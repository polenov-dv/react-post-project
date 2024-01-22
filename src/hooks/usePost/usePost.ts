import { useMemo } from "react";
import { Post as PostModel } from 'models/Post/Post';
import { typeSelectedSort } from "types/type";

//Сортировка постов (по названию/по описанию)
export const useSortedPosts = (posts: PostModel[], sort: typeSelectedSort) => {

	const sortedPost = useMemo(() => {
		if (sort !== '') {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
		}
		return posts;
	}, [sort, posts])

	return sortedPost;
}

//Сортировка постов (по названию/по описанию и поиском)
export const usePosts = (posts: PostModel[], sort: typeSelectedSort, search: string) => {

	const sortedPost = useSortedPosts(posts, sort);

	const sortedAndSearchPost = useMemo(() => {
		return sortedPost.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
	}, [search, sortedPost])

	return sortedAndSearchPost;
}