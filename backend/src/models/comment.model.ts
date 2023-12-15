import { Collection } from 'mongodb';

// Connexion et configuration initiale

let commentCollection: Collection;

export const addComment = async (phoneId: string, userId: string, comment: string, rating: number) => {
  return await commentCollection.insertOne({ phoneId, userId, comment, rating });
};

export const getCommentsByPhoneId = async (phoneId: string) => {
  return await commentCollection.find({ phoneId }).toArray();
};
