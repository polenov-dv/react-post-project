import React, { useState, ChangeEvent } from 'react';
import cls from "./PostForm.module.scss";
import { CustomButton } from 'components/UI/CustomButton';
import { CustomInput } from 'components/UI/CustomInput';
import PostService from 'API/PostService';

interface Props {
	countPosts: number;
	create: (newPost: any) => void;
	closeModal: (status: boolean) => void;
}

export const PostForm = ({ countPosts, create, closeModal }: Props) => {

	const [post, setPost] = useState({ title: '', description: '', comments: [] });

	const addNewPost = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (post.title.length && post.description.length) {
			const newPost = {
				...post, id: String(+countPosts + 1)
			}
			PostService.createPost(String(+countPosts + 1), post.title, post.description, post.comments);
			create(newPost);
			setPost({ title: '', description: '', comments: [] });
			closeModal(false);
		}
	}

	return (
		<form className={cls.content}>
			<CustomInput
				type='text'
				placeholder='Название поста'
				value={post.title}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({ ...post, title: e.currentTarget.value })}
				width='100%'
			/>

			<CustomInput
				type='text"'
				placeholder='Описание поста'
				value={post.description}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({ ...post, description: e.currentTarget.value })}
				width='100%'
			/>

			<CustomButton
				onClick={addNewPost}
			>
				Создать пост
			</CustomButton>
		</form>
	);
};

