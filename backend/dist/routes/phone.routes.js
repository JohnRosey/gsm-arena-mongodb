"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneRoutes = void 0;
const express_1 = require("express");
const phone_controller_1 = require("../controllers/phone.controller");
const phone_controller_2 = require("../controllers/phone.controller");
exports.phoneRoutes = (0, express_1.Router)();
exports.phoneRoutes.get('/', phone_controller_1.getAllPhones);
exports.phoneRoutes.get('/search', phone_controller_2.findPhones);
// Ajoutez d'autres routes si nécessaire
//# sourceMappingURL=phone.routes.js.map