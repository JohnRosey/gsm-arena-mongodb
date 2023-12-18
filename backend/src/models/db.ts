// db.ts
import { MongoClient, type Collection } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGODB_URI
const dbName = process.env.DATABASE_NAME
const collectionName = process.env.COLLECTION_NAME

let phoneCollection: Collection
let userCollection: Collection

export const connectDB = async (): Promise<Collection> => {
  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db(dbName)
  phoneCollection = db.collection(collectionName)
  console.log('Database connected successfully!!!!')
  userCollection = db.collection('users')
  console.log(phoneCollection.collectionName.toString())
  return phoneCollection
}
export const getUserCollection = () => {
  if (!userCollection) {
    throw new Error('Database not initialized')
  } else {
    return userCollection
  }
}
export const getPhoneCollection = () => {
  if (!phoneCollection) {
    throw new Error('Database not connected or collection not set')
  }
  return phoneCollection
}
