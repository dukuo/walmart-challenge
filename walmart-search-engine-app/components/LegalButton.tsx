import React from 'react'
import styled from 'styled-components'
import {
    Button
} from '@material-ui/core'
import {
    ChevronRight as RightArrowIcon
} from '@material-ui/icons'
import { TXT_BUTTON_LEGAL } from '../constants/text'

const StyledButton: any = styled(Button)`
    && {
        background: #FFF;
        color: ${props => props.theme.palette.primary.main};
        text-align: left;
        & > span {
            justify-content: space-between;
        }
        margin: 20px 0 40px;

    }
`

const LegalButton = () => (
    <StyledButton
        fullWidth
        variant="contained"
        endIcon={<RightArrowIcon />}
    >
        {TXT_BUTTON_LEGAL}
    </StyledButton>
)

export default LegalButton