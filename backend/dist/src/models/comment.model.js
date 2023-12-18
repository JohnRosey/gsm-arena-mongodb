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
exports.addCommentToPhone = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Connexion et configuration initiale
let commentCollection;
const commentSchema = new mongoose_1.default.Schema({
    phoneId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Phone', // Assurez-vous que 'Phone' correspond à votre modèle de téléphone
        required: true
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User', // Assurez-vous que 'User' correspond à votre modèle d'utilisateur
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Comment = mongoose_1.default.model('Comment', commentSchema);
exports.default = Comment;
const addCommentToPhone = (phoneId, commentData) => __awaiter(void 0, void 0, void 0, function* () {
    const newComment = new Comment({
        phoneId,
        userId: commentData.userId,
        comment: commentData.comment,
        date: commentData.date
    });
    yield newComment.save();
    return newComment;
});
exports.addCommentToPhone = addCommentToPhone;
//# sourceMappingURL=comment.model.js.map