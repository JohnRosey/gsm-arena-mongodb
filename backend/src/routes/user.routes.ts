import { Router } from 'express'
import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/user.controller'

const userRoutes = Router()

userRoutes.post('/register', registerUser)
userRoutes.post('/login', loginUser)

// Ajoutez d'autres routes pour la gestion de profil
// Route pour obtenir les informations du profil utilisateur
userRoutes.get('/user/profile/:userId', getUserProfile)

// Route pour mettre à jour le profil utilisateur
userRoutes.put('/user/profile/:userId', updateUserProfile)
export { userRoutes }
