import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished';
import {
    Button
} from '@material-ui/core'
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import { TEST_ID_BUTTON_SUPERMARKET } from '../constants/testIds'
import { TXT_BUTTON_SUPERMARKET } from '../constants/text'

const StyledButton = styled(Button)`
    && {
        background: ${props => props.theme.palette.tertiary.main};
        color: ${props => props.theme.palette.tertiary.contrastText};
        padding: 10px 13px;
        margin: 0 10px;
        &:hover {
            background: ${props => lighten(.15, props.theme.palette.tertiary.main)};
        }
    }
`

type SupermarketButtonProps = {
    click?: any
}

const SupermarketButton = ({ click }: SupermarketButtonProps) => (
    <StyledButton
        onClick={click}
        data-testid={TEST_ID_BUTTON_SUPERMARKET}
        startIcon={<FastfoodOutlinedIcon />}
    >
        {TXT_BUTTON_SUPERMARKET}
    </StyledButton>
)

export default SupermarketButton