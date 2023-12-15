import { Request, Response } from 'express';
import { getPhones } from '../models/phone.model';

export const getAllPhones = async (req: Request, res: Response) => {
  try {
    const phones = await getPhones();
    res.json(phones);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
import { searchPhones } from '../models/phone.model';

export const findPhones = async (req: Request, res: Response) => {
    const { brand, ram, year } = req.query;
    try {
        const phones = await searchPhones(brand?.toString() || '', parseInt(ram?.toString() || '0'), parseInt(year?.toString() || '0'));
        res.json(phones);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Ajoutez d'autres méthodes pour gérer les différentes requêtes
