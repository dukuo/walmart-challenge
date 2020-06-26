import React from 'react'
import { render } from '@testing-library/react'
import { TXT_BUTTON_LEGAL } from '../../constants/text'
import ThemeWrapper from '../../utils/themeWrapper'
import LegalButton from '../LegalButton'

const setup = () => {
    const setupRender = render(
        <ThemeWrapper>
            <LegalButton />
        </ThemeWrapper>
    )
    const { container } = setupRender
    const linkComponent = container.querySelector('button')

    return {
        linkComponent,
        ...setupRender
    }
}
describe('<LegalButton /> unit testing', () => {
    it('should contain a link component', () => {
        const { linkComponent } = setup()

        expect(linkComponent).not.toBeNull()
    })
    it('should onClick', () => {
        const { linkComponent } = setup()
        expect(linkComponent?.textContent).toBe(TXT_BUTTON_LEGAL)
    })
})