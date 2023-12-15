"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post('/register', user_controller_1.registerUser);
userRoutes.post('/login', user_controller_1.loginUser);
//# sourceMappingURL=user.routes.js.map