import React from 'react'
import { render } from '@testing-library/react'
import ThemeWrapper from '../../../utils/themeWrapper'
import AppBar from '../'

const setup = () => {
    const renderSetup = render(
        <ThemeWrapper>
            <AppBar />
        </ThemeWrapper>
    )
    const { container } = renderSetup
    const headerComponent = container.querySelector('header')
    return {
        headerComponent,
        ...renderSetup
    }
}

describe('App bar unit testing', () => {
    it('should render a <header /> component', () => {
        const { headerComponent } = setup()
        
        expect(headerComponent).not.toBeNull()
    })
})