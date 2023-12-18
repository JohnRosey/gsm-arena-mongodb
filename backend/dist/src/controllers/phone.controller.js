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
exports.addToCart = exports.addPhoneComment = exports.getPhoneDetails = exports.findPhones = exports.getBrandOptions = exports.getAllPhones = void 0;
const db_1 = require("../models/db");
const phone_model_1 = require("../models/phone.model");
const mongodb_1 = require("mongodb");
const getAllPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = (0, db_1.getPhoneCollection)();
        const phones = yield collection.find().toArray();
        res.json(phones);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getAllPhones = getAllPhones;
const getBrandOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = (0, db_1.getPhoneCollection)();
        const brands = yield collection.distinct('brand');
        res.json(brands);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getBrandOptions = getBrandOptions;
const findPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { brand, ram, year } = req.query;
        const collection = (0, db_1.getPhoneCollection)();
        const query = {};
        if (brand)
            query.brand = brand;
        if (ram)
            query.ram = parseInt(ram);
        if (year)
            query.year = parseInt(year);
        const phones = yield collection.find(query).toArray();
        res.json(phones);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.findPhones = findPhones;
const getPhoneDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phoneId } = req.params;
        const collection = (0, db_1.getPhoneCollection)();
        const phone = yield collection.findOne({ _id: new mongodb_1.ObjectId(phoneId) }); // Utilisez ObjectId si l'ID est un ObjectId MongoDB
        if (!phone) {
            return res.status(404).json({ message: 'Phone not found' });
        }
        res.json(phone);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getPhoneDetails = getPhoneDetails;
// Dans phone.controller.ts
const addPhoneComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // ...
    try {
        const phoneId = req.params.phoneId;
        // logique pour obtenir l'ID de l'utilisateur
        const userId = req.session.user.id;
        const { comment } = req.body;
        const newComment = yield (0, phone_model_1.addCommentToPhone)(phoneId, { userId, comment, date: new Date() });
        res.status(200).json({ message: 'Commentaire ajouté avec succès', comment: newComment });
    }
    catch (error) {
        // Gestion des erreurs
        res.status(500).json({ message: 'Erreur lors de lajout du commentaire', error: error.message });
    }
    // ...
});
exports.addPhoneComment = addPhoneComment;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Utilisation de addToUserCart pour ajouter au panier
});
exports.addToCart = addToCart;
//# sourceMappingURL=phone.controller.js.map