import { type Request, type Response } from 'express'
import { createUser, findUser, findUserById, updateUserData } from '../models/user.model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

export const registerUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body

  try {
    // Check if user already exists
    const existingUser = await findUser(username)
    const existingEmail = await findUser(email)
    if (existingUser || existingEmail) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Create the user
    const newUser = await createUser(username, password, email)

    // Generate JWT token
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET)

    res.status(201).json({ message: 'User registered successfully', token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
// ... autres imports et configurations ...

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const id = await findUserById(req.params.userId)
    if (!id) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(id)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const updateUserProfile = async (req: Request, res: Response) => {
  const userId = req.params.userId; // Assurez-vous d'avoir l'userId dans les paramètres de la requête
  const userInfo = req.body; // Les informations à mettre à jour

  try {
    // Ici, j'utilise 'updateUserData' pour éviter la confusion
    const updatedUser = await updateUserData(userId, userInfo);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


// ... autres fonctions existantes ...

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body
  // Implémentez la logique de connexion

  try {
    // Check if user exists
    const existingUser = await findUser(username)
    if (!existingUser) {
      return res.status(400).json({ message: 'User does not exist' })
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' })
      // afficher le message d'erreur correspondant à l'erreur  exacte
      // return console.log(res.locals.message);
    }

    // Generate JWT token
    const token = jwt.sign({ id: existingUser.id }, JWT_SECRET)

    res.status(200).json({ message: 'User logged in successfully', token, userId: existingUser.id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Ajoutez d'autres méthodes pour la gestion de profil
