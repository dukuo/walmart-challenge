import React from 'react'
import { render } from '@testing-library/react'

import ThemeWrapper from '../../../utils/themeWrapper'
import InformationBar from '../InformationBar'

const setup = () => {
    const setupRender = render(
        <ThemeWrapper>
            <InformationBar />
        </ThemeWrapper>
    )
    const { container } = setupRender
    const messageComponent = container.querySelector('p')
    return {
        messageComponent,
        ...setupRender
    }
}

describe('<InformationBar /> unit testing', () => {
    it('should contain a paragraph with information', () => {
        const { messageComponent } = setup()
        expect(messageComponent?.textContent?.length).toBeGreaterThan(0)
    })

    it('should contain a WhatsApp Link', () => {
        const { container } = setup()
        const whatsAppLink = container.querySelector('a')
        expect(whatsAppLink).not.toBeNull()
        expect(whatsAppLink?.href).toContain('https://wa.me')
    })
    
})