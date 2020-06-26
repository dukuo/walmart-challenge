
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

const StyledButton = styled(Button)`
    background: ${props => props.theme.palette.darkPrimary.main};
    color: white;
`

type MenuButtonProps = {
    click?:any
}

const MenuButton = ({ click }:MenuButtonProps) => (
    <StyledButton
        onClick={click}
        variant="contained"
        data-testid={TEST_ID_BUTTON_MENU}
    >
        <MenuIcon />
        {TXT_BUTTON_MENU}
    </StyledButton>
)

export default MenuButton