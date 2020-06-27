import React from 'react'
import { render } from '@testing-library/react'
import Link from '../'

const testLinkText = 'Naked Link Test'
const setup = () => {
    const setupRender = render(
        <Link naked href="">{testLinkText}</Link>
    )

    return {
        ...setupRender
    }
}

describe('<Link /> unit tests', () => {
    it('should render naked Next link', () => {
        const { getByText } = setup()
        const linkComponent = getByText(testLinkText)

        expect(linkComponent).not.toBeNull()
    })
})