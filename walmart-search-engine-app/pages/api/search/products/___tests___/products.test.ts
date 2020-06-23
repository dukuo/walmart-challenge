import * as http from 'http'
import fetch from 'isomorphic-unfetch'
import listen from 'test-listen'
import { apiResolver } from 'next-server/dist/server/api-utils'

import handler from '../[search]'

const isPalindrome = (query:String) => {} // replace with palindrome function
const checkLength = (query:String, length:Number) => {} // replace with string length check function
const isLongerThanThreeChars = (query:String) => checkLength(query, 4)

describe('handler for route api/search/products', () => {
    it('should respond 200 OK', async () => {
        expect.assertions(1)
        let requestHandler = (req: any, res: any) => {
            return apiResolver(req, res, undefined, handler)
        }
        let server = http.createServer(requestHandler)
        let url = await listen(server)
        let response = await fetch(url)
        expect(response.status).toBe(200)

        return server.close()
    })
    it('query parameter should be a string', () => {
        // Extract query from request
        // Expect query to be a string
        expect(false).toBe(true) // this will intended to fail
    })
})

describe('palindrome check on query param from route', () => {
    it('should detect string as valid palindrome', () => {
        const expectedAssertion = true
        const query = 'obbo'
        const checkPalindrome = isPalindrome(query)

        expect.assertions(1)

        expect(checkPalindrome).toBe(expectedAssertion)
    })
    it('should fail with non-palindrome string', () => {
        const expectedAssertion = false
        const query = 'asdf'
        const checkForPalindrome = isPalindrome(query)
        
        expect.assertions(1)

        expect(checkForPalindrome).toBe(expectedAssertion)
    })

    it('should detect phrase as palindrome', () => {
        const expectedAssertion = true 
        const query = 'bab a bab'
        const checkForPalindrome = isPalindrome(query)

        expect.assertions(1)

        expect(checkForPalindrome).toBe(expectedAssertion)
    })

    it('should fail on a non-palindrome phrase', () => {
        const expectedAssertion = false
        const query = 'asooi fjjs ldjnñ'
        const checkForPalindrome = isPalindrome(query)

        expect.assertions(1)
        expect(checkForPalindrome).toBe(expectedAssertion)
    })

    it('should detect number as palindrome', () => {
        const query = '181'
        const expectedAssertion = true
        const checkForPalindrome = isPalindrome(query)

        expect.assertions(1)
        expect(checkForPalindrome).toBe(expectedAssertion)
    })

    it('should fail on non-palindrome number', () => {
        const query = '1239'
        const expectedAssertion = false
        const checkForPalindrome = isPalindrome(query)

        expect.assertions(1)
        expect(checkForPalindrome).toBe(expectedAssertion)
    })

    it('is longer than 3 characters', () => {
        const expectedAssertion = true
        const query = 'sdda'
        const checkLength = isLongerThanThreeChars(query)

        expect.assertions(1)
        expect(checkLength).toBe(expectedAssertion)
    })

    it('is not longer than 3 characters', () => {
        const expectedAssertion = false
        const query = 'sda'
        const checkLength = isLongerThanThreeChars(query)

        expect.assertions(1)
        expect(checkLength).toBe(expectedAssertion)
    })
    
})

describe('Mongoose Model & Schema', () => {
    it.todo('should have a valid Schema')
    it.todo('should have the same product fields as the database records')
})

describe('MongoDB records', () => {
    it.todo('should return an empty list')
    it.todo('should return one record in an list')
    it.todo('should return many records on a list')
})