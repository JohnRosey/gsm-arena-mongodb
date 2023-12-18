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
exports.getPhoneCollection = exports.getUserCollection = exports.connectDB = void 0;
// db.ts
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;
const collectionName = process.env.COLLECTION_NAME;
let phoneCollection;
let userCollection;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new mongodb_1.MongoClient(uri);
    yield client.connect();
    const db = client.db(dbName);
    phoneCollection = db.collection(collectionName);
    console.log('Database connected successfully!!!!');
    userCollection = db.collection('users');
    console.log(phoneCollection.collectionName.toString());
    return phoneCollection;
});
exports.connectDB = connectDB;
const getUserCollection = () => {
    if (!userCollection) {
        throw new Error('Database not initialized');
    }
    else {
        return userCollection;
    }
};
exports.getUserCollection = getUserCollection;
const getPhoneCollection = () => {
    if (!phoneCollection) {
        throw new Error('Database not connected or collection not set');
    }
    return phoneCollection;
};
exports.getPhoneCollection = getPhoneCollection;
//# sourceMappingURL=db.js.map