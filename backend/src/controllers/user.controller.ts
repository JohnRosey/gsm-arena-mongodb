import { Request, Response } from 'express';
import { createUser, findUser } from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await findUser(username);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user
        const newUser = await createUser(username, hashedPassword);

        // Generate JWT token
        const token = jwt.sign({ id: newUser.insertedId }, JWT_SECRET);

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};




export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Implémentez la logique de connexion

  try {
    // Check if user exists
    const existingUser = await findUser(username);
    if (!existingUser) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: existingUser.id }, JWT_SECRET);

    res.status(200).json({ message: 'User logged in successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Ajoutez d'autres méthodes pour la gestion de profil


