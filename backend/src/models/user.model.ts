import { MongoClient, type Collection } from 'mongodb'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
// Connexion et configuration initiale
require('dotenv').config()

const mongoURI = process.env.MONGODB_URI

let userCollection: Collection

const userSchema = new mongoose.Schema({
  userId:String,
  username: String,
  email: String,
  password: String,
  role: String,
  datecreate: Date

})

const User = mongoose.model('users', userSchema)

export const createUser = async (username: string, password: string, email: string) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = new User({ username, password: hashedPassword, email })
  return await newUser.save()
}

export const findUser = async (username: string) => {
  return await User.findOne({ username })
}
export const findUserById = async (userId: string) => {
return await User.findById(userId)
}
// update user profile (email, password)
export const updateUserData = async (userId, updateData) => {
  try {
    // Si 'updateData' contient un mot de passe, hachez-le avant de l'enregistrer
   

    // Mettez à jour l'utilisateur dans la base de données
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true } // L'option 'new: true' renvoie l'objet après la mise à jour
    );

    return updatedUser;
  } catch (error) {
    // Gérer les erreurs ici (par exemple, renvoyer une erreur ou null)
    console.error('Error updating user data:', error);
    throw error;
  }
};
// get user profile (email, password)
export const getUserProfile = async (userId: string) => {
  return await User.findById(userId)
}
