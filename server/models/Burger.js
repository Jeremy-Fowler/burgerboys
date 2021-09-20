import { Schema } from 'mongoose'

export const BurgerSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true }
})
