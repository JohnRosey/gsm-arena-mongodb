"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPhones = exports.getPhones = exports.connectDB = void 0;
const mongodb_1 = require("mongodb");
const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;
const collectionName = process.env.COLLECTION_NAME;
let dbClient;
let phoneCollection;
require('dotenv').config();
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new mongodb_1.MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        yield client.connect();
        const db = client.db(dbName);
        phoneCollection = db.collection(collectionName);
    }
    catch (error) {
        console.error(error.message);
    }
});
exports.connectDB = connectDB;
const getPhones = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!phoneCollection) {
        throw new Error("Database not connected or collection not set");
    }
    const result = yield phoneCollection.find().toArray();
    return result;
});
exports.getPhones = getPhones;
const searchPhones = (brand, ram, year) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    if (brand)
        query.brand = brand;
    if (ram)
        query.ram = ram;
    if (year)
        query.year = year;
    return yield phoneCollection.find(query).toArray();
});
exports.searchPhones = searchPhones;
// Ajoutez d'autres fonctions pour gérer la collection (CRUD)
//# sourceMappingURL=phone.model.js.map