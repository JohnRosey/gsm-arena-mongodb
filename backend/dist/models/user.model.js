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
exports.updateUser = exports.findUser = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = __importDefault(require("mongoose"));
// Connexion et configuration initiale
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
let userCollection;
const userSchema = new mongoose_1.default.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
    datecreate: Date
});
const User = mongoose_1.default.model('users', userSchema);
const createUser = (username, password, email) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    return yield newUser.save();
});
exports.createUser = createUser;
const findUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User.findOne({ username });
});
exports.findUser = findUser;
// Ajoutez d'autres fonctions pour la gestion de profil
const updateUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateUser = updateUser;
//# sourceMappingURL=user.model.js.map