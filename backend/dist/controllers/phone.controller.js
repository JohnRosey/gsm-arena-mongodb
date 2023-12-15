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
exports.findPhones = exports.getAllPhones = void 0;
const phone_model_1 = require("../models/phone.model");
const getAllPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const phones = yield (0, phone_model_1.getPhones)();
        res.json(phones);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getAllPhones = getAllPhones;
const phone_model_2 = require("../models/phone.model");
const findPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { brand, ram, year } = req.query;
    try {
        const phones = yield (0, phone_model_2.searchPhones)((brand === null || brand === void 0 ? void 0 : brand.toString()) || '', parseInt((ram === null || ram === void 0 ? void 0 : ram.toString()) || '0'), parseInt((year === null || year === void 0 ? void 0 : year.toString()) || '0'));
        res.json(phones);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.findPhones = findPhones;
// Ajoutez d'autres méthodes pour gérer les différentes requêtes
//# sourceMappingURL=phone.controller.js.map