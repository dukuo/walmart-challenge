import { Document } from 'mongoose'

export type User = {
  id: number
  name: string
}
export interface ProductRecord {
  id: number
  brand: string
  description: string
  image: string
  price: number
}
export interface Product extends Document {
  id: number
  brand: string
  description: string
  image: string
  price: number
}