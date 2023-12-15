import dotenv from 'dotenv';
import { MongoClient, Collection, MongoClientOptions } from 'mongodb';
const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;
const collectionName = process.env.COLLECTION_NAME;

let dbClient: MongoClient;
let phoneCollection: Collection;
require('dotenv').config();




export const connectDB = async () => {
    try {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as MongoClientOptions);
        await client.connect();

        const db = client.db(dbName);
        phoneCollection = db.collection(collectionName);
    } catch (error) {
        console.error(error.message);
    }
};

  export const getPhones = async () => {
    if (!phoneCollection) {
      throw new Error("Database not connected or collection not set");
    }
    const result = await phoneCollection.find().toArray();
    return result;
  };
  

export const searchPhones = async (brand: string, ram: number, year: number) => {
    const query: any = {};
    if (brand) query.brand = brand;
    if (ram) query.ram = ram;
    if (year) query.year = year;
  
    return await phoneCollection.find(query).toArray();
  };
  export interface Device {
    brand : string;
    model : string;
    network_technology  : string;
    two_g_bands  : string;
    three_g_bands  : string;
    four_g_bands  : string;
    network_speed  : string;
    GPRS : string;
    EDGE : string;
    announced : string;
    status  : string;
    dimentions : string;
    weight_g : string;
    weight_oz : string;
    SIM : string;
    display_type : string;
    display_resolution : string;
    display_size : string;
    OS : string;
    CPU : string;
    Chipset     : string;
    GPU : string;
    memory_card : string;
    internal_memory : string;
    RAM : string;
    primary_camera : string;
    secondary_camera : string;
    loud_speaker : string;
    audio_jack : string;
    WLAN : string;
    bluetooth : string;
    GPS : string;
    NFC : string;
    radio : string;
    USB : string;
    sensors : string;
    battery : string;
    colors : string;
    approx_price_EUR : string;
    img_url : string;
    }
// Ajoutez d'autres fonctions pour gérer la collection (CRUD)
