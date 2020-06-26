import { Document } from 'mongoose'

export type User = {
  id: number
  name: string
}
export interface ProductRecord {
  id: Number
  brand: String
  description: String
  image: String
  price: Number
}
export interface Product extends Document {
  id: number
  brand: string
  description: string
  image: string
  price: number
}