import mongoose from 'mongoose'
import Product from '../models/Product'
import { ProductRecord } from '../../interfaces'

async function CreateProduct(record: any) {
    return Product.create(record)
        .then((data: ProductRecord) => {
            return data
        })
        .catch((error: Error) => {
            throw error
        })
}
async function GetProduct(id: any) {
    return Product.findOne({ id })
}

async function FuzzySearchProduct(query:string) {
    return Product.fuzzySearch(query)
}

async function GetAllProducts() {
    return Product.find({})
}

async function SearchProducts(criteria: string) {
    return Product.find({
        $text: {
            $search: criteria
        }
    })
}

export default {
    CreateProduct,
    GetProduct,
    FuzzySearchProduct,
    GetAllProducts,
    SearchProducts
}