import { useState, ChangeEvent, useContext } from 'react';
import cls from './Comments.module.scss';
import { Post as PostModel } from 'models/Post/Post';
import { Comment } from 'components/Comment';
import { CustomButton } from 'components/UI/CustomButton';
import { CustomText } from 'components/UI/CustomText';
import PostService from 'API/PostService';
import { AuthorizationContext } from 'context/AuthorizationContext';

interface Props {
	post: PostModel
}

export const Comments = ({ post }: Props) => {

	const [textComment, setTextComment] = useState('');
	const [changePost, setChangePost] = useState<PostModel>(post);
	const { user } = useContext(AuthorizationContext);

	const createComment = () => {
		if (user !== '') {
			if (textComment.length !== 0) {
				const wrkPost = Object.assign({}, post);
				const newComment = { user: user, text: textComment };
				wrkPost.comments.push(newComment);
				PostService.createComment(wrkPost);
				setChangePost(wrkPost);
				setTextComment('');
			}
		} else {
			alert('Необходимо авторизоваться!');
		}
	}

	return (
		<div>
			<span className={cls.comments}>Комментарии:</span>
			<div className={cls.new_comment}>
				<CustomText
					value={textComment}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTextComment(e.currentTarget.value)}
					width='88%'
					height='75px'
				/>
				<CustomButton onClick={() => createComment()}>Добавить</CustomButton>
			</div>

			{
				changePost.comments !== undefined
					? <div className={cls.comments_wrapper}>
						{
							changePost.comments.map((item, index) => (
								<Comment user={item.user} text={item.text} key={index} />
							))
						}
					</div>
					: null
			}
		</div >
	);
};
