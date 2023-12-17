/**
 * Ce fichier contient les fonctions directement liées à l'interaction avec la base de données
 * 
 */
import dotenv from 'dotenv';
import { MongoClient, Collection } from 'mongodb';
dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;
const collectionName = process.env.COLLECTION_NAME;

let phoneCollection: Collection;

export const connectDB = async () => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(dbName);
        phoneCollection = db.collection(collectionName);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error; // Relancer l'erreur pour la gestion externe
    }
};

export const getPhones = async () => {
    if (!phoneCollection) {
        throw new Error("Database not connected or collection not set");
    }
    return await phoneCollection.find().toArray();
};

// Votre code pour searchPhones et l'interface Device...

// Assurez-vous que connectDB est appelée avant d'utiliser les autres fonctions exportées

export const searchPhones = async (brand: string, ram: number, year: number) => {
    const query: any = {};
    if (brand) query.brand = brand;
    if (ram) query.ram = ram;
    if (year) query.year = year;
  
    return await phoneCollection.find(query).toArray();
  }
  export const getPhoneById = async (phoneId: string) => {
    // Logique pour obtenir un téléphone par son ID
};

export const addCommentToPhone = async (phoneId: string, comment: { userId: string; comment: string; date: Date; }) => {
    // Logique pour ajouter un commentaire à un téléphone
};

export const addToUserCart = async (userId: string, phoneId: string) => {
    // Logique pour ajouter un téléphone au panier d'un utilisateur
};