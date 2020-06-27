import mongoose from 'mongoose'

const withConnect = (handler: any) => async (req: any, res: any) => {
    if (mongoose.connections[0].readyState) return handler(req, res);
    if (!mongoose.connection.readyState && process.env.NODE_ENV !== 'test') {
        mongoose.set('debug', true)
        const uri = process.env.MONGO_URI
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            autoIndex: false
        })
    }

    return handler(req, res)
}

export default withConnect