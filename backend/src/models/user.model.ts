import { MongoClient, Collection } from 'mongodb';
import bcrypt from 'bcryptjs';

// Connexion et configuration initiale

let userCollection: Collection;

export const createUser = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await userCollection.insertOne({ username, password: hashedPassword });
};

export const findUser = async (username: string) => {
  return await userCollection.findOne({ username });
};

// Ajoutez d'autres fonctions pour la gestion de profil
