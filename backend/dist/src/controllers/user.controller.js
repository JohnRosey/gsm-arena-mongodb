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
exports.loginUser = exports.updateUserProfile = exports.getUserProfile = exports.registerUser = void 0;
const user_model_1 = require("../models/user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    try {
        // Check if user already exists
        const existingUser = yield (0, user_model_1.findUser)(username);
        const existingEmail = yield (0, user_model_1.findUser)(email);
        if (existingUser || existingEmail) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create the user
        const newUser = yield (0, user_model_1.createUser)(username, password, email);
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: newUser.id }, JWT_SECRET);
        res.status(201).json({ message: 'User registered successfully', token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.registerUser = registerUser;
// ... autres imports et configurations ...
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_model_1.findUser)(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getUserProfile = getUserProfile;
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const updatedUser = yield (0, exports.updateUserProfile)(email, password);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.updateUserProfile = updateUserProfile;
// ... autres fonctions existantes ...
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Implémentez la logique de connexion
    try {
        // Check if user exists
        const existingUser = yield (0, user_model_1.findUser)(username);
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }
        // Check if password is correct
        const isPasswordCorrect = yield bcryptjs_1.default.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
            // afficher le message d'erreur correspondant à l'erreur  exacte
            // return console.log(res.locals.message);
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: existingUser.id }, JWT_SECRET);
        res.status(200).json({ message: 'User logged in successfully', token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.loginUser = loginUser;
// Ajoutez d'autres méthodes pour la gestion de profil
//# sourceMappingURL=user.controller.js.map