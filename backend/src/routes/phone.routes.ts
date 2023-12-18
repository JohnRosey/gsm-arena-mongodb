// phoneRoutes.ts
import { Router } from 'express'
import { getAllPhones, findPhones, addPhoneComment, addToCart, getPhoneDetails, getBrandOptions } from '../controllers/phone.controller'
import * as db from '../models/db'
import { isAuthenticated } from '../../middleware/middleware'

export const phoneRoutes = Router()

// Fonction pour initialiser les routes
export const initPhoneRoutes = async () => {
  try {
    await db.connectDB()
    phoneRoutes.get('/', getAllPhones)
    phoneRoutes.get('/phones/search', findPhones)
    phoneRoutes.get('/phones', getAllPhones)
    phoneRoutes.get('/phones/find', findPhones)
    phoneRoutes.get('/brands', getBrandOptions)
    phoneRoutes.get('/:phoneId', getPhoneDetails)
    phoneRoutes.post('/:phoneId/comment', isAuthenticated, addPhoneComment)
    phoneRoutes.post('/addToCart', isAuthenticated, addToCart)
    // Ajoutez d'autres routes si nécessaire
    console.log('Phone routes initialized.')
  } catch (error) {
    console.error('Failed to initialize phone routes:', error.message)
    throw error
  }
}
