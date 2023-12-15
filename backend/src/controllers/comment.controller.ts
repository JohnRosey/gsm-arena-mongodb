import { Request, Response } from 'express';
import { addComment, getCommentsByPhoneId } from '../models/comment.model';

export const postComment = async (req: Request, res: Response) => {
  const { phoneId, userId, comment, rating } = req.body;
  // Implémentez la logique d'ajout de commentaire
};

export const getComments = async (req: Request, res: Response) => {
  const { phoneId } = req.query;
  // Implémentez la logique de récupération des commentaires
};
