import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { initPhoneRoutes, phoneRoutes } from './routes/phone.routes';
import { userRoutes } from './routes/user.routes';
import { commentRoutes } from './routes/comment.routes';
import { connectDB } from './models/db';
import * as db from './models/db';
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

const swaggerDocument = YAML.load('./swagger.yaml');
const uri = process.env.MONGODB_URI;
const mongoose = require('mongoose');

const mongoURI = uri;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));


 
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'

}));

initPhoneRoutes().then(() => {
  app.use('/api/phones', phoneRoutes);

  
}).catch(error => {
  console.error("Server initialization failed:", error.message);
});
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
console.log("MongoDB URI:", uri);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

export default app;
