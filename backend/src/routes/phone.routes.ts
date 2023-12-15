import { Router } from 'express';
import { getAllPhones } from '../controllers/phone.controller';
import { findPhones } from '../controllers/phone.controller';

export const phoneRoutes = Router();

phoneRoutes.get('/', getAllPhones);

phoneRoutes.get('/search', findPhones);

// Ajoutez d'autres routes si nécessaire
