import cors from 'cors'
import dotenv from 'dotenv'
import session from 'express-session'
// import swaggerUi from 'swagger-ui-express'
// import YAML from 'yamljs'
import { initPhoneRoutes, phoneRoutes } from './routes/phone.routes'
import { userRoutes } from './routes/user.routes'
import { commentRoutes } from './routes/comment.routes'
import { connectDB } from './models/db'

import MongoStore from 'connect-mongo'
import express from 'express'
import mongoose from 'mongoose'
dotenv.config()
const app = express()
const PORT = process.env.PORT ? process.env.PORT : 3000
const sessionSecret = process.env.SESSION_SECRET
// const swaggerDocument = YAML.load('./swagger.yaml')
const uri = process.env.MONGODB_URI

const mongoURI = uri

mongoose.connect(mongoURI)
  .then(() => { console.log('MongoDB Connected') })
  .catch(err => { console.error('MongoDB connection error:', err) })

app.use(cors())
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:4200'

}))

app.use(session({
  secret: sessionSecret, // Utilisation d'une variable d'environnement
  resave: false,
  saveUninitialized: false, // Modifié pour réduire la création de sessions inutiles
  cookie: {
    maxAge: 120000, // Correction de la casse et durée en millisecondes
    httpOnly: true, // Sécurité supplémentaire
    secure: false // Envoie uniquement sur HTTPS
  },
  store: MongoStore.create({ mongoUrl: uri })
}))
initPhoneRoutes().then(() => {
  app.use('/api/phones', phoneRoutes)
}).catch(error => {
  console.error('Server initialization failed:', error.message)
})
app.use('/api/users', userRoutes)
app.use('/api/comments', commentRoutes)

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log('MongoDB URI:', uri)

void connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
})

export default app
