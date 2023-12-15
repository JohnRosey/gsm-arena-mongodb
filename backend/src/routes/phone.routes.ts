// phoneRoutes.ts
import { Router } from 'express';
import { getAllPhones, findPhones } from '../controllers/phone.controller';
import * as db from '../models/db';

export const phoneRoutes = Router();

// Fonction pour initialiser les routes
export const initPhoneRoutes = async () => {
    try {
        await db.connectDB();
        phoneRoutes.get('/', getAllPhones);
        phoneRoutes.get('/search', findPhones);
        // Ajoutez d'autres routes si nécessaire
        console.log("Phone routes initialized.");
    } catch (error) {
        console.error("Failed to initialize phone routes:", error.message);
        throw error;
    }
};
