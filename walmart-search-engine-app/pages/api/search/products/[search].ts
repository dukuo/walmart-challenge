import Cors from 'cors'
import { runMiddleware } from '../../../../utils/middleware'
import { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors({
    methods: ['GET', 'HEAD']
})

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(_req, res, cors)

    console.log(_req.query)
    
    res.json({ message: 'Hello Wasdasdsorld!' })
}

export default handler