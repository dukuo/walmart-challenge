import React from 'react'
import styled from 'styled-components'
import {
    Button
} from '@material-ui/core'
import {
    ChevronRight as RightArrowIcon
} from '@material-ui/icons'
import { TXT_BUTTON_FILTER } from '../constants/text'

const StyledButton: any = styled(Button)`
    && {
        background: #FFF;
        color: #111;
        text-align: left;
        & > span {
            justify-content: space-between;
        }
        margin-top: 20px;

    }
`

type FilterButtonProps = {
    click?: any
}

const FilterButton = (props: FilterButtonProps) => {
    const { click } = props
    return (
        <StyledButton
            fullWidth
            onClick={click}
            endIcon={<RightArrowIcon />}
        >
            {TXT_BUTTON_FILTER}
        </StyledButton >
    )
}

export default FilterButton