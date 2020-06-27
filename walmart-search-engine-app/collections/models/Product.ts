import mongoose from 'mongoose'
import { model, Schema } from 'mongoose'
import { Product } from '../../interfaces'

const schemaConfig = {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
}
const ProductSchema: Schema = new Schema(schemaConfig, { id: false })

ProductSchema.index({
    brand: "text",
    description: "text"
})

let ProductModel:any

try {
    ProductModel = mongoose.model('products')
} catch(e) {
    ProductModel = model<Product>('products', ProductSchema, 'products')
}

ProductModel.ensureIndexes()

export default ProductModel