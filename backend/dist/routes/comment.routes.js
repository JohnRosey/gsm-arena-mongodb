"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoutes = void 0;
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment.controller");
const commentRoutes = (0, express_1.Router)();
exports.commentRoutes = commentRoutes;
commentRoutes.post('/', comment_controller_1.postComment);
commentRoutes.get('/', comment_controller_1.getComments);
//# sourceMappingURL=comment.routes.js.map