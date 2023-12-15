"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const phone_routes_1 = require("./routes/phone.routes");
const user_routes_1 = require("./routes/user.routes");
const comment_routes_1 = require("./routes/comment.routes");
const phone_model_1 = require("./models/phone.model");
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const swaggerDocument = yamljs_1.default.load('./swagger.yaml');
const uri = process.env.MONGODB_URI;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/phones', phone_routes_1.phoneRoutes);
app.use('/api/users', user_routes_1.userRoutes);
app.use('/api/comments', comment_routes_1.commentRoutes);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
console.log("MongoDB URI:", uri);
(0, phone_model_1.connectDB)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map