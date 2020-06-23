import inMemoryMongoDatabase from '../../../utils/inMemoryMongo'
import Product from '../'

const erroneousTestData = {
    id: '12311',
    brand: 123
}
const incompleteTestData = {
    id: 123,
    brand: 'abbs'
}
const correctTestData = {
    id: 123,
    brand: 'aobo',
    description: 'asdas fasdas dd',
    image: 'http://some.tld/image.jpeg',

}
describe('Mongoose Model & Schema', () => {
    // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect
    /**
     * Connect to a new in-memory database before running any tests.
     */
    beforeAll(async () => await inMemoryMongoDatabase.connect());

    /**
     * Clear all test data after every test.
     */
    afterEach(async () => await inMemoryMongoDatabase.clearDatabase());

    /**
     * Remove and close the db and server.
     */
    afterAll(async () => await inMemoryMongoDatabase.closeDatabase());

    it.todo('should have a valid Schema')
    it.todo('should have the same product fields as the database records')
})

describe('MongoDB records', () => {
    it.todo('should return an empty list')
    it.todo('should return one record in an list')
    it.todo('should return many records on a list')
})