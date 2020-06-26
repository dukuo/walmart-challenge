import React from 'react'
import { render } from '@testing-library/react'
import { TXT_BUTTON_FILTER } from '../../constants/text'
import ThemeWrapper from '../../utils/themeWrapper'
import FilterButton from '../FilterButton'

const setup = () => {
    const setupRender = render(
        <ThemeWrapper>
            <FilterButton />
        </ThemeWrapper>
    )
    const { container } = setupRender
    const buttonComponent = container.querySelector('button')
    return {
        buttonComponent,
        ...setupRender
    }
}

describe('<FilterButton /> unit testing', () => {
    it('should render', () => {
        const { buttonComponent } = setup()
        expect(buttonComponent).not.toBeNull()
    })
    it('should contain TXT_BUTTON_FILTER', () => {
        const { buttonComponent } = setup()
        expect(buttonComponent?.textContent).toContain(TXT_BUTTON_FILTER)
    })
})