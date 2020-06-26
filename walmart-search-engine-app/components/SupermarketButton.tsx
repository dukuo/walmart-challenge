import React from 'react'
import styled from 'styled-components'
import {
    Button
} from '@material-ui/core'
import { TEST_ID_BUTTON_SUPERMARKET } from '../constants/testIds'
import { TXT_BUTTON_SUPERMARKET } from '../constants/text'

const StyledButton = styled(Button)`

`

type SupermarketButtonProps = {
    click?: any
}

const SupermarketButton = ({ click }: SupermarketButtonProps) => (
    <StyledButton
        onClick={click}
        data-testid={TEST_ID_BUTTON_SUPERMARKET}
    >
        {TXT_BUTTON_SUPERMARKET}
    </StyledButton>
)

export default SupermarketButton