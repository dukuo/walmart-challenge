import React from 'react'
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react'
import Logo from '../Logo'

afterEach(cleanup)


const setup = () => {

    const setupRender = render(
        <Logo />
    )
    const { getByTestId } = setupRender
    const linkComponent = getByTestId('logo-link')

    return {
        linkComponent,
        ...setupRender
    }
}

describe('<Logo /> unit testing', () => {
    it('should render a link component', () => {
        const { linkComponent } = setup()
        expect(linkComponent).not.toBeNull()
    })
    it('should contain an svg component', () => {
        const { container } = setup()
        const svgComponent = container.querySelector('svg')
        expect(svgComponent).not.toBeNull()
    })
})