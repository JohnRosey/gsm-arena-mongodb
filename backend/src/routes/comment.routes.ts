import { Router } from 'express';
import { postComment, getComments } from '../controllers/comment.controller';

const commentRoutes = Router();

commentRoutes.post('/', postComment);
commentRoutes.get('/', getComments);

export { commentRoutes };
