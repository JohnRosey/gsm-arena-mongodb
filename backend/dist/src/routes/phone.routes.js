"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.initPhoneRoutes = exports.phoneRoutes = void 0;
// phoneRoutes.ts
const express_1 = require("express");
const phone_controller_1 = require("../controllers/phone.controller");
const db = __importStar(require("../models/db"));
const middleware_1 = require("../../middleware/middleware");
exports.phoneRoutes = (0, express_1.Router)();
// Fonction pour initialiser les routes
const initPhoneRoutes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.connectDB();
        exports.phoneRoutes.get('/', phone_controller_1.getAllPhones);
        exports.phoneRoutes.get('/phones/search', phone_controller_1.findPhones);
        exports.phoneRoutes.get('/phones', phone_controller_1.getAllPhones);
        exports.phoneRoutes.get('/phones/find', phone_controller_1.findPhones);
        exports.phoneRoutes.get('/:phoneId', phone_controller_1.getPhoneDetails);
        exports.phoneRoutes.post('/:phoneId/comment', middleware_1.isAuthenticated, phone_controller_1.addPhoneComment);
        exports.phoneRoutes.post('/addToCart', middleware_1.isAuthenticated, phone_controller_1.addToCart);
        // Ajoutez d'autres routes si nécessaire
        console.log('Phone routes initialized.');
    }
    catch (error) {
        console.error('Failed to initialize phone routes:', error.message);
        throw error;
    }
});
exports.initPhoneRoutes = initPhoneRoutes;
//# sourceMappingURL=phone.routes.js.map