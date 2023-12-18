"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post('/register', user_controller_1.registerUser);
userRoutes.post('/login', user_controller_1.loginUser);
// Ajoutez d'autres routes pour la gestion de profil
// Route pour obtenir les informations du profil utilisateur
userRoutes.get('/user/profile/:userId', user_controller_1.getUserProfile);
// Route pour mettre à jour le profil utilisateur
userRoutes.put('/user/profile/:userId', user_controller_1.updateUserProfile);
//# sourceMappingURL=user.routes.js.map