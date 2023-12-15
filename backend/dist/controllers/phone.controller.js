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
const db_1 = require("../models/db");
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
const findPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { brand, ram, year } = req.query;
        const collection = (0, db_1.getPhoneCollection)();
        const query = {};
        const phones = yield collection.find(query).toArray();
        res.json(phones);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.findPhones = findPhones;
//# sourceMappingURL=phone.controller.js.map