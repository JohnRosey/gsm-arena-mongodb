"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
// import swaggerUi from 'swagger-ui-express'
// import YAML from 'yamljs'
const phone_routes_1 = require("./routes/phone.routes");
const user_routes_1 = require("./routes/user.routes");
const comment_routes_1 = require("./routes/comment.routes");
const db_1 = require("./models/db");
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const sessionSecret = process.env.SESSION_SECRET;
// const swaggerDocument = YAML.load('./swagger.yaml')
const uri = process.env.MONGODB_URI;
const mongoURI = uri;
mongoose_1.default.connect(mongoURI)
    .then(() => { console.log('MongoDB Connected'); })
    .catch(err => { console.error('MongoDB connection error:', err); });
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200'
}));
app.use((0, express_session_1.default)({
    secret: sessionSecret, // Utilisation d'une variable d'environnement
    resave: false,
    saveUninitialized: false, // Modifié pour réduire la création de sessions inutiles
    cookie: {
        maxAge: 120000, // Correction de la casse et durée en millisecondes
        httpOnly: true, // Sécurité supplémentaire
        secure: false // Envoie uniquement sur HTTPS
    },
    store: connect_mongo_1.default.create({ mongoUrl: uri })
}));
(0, phone_routes_1.initPhoneRoutes)().then(() => {
    app.use('/api/phones', phone_routes_1.phoneRoutes);
}).catch(error => {
    console.error('Server initialization failed:', error.message);
});
app.use('/api/users', user_routes_1.userRoutes);
app.use('/api/comments', comment_routes_1.commentRoutes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.get('/', (req, res) => {
    res.send('Hello World!');
});
console.log('MongoDB URI:', uri);
void (0, db_1.connectDB)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map