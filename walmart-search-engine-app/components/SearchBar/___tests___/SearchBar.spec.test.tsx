import React from 'react'
import { render, screen } from '@testing-library/react'

import SearchBar from '../'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('<SearchBar /> unit testing', () => {
    it('should find the placeholder text of the search input', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { q: '' },
        }))
        render(<SearchBar />)
        const inputText = screen.findByText(/qué estás buscando/)
        expect(inputText).not.toBeNull()
    })

})