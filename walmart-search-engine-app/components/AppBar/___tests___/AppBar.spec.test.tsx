import React from 'react'
import { render } from '@testing-library/react'
import ThemeWrapper from '../../../utils/themeWrapper'
import AppBar from '../'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const setup = () => {
    useRouter.mockImplementationOnce(() => ({
        query: { q: '' },
    }))
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
        useRouter.mockImplementationOnce(() => ({
            query: { q: '' },
        }))
        const { headerComponent } = setup()

        expect(headerComponent).not.toBeNull()
    })
})