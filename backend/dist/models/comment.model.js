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
exports.getCommentsByPhoneId = exports.addComment = void 0;
// Connexion et configuration initiale
let commentCollection;
const addComment = (phoneId, userId, comment, rating) => __awaiter(void 0, void 0, void 0, function* () {
    return yield commentCollection.insertOne({ phoneId, userId, comment, rating });
});
exports.addComment = addComment;
const getCommentsByPhoneId = (phoneId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield commentCollection.find({ phoneId }).toArray();
});
exports.getCommentsByPhoneId = getCommentsByPhoneId;
//# sourceMappingURL=comment.model.js.map