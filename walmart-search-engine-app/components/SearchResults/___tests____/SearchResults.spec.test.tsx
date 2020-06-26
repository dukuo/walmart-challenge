import React from 'react'
import { render } from '@testing-library/react'
import ThemeWrapper from '../../../utils/themeWrapper'
import SearchResults from '../'

const setup = () => {
    const setupRender = render(
        <ThemeWrapper>
            <SearchResults />
        </ThemeWrapper>
    )

    return{ 
        ...setupRender
    }
}

describe('<SearchResults /> unit testing', () => {
    it.todo('should render')
    it.todo('should display ProduCard list')
    it.todo('should display no results text')
})