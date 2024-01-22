import { PostItem } from "components/PostItem";
import { Post as PostModel } from 'models/Post/Post';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Props {
	posts: PostModel[];
	title: string;
	postError: string | boolean | (() => Promise<void>);
	remove: (post: any) => void;
}

export const PostList = ({ posts, title, postError, remove }: Props) => {

	if (postError) {
		return;
	}

	if (!posts.length) {
		return (
			<h1 style={{ fontSize: '43px', textAlign: 'center' }}>
				Постов не найдено
			</h1>
		);
	}

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>
				{title}
			</h1>
			<TransitionGroup>
				{
					posts.map((post) =>
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames='post'
						>
							<PostItem remove={remove} post={post} />
						</CSSTransition>

					)
				}
			</TransitionGroup>
		</div>
	);
};
