import { Comment } from "models/Comment/Comment";

export interface Post {
	id?: number;
	title?: string;
	description?: string;
	comments?: Comment[];
}