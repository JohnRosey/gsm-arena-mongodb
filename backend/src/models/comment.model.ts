import { type Collection } from 'mongodb'
import mongoose from 'mongoose'

// Connexion et configuration initiale

let commentCollection: Collection

const commentSchema = new mongoose.Schema({
  phoneId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Phone', // Assurez-vous que 'Phone' correspond à votre modèle de téléphone
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
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
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment

export const addCommentToPhone = async (phoneId: string, commentData: { userId: string, comment: string, date: Date }) => {
  const newComment = new Comment({
    phoneId,
    userId: commentData.userId,
    comment: commentData.comment,
    date: commentData.date
  })

  await newComment.save()
  return newComment
}
