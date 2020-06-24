import {
    isPalindrome,
    isLongerThanThreeChars
} from '../..'

describe('Palindrome algorithm unit test', () => {
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