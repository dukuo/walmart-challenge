import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import SupermarketButton from '../SupermarketButton'
import ThemeWrapper from '../../utils/themeWrapper'
import { TEST_ID_BUTTON_SUPERMARKET } from '../../constants/testIds'

const setup = () => {
    const mockOnClick = jest.fn()
    const setupRender = render(
        <ThemeWrapper>
            <SupermarketButton click={mockOnClick} />
        </ThemeWrapper>
    )
    const { getByTestId } = setupRender
    const buttonComponent = getByTestId(TEST_ID_BUTTON_SUPERMARKET)

    return {
        mockOnClick,
        buttonComponent,
        ...setupRender
    }
}

describe('<SupermarketButton /> unit testing', () => {
    it('should render', () => {
        const { buttonComponent } = setup()
        expect(buttonComponent).not.toBeNull()
    })
    it('should onClick', async () => {
        const { mockOnClick, buttonComponent } = setup()
        await waitFor(() => {
            fireEvent.click(buttonComponent)
        })
        await waitFor(() => {
            expect(mockOnClick).toBeCalled()
        })
    })
})