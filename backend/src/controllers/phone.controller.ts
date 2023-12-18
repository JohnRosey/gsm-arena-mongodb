import { type Request, type Response } from 'express'
import { getPhoneCollection } from '../models/db'
import { addCommentToPhone } from '../models/phone.model'
import {ObjectId} from "mongodb";

export const getAllPhones = async (req, res) => {
  try {
    const collection = getPhoneCollection()
    const phones = await collection.find().toArray()
    res.json(phones)

  } catch (error) {
    res.status(500).send(error.message)
  }
}
export const getBrandOptions = async (req, res) => {
  try {
    const collection = getPhoneCollection()
    const brands = await collection.distinct('brand')
    res.json(brands)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
export const findPhones = async (req, res) => {
  try {
    const { brand, ram, year } = req.query
    const collection = getPhoneCollection()

    const query: { brand?: string, ram?: number, year?: number } = {}

    if (brand) query.brand = brand
    if (ram) query.ram = parseInt(ram)
    if (year) query.year = parseInt(year)

    const phones = await collection.find(query).toArray()

    res.json(phones)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
export const getPhoneDetails = async (req: Request, res: Response) => {
  try {
    const { phoneId } = req.params;
    const collection = getPhoneCollection();
    const phone = await collection.findOne({ _id: new ObjectId(phoneId) }); // Utilisez ObjectId si l'ID est un ObjectId MongoDB
    if (!phone) {
      return res.status(404).json({ message: 'Phone not found' });
    }
    res.json(phone);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Dans phone.controller.ts

export const addPhoneComment = async (req: Request, res: Response) => {
  // ...
  try {
    const phoneId = req.params.phoneId
    // logique pour obtenir l'ID de l'utilisateur
    const userId = (req as any).session.user.id
    const { comment } = req.body

    const newComment = await addCommentToPhone(phoneId, { userId, comment, date: new Date() })

    res.status(200).json({ message: 'Commentaire ajouté avec succès', comment: newComment })
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: 'Erreur lors de lajout du commentaire', error: error.message })
  }
  // ...
}

export const addToCart = async (req: Request, res: Response) => {
  // Utilisation de addToUserCart pour ajouter au panier
}
