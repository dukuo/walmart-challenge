import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { withFormik } from 'formik'
import SearchBarForm from '../SearchBarForm/SearchForm'
import { propsToValues, validation } from '../'
import { SEARCH_FORM } from '../../../constants/forms'
import { TXT_SEARCH_BAR_PLACEHOLDER } from '../../../constants/text'

describe('<SearchBarForm /> unit testing', () => {
    const setup = () => {
        const mockSubmit = jest.fn(e => e.preventDefault)
        const withMockedFormikForm = withFormik({
            mapPropsToValues: (props: any) => props.mapPropsToValues,
            validationSchema: (props: any) => props.validationSchema,
            handleSubmit: (values, bag) => bag.props.onSubmit(values, bag),
            displayName: SEARCH_FORM
        })
        const EnhancedSearchBarForm = withMockedFormikForm(SearchBarForm)
        const renderComponent = render(
            <EnhancedSearchBarForm
                mapPropsToValues={propsToValues}
                onSubmit={mockSubmit}
                validationSchema={validation}
            />
        )
        const { container } = renderComponent
        const searchInput = container.querySelector('input[id="query"]')
        const submitButton = container.querySelector('button[type="submit"]')
        return {
            searchInput,
            submitButton,
            mockSubmit,
            ...renderComponent
        }
    }
    it('should have TXT_SEARCH_BAR_PLACEHOLDER as placeholder', async () => {
        const { getByPlaceholderText } = setup()
        const targetValue = TXT_SEARCH_BAR_PLACEHOLDER
        const textInputWithPlaceholder = getByPlaceholderText(targetValue)
        expect(textInputWithPlaceholder).not.toBeNull()
    })

    it('should render input text', async () => {
        const { searchInput }: any = setup()
        const targetValue = '123'
        await waitFor(() => {
            fireEvent.change(searchInput!, {
                target: {
                    value: targetValue
                }
            })
        })
        expect(searchInput!.value).toBe(targetValue)
    })

    it('should render submit button', () => {
        const { submitButton } = setup()
        expect(submitButton).not.toBeNull()
    })

    it('should not submit because text input is less than 4 characters', async () => {
        const { searchInput, mockSubmit, getByTestId } = setup()
        const searchForm = getByTestId('search-form')

        await waitFor(() => {
            fireEvent.change(searchInput!, {
                target: {
                    value: 'asd'
                }
            })
            fireEvent.submit(searchForm!)
        })
        expect(mockSubmit).not.toBeCalled()
    })

    it('should submit once with a string longer than 3 characters', async () => {
        const { searchInput, submitButton, mockSubmit, getByTestId } = setup()
        const targetValue = 'daslaf'
        const searchForm = getByTestId('search-form')

        expect(searchInput).not.toBeNull()
        expect(submitButton).not.toBeNull()

        await waitFor(() => {
            fireEvent.change(searchInput!, {
                target: {
                    value: targetValue
                }
            })
            fireEvent.submit(searchForm!)
        })
        await waitFor(() => {
            expect(mockSubmit).toBeCalled()
            expect(mockSubmit.mock.calls[0][0].query).toBe(targetValue);
        })
    })
})