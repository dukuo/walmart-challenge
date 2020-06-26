import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import ThemeWrapper from '../../utils/themeWrapper'
import CartButton from '../CartButton'

const setup = () => {
    const mockClickHandler = jest.fn()
    const setupRender = render(
        <ThemeWrapper>
            <CartButton click={mockClickHandler} />
        </ThemeWrapper>
    )
    const { container, getByRole } = setupRender
    const buttonComponent = getByRole('button')
    return {
        buttonComponent,
        mockClickHandler,
        ...setupRender
    }
}
describe('<CartButton /> unit testing', () => {
    it('should render', () => {
        const { buttonComponent } = setup()

        expect(buttonComponent).not.toBeNull()
    })
    it('should onClick', async () => {
        const { mockClickHandler, getByTestId } = setup()
        const buttonContainer = getByTestId('cart-button')
        await waitFor(() => {
            fireEvent.click(buttonContainer)
        })
        await waitFor(() => {
            expect(mockClickHandler).toBeCalled()
        })
    })
})