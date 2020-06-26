import React from 'react'
import { render } from '@testing-library/react'
import ThemeWrapper from '../../utils/themeWrapper'
import Footer from '../Footer'

const setup = () => {
    const setupRender = render(
        <ThemeWrapper>
            <Footer />
        </ThemeWrapper>
    )
    const { container, getByTestId } = setupRender
    const legalButton = container.querySelector('button')
    const bottomBar = getByTestId('app-bottom-bar')
    return {
        legalButton,
        bottomBar,
        ...setupRender
    }
}

describe('<Footer /> unit tests', () => {
    it('should render', () => {
        const { getByTestId } = setup()
        const footer = getByTestId('footer')
        expect(footer).not.toBeNull()
    })
    it('should contain legal button', () => {
        const { legalButton } = setup()
        expect(legalButton).not.toBeNull()
    })
    it('should contain bottom bar', () => {
        const { bottomBar } = setup()
        expect(bottomBar).not.toBeNull()
    })
})