import { MongoClient, Collection } from 'mongodb';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
// Connexion et configuration initiale
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;


let userCollection: Collection;


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  datecreate: Date

});

const User = mongoose.model('users', userSchema);

export const createUser = async (username: string, password: string,email:string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword ,email});
  return await newUser.save();
};

export const findUser = async (username: string) => {
  return await User.findOne({ username });
};

// update user profile (email, password)
export const updateUserProfile = async (userId: string, updateData: { email?: string; password?: string; }) => {
    if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    return User.findByIdAndUpdate(userId, updateData, { new: true });
};
// get user profile (email, password) 
export const getUserProfile = async (userId: string) => {
    return User.findById(userId);
};