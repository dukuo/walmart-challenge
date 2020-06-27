import { applyTransformation } from '../..'
import { ProductRecord } from '../../../interfaces'

const sampleProducts: Array<ProductRecord> = [
    {
        "id": 235,
        "brand": "fqqejoy",
        "description": "bfwxp ixtkih",
        "image": "www.lider.cl/catalogo/images/babyIcon.svg",
        "price": 748011
    },
    {
        "id": 236,
        "brand": "adsfsda",
        "description": "uymgk ñqrswx",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 459958
    },
    {
        "id": 237,
        "brand": "rrgbñvoid",
        "description": "gdjngc uawvd",
        "image": "www.lider.cl/catalogo/images/toysIcon.svg",
        "price": 835163
    },
    {
        "id": 238,
        "brand": "dsaasd",
        "description": "xhabvp ciowh",
        "image": "www.lider.cl/catalogo/images/babyIcon.svg",
        "price": 272633
    }
]

describe('product record transformation', () => {
    it('should apply 50% `price` discount to each sample product', () => {
        const discountFactor = 0.5 // 50%
        const discountTransformation = (product: ProductRecord) => ({ ...product, price: discountFactor * product.price })
        const fiftyPercentDiscountedProducts: Array<ProductRecord> = applyTransformation(sampleProducts, discountTransformation)
        expect(fiftyPercentDiscountedProducts[0].price).toBe(sampleProducts[0].price * discountFactor)
    })
    
})