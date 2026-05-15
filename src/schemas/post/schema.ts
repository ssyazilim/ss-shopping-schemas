import { registry } from '../registry';
import { ADD_POST, ADD_POSTS, LIKE_POST, COMMENT_POST } from './validation';

export const PostSchema = registry.register('post', ADD_POST());

export const AddPostsSchema = registry.register('addPosts', ADD_POSTS());

export const LikePostSchema = registry.register('likePost', LIKE_POST());

export const CommentPostSchema = registry.register('commentPost', COMMENT_POST());
