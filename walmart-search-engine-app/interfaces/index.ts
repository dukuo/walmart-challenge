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
  mod?:number
  productActions?:boolean
}
export interface Product extends Document {
  id: number
  brand: string
  description: string
  image: string
  price: number
}