import { CustomButton } from 'components/UI/CustomButton';
import cls from './PostItem.module.scss';
import { Post as PostModel } from 'models/Post/Post';
import { useNavigate } from 'react-router-dom';
import PostService from 'API/PostService';

interface Props {
	post: PostModel;
	remove: (post: any) => void;
}

export const PostItem = ({ post, remove }: Props) => {

	const { id, title, description } = post;
	const router = useNavigate();

	const removePost = (e: React.SyntheticEvent) => {
		e.preventDefault();
		remove(post);
		PostService.deletePost(String(id));
	}

	return (
		<div className={cls.post}>
			<div className={cls.content}>
				<strong className={cls.title}>
					{title}
				</strong>
				<div className={cls.desc}>
					{description}
				</div>
			</div>

			<div className={cls.buttons}>
				<CustomButton onClick={() => router(`/posts/${id}`)} fz='14px' bgc='#b9b30b'>Открыть</CustomButton>
				<CustomButton onClick={removePost} bgc='#ff527f' fz='14px'>Удалить</CustomButton>
			</div>
		</div>
	);
};