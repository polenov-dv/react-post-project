import axios from 'axios';
import { Post as PostModel } from 'models/Post/Post';
import { Comment as CommentModel } from 'models/Comment/Comment';

export default class PostService {
	static async getAll(limit: number = 5, page: number = 1) {
		const response = await axios.get('http://localhost:8000/posts', {
			params: {
				_limit: limit,
				_page: page
			}
		});
		return response;
	}

	static async getPostCount() {
		const response = await axios.get('http://localhost:8000/posts');
		return response;
	}

	static async getById(id: string) {
		const response = await axios.get(`http://localhost:8000/posts/${id}`);
		return response;
	}

	static async createPost(id: string, title: string, description: string, comments: CommentModel[]) {
		try {
			axios.post('http://localhost:8000/posts', {
				id: id,
				title: title,
				description: description,
				comments: comments
			});
		} catch (err) { }
	}

	static async deletePost(id: string) {
		try {
			axios.delete(`http://localhost:8000/posts/${id}`);
		} catch (err) { }
	}

	static async createComment(post: PostModel) {
		try {
			axios.put(`http://localhost:8000/posts/${post.id}`, {
				id: post.id,
				title: post.title,
				description: post.description,
				comments: post.comments
			});
		} catch (err) { }
	}

	static async createUser(id: string, name: string, email: string, password: string) {
		try {
			axios.post(`http://localhost:8000/users`, {
				id: id,
				userName: name,
				email: email,
				password: password
			});
		} catch (err) { }
	}

	static async getAllUsers() {
		const response = await axios.get('http://localhost:8000/users');
		return response;
	}
}

