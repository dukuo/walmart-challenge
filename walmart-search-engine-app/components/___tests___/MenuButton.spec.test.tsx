import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import ThemeWrapper from '../../utils/themeWrapper'
import MenuButton from '../MenuButton'
import { TEST_ID_BUTTON_MENU } from '../../constants/testIds'

const setup = () => {
    const mockOnClick = jest.fn()
    const setupRender = render(
        <ThemeWrapper>
            <MenuButton click={mockOnClick} />
        </ThemeWrapper>
    )
    const { getByTestId } = setupRender
    const menuButton = getByTestId(TEST_ID_BUTTON_MENU)

    return {
        menuButton,
        mockOnClick,
        ...setupRender
    }
}

describe('<MenuButton /> unit testing', () => {
    it('should render', () => {
        const { menuButton } = setup()
        expect(menuButton).not.toBeNull()
    })
    it('should onClick', async () => {
        const { menuButton, mockOnClick } = setup()
        await waitFor(() => {
            fireEvent.click(menuButton)
        })
        await waitFor(() => {
            expect(mockOnClick).toBeCalled()
        })
    })
})