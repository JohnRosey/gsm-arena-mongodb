// phoneRoutes.ts
import { Router } from 'express';
import { getAllPhones, findPhones, addPhoneComment, addToCart, getPhoneDetails } from '../controllers/phone.controller';
import * as db from '../models/db';

export const phoneRoutes = Router();

// Fonction pour initialiser les routes
export const initPhoneRoutes = async () => {
    try {
        await db.connectDB();
        phoneRoutes.get('/', getAllPhones);
        phoneRoutes.get('/search', findPhones);
        phoneRoutes.get('/phones', getAllPhones);
        phoneRoutes.get('/phones/find', findPhones);
        phoneRoutes.get('/phones/:phoneId', getPhoneDetails);
        phoneRoutes.post('/phones/:phoneId/comment', addPhoneComment);
        phoneRoutes.post('/phones/addToCart', addToCart);
        // Ajoutez d'autres routes si nécessaire
        console.log("Phone routes initialized.");
    } catch (error) {
        console.error("Failed to initialize phone routes:", error.message);
        throw error;
    }
};
