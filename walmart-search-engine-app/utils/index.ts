
import { ProductRecord } from '../interfaces'

const checkLength = (query:string, length:number):boolean => query.length === length // replace with string length check function

export const applyTransformation = (objects:Array<ProductRecord>, transformation:any):Array<ProductRecord> => objects.map((object:any) => transformation(object))

export const isPalindrome = (query:string):boolean => {
    const sanitizedQuery = query.toLowerCase().replace(/[\W_]/g, '')
    for(let i = 0; i < sanitizedQuery.length; i++) {
        if(sanitizedQuery[i] !== sanitizedQuery[sanitizedQuery.length - i - 1])
            return false
    }
    return true
}

export const isLongerThanThreeChars = (query:string) => checkLength(query, 4)
