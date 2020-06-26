import React from 'react'
import styled from 'styled-components'
import {
    Button
} from '@material-ui/core'
import { TXT_BUTTON_FILTER } from '../constants/text'

const StyledButton = styled(Button)`

`

type FilterButtonProps = {
    click?: any
}

const FilterButton = (props: FilterButtonProps) => {
    const { click } = props
    return (
        <StyledButton onClick={click} >
            {TXT_BUTTON_FILTER}
        </StyledButton >
    )
}

export default FilterButton