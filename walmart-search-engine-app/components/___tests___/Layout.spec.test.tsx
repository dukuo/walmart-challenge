import React from 'react'
import { render } from '@testing-library/react'
import {
    TEST_ID_APP_BAR,
    TEST_ID_APP_LAYOUT,
    TEST_ID_APP_FOOTER,
} from '../../constants/testIds'
import Layout from '../Layout'
import ThemeWrapper from '../../utils/themeWrapper'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const setup = () => {
    const setupRender = render(
        <ThemeWrapper>
            <Layout />
        </ThemeWrapper>
    )
    return {
        ...setupRender
    }
}

describe('<Layout /> unit testing', () => {
    it('should render', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { q: ''},
            pathname: ''
        }))
        const { getByTestId } = setup()
        const appLayout = getByTestId(TEST_ID_APP_LAYOUT)
        expect(appLayout).not.toBeNull()
    })
    it('should contain <AppBar />', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { q: ''},
            pathname: ''
        }))
        const { getByTestId } = setup()
        const appBar = getByTestId(TEST_ID_APP_BAR)
        expect(appBar).not.toBeNull()
    })
    it('should contain <Footer />', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { q: ''},
            pathname: ''
        }))
        const { getByTestId } = setup()
        const footer = getByTestId(TEST_ID_APP_FOOTER)
        expect(footer).not.toBeNull()
    })
})