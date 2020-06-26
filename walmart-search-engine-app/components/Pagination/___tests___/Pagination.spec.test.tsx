import React from 'react'
import { render, cleanup, waitFor, fireEvent} from '@testing-library/react'
import ThemeWrapper from '../../../utils/themeWrapper'
import { TEST_ID_APP_PAGINATION } from '../../../constants/testIds'
import Pagination from '../'

afterEach(cleanup)

const setup = () => {
    const mockOnChange = jest.fn()
    const mockCount = 10
    const setupRender = render(
        <ThemeWrapper>
            <Pagination count={mockCount} change={mockOnChange} />
        </ThemeWrapper>
    )

    return {
        mockOnChange,
        ...setupRender
    }

}

describe('<Pagination /> unit testing', () => {
    it('should render', () => {
        const { getByTestId } = setup()
        const paginationComponent = getByTestId(TEST_ID_APP_PAGINATION)
        expect(paginationComponent).not.toBeNull()
    })
    it('should trigger onChange handler', async () => {
        const { mockOnChange, getByLabelText } = setup()
        const secondPageButton:any = getByLabelText('Go to page 2')

        expect(secondPageButton).not.toBeNull()

        await waitFor(() => {
            fireEvent.click(secondPageButton)           
        })
        await waitFor(() => {
            expect(mockOnChange).toBeCalled()
        })
        
    })

})