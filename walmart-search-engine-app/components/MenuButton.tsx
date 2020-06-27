
import React from 'react'
import styled from 'styled-components'
import {
    Button
} from '@material-ui/core'
import {
    Menu as MenuIcon
} from '@material-ui/icons'
import { TXT_BUTTON_MENU } from '../constants/text'
import { TEST_ID_BUTTON_MENU } from '../constants/testIds'
import { lighten } from 'polished'

const StyledButton = styled(Button)`
    && {
        background: ${props => props.theme.palette.darkPrimary.main};
        color: white;
        padding: 10px 13px;
        margin: 0 10px;
        padding-right: 30px;
        &:hover {
            background: ${props => lighten(.15, props.theme.palette.darkPrimary.main)};
        }
    }
`

type MenuButtonProps = {
    click?:any
}

const MenuButton = ({ click }:MenuButtonProps) => (
    <StyledButton
        onClick={click}
        variant="contained"
        data-testid={TEST_ID_BUTTON_MENU}
        startIcon={<MenuIcon />}
    >
        {TXT_BUTTON_MENU}
    </StyledButton>
)

export default MenuButton