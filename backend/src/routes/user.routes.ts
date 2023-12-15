import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);

// Ajoutez d'autres routes pour la gestion de profil

export { userRoutes };
