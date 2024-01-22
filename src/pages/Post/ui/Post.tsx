import PostService from 'API/PostService';
import cls from './Post.module.scss';
import { useFetching } from 'hooks/useFetching/useFetching';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post as PostModel } from 'models/Post/Post';
import { Loader } from 'components/UI/Loader';
import { Comments } from 'components/Comments';

const Post = () => {
	const { id } = useParams();
	const [post, setPost] = useState<PostModel>({});

	const [fetchPostById, isLoading, error] = useFetching(async (curId: string) => {
		const response = await PostService.getById(curId);
		setPost(response.data);
	});

	useEffect(() => {
		fetchPostById(+id);
	}, []);

	return (

		<main className='container'>
			{isLoading
				? <Loader />
				: <div className={cls.content}>
					<h2 className={cls.title}>
						{post.title}
					</h2>
					<p className={cls.desc}>
						{post.description}
					</p>
					<Comments post={post} />
				</div>
			}
		</main>
	);
};

export default Post;