import React from 'react'
import { render } from '@testing-library/react'
import {
    TEST_ID_APP_BAR,
    TEST_ID_APP_LAYOUT,
    TEST_ID_APP_FOOTER,
} from '../../constants/testIds'
import Layout from '../Layout'
import ThemeWrapper from '../../utils/themeWrapper'

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
        const { getByTestId } = setup()
        const appLayout = getByTestId(TEST_ID_APP_LAYOUT)
        expect(appLayout).not.toBeNull()
    })
    it('should contain <AppBar />', () => {
        const { getByTestId } = setup()
        const appBar = getByTestId(TEST_ID_APP_BAR)
        expect(appBar).not.toBeNull()
    })
    it('should contain <Footer />', () => {
        const { getByTestId } = setup()
        const footer = getByTestId(TEST_ID_APP_FOOTER)
        expect(footer).not.toBeNull()
    })
})