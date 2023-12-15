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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPhones = exports.getPhones = exports.connectDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = require("mongodb");
dotenv_1.default.config();
const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;
const collectionName = process.env.COLLECTION_NAME;
let phoneCollection;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new mongodb_1.MongoClient(uri);
        yield client.connect();
        const db = client.db(dbName);
        phoneCollection = db.collection(collectionName);
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("Database connection failed:", error.message);
        throw error; // Relancer l'erreur pour la gestion externe
    }
});
exports.connectDB = connectDB;
const getPhones = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!phoneCollection) {
        throw new Error("Database not connected or collection not set");
    }
    return yield phoneCollection.find().toArray();
});
exports.getPhones = getPhones;
// Votre code pour searchPhones et l'interface Device...
// Assurez-vous que connectDB est appelée avant d'utiliser les autres fonctions exportées
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
//# sourceMappingURL=phone.model.js.map