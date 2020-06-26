import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchBar from '../'

describe('<SearchBar /> unit testing', () => {
    it('should find the placeholder text of the search input', () => {
        render(<SearchBar />)
        const inputText = screen.findByText(/qué estás buscando/)
        expect(inputText).not.toBeNull()
    })
    
})