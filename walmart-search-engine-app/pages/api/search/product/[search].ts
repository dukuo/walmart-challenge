import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { runMiddleware } from '../../../../utils/middleware'
import withConnect from '../../../../utils/withConnect'
import ProductController from '../../../../collections/controllers/ProductController'
import { isPalindrome, applyTransformation } from '../../../../utils'

const cors = Cors({
    methods: ['GET', 'HEAD']
})

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    let products: any = []
    const query = _req.query.search ? _req.query.search.toString() : ''

    await runMiddleware(_req, res, cors)

    if (query.length >= 3) {
        if (parseInt(query)) {
            const id = parseInt(query)
            products = await ProductController.GetProduct(id)
            products = [{
                ...products.toObject(),
                productActions: true
            }]
            console.log("MOD PRODUCT", products)
            
        } else {
            products = await ProductController.SearchProducts(`${query}`)
            products.toObject()
        }

        if (isPalindrome(query)) {
            const discountFactor = .5
            const transformation = (product: any) => ({
                ...product,
                price: discountFactor * product.price,
                mod: discountFactor
            })
            products = applyTransformation(products, transformation)
        }
    }

    res.json(products)
}
export const nakedHandler = handler
export default withConnect(handler)