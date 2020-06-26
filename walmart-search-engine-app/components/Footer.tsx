import React from 'react'
import styled from 'styled-components'
import { TEST_ID_APP_FOOTER } from '../constants/testIds'
import LegalButton from "./LegalButton"

const StyledSeparator = styled.div`
    height: 13px;
    background: ${props => props.theme.palette.primary.main}
`

const Footer = (props:any) => (
    <div data-testid={TEST_ID_APP_FOOTER}>
        <LegalButton />
        <StyledSeparator data-testid='app-bottom-bar' />
    </div>
)

export default Footer