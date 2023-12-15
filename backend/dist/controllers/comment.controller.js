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
exports.getComments = exports.postComment = void 0;
const postComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phoneId, userId, comment, rating } = req.body;
    // Implémentez la logique d'ajout de commentaire
});
exports.postComment = postComment;
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phoneId } = req.query;
    // Implémentez la logique de récupération des commentaires
});
exports.getComments = getComments;
//# sourceMappingURL=comment.controller.js.map