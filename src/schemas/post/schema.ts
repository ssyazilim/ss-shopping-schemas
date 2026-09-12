import { registry } from '../registry';
import { PostSchema, PostCountsSchema, CommentSchema } from '../../types/post';
import { ADD_POST, ADD_POSTS, LIKE_POST, COMMENT_POST } from './validation';

export const AddPostSchema = registry.register('AddPost', ADD_POST());

export const AddPostsSchema = registry.register('AddPosts', ADD_POSTS());

export const LikePostSchema = registry.register('likePost', LIKE_POST());

export const CommentPostSchema = registry.register('commentPost', COMMENT_POST());

export const PostModel = registry.register('Post', PostSchema);

export const PostCountsModel = registry.register('PostCounts', PostCountsSchema);

export const CommentModel = registry.register('Comment', CommentSchema);
