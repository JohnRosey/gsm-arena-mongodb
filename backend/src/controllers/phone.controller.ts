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
      const query = {};
      const phones = await collection.find(query).toArray();
      res.json(phones);
  } catch (error) {
      res.status(500).send(error.message);
  }
};
