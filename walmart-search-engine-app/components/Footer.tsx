import React from 'react'
import styled from 'styled-components'
import {
    Grid
} from '@material-ui/core'
import { TEST_ID_APP_FOOTER } from '../constants/testIds'
import LegalButton from "./LegalButton"

const StyledSeparator = styled.div`
    height: 13px;
    background: ${props => props.theme.palette.primary.main}
`
const FooterGrid = styled(Grid)`
    && {
        bottom: 0;
        min-height: 100px;
        display: flex;
        align-items: flex-end;
    }
`
const StyledLegalButtonContainer = styled.div`
    padding: 0 15px;
`
const Footer = (props: any) => (
    <FooterGrid container>
        <Grid item xs={12}>
            <div data-testid={TEST_ID_APP_FOOTER}>
                <StyledLegalButtonContainer>
                    <LegalButton />
                </StyledLegalButtonContainer>
                <StyledSeparator data-testid='app-bottom-bar' />
            </div>
        </Grid>
    </FooterGrid>
)

export default Footer