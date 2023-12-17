import { Request, Response } from 'express';
import { getPhoneCollection } from '../models/db';

export const getAllPhones = async (req, res) => {
    try {
        const collection = getPhoneCollection();
        const phones = await collection.find().toArray();
        res.json(phones);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
export const findPhones = async (req, res) => {
try {
    const { brand, ram, year } = req.query;
    const collection = getPhoneCollection();

    const query: { brand?: string, ram?: number, year?: number } = {};

    if (brand) query.brand = brand;
    if (ram) query.ram = parseInt(ram);
    if (year) query.year = parseInt(year);

    const phones = await collection.find(query).toArray();

    res.json(phones);
} catch (error) {
    res.status(500).send(error.message);
}
};
export const getPhoneDetails = async (req: Request, res: Response) => {
    try {
        const { phoneId } = req.params;
        const collection = getPhoneCollection();
        const phone = await collection.findOne({ id: phoneId });
        if (!phone) {
            return res.status(404).json({ message: 'Phone not found' });
        }
        res.json(phone);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
export const addPhoneComment = async (req: Request, res: Response) => {
    // Utilisation de addCommentToPhone pour ajouter un commentaire
};

export const addToCart = async (req: Request, res: Response) => {
    // Utilisation de addToUserCart pour ajouter au panier
};