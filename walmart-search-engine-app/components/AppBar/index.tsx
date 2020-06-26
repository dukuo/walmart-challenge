import React from 'react'
import styled from 'styled-components'
import {
    AppBar as MuiAppBar,
    Toolbar
} from '@material-ui/core'

import SearchBar from '../SearchBar'
import CartButton from '../CartButton'
import Logo from '../Logo'
import { TEST_ID_APP_BAR } from '../../constants/testIds'

const StyledMuiAppBar = styled(MuiAppBar)`
    background: ${props => props.theme.palette.main};
`

const AppBar = () => {
    const [count, setCount] = React.useState(0)
    const handleCartButtonClick = () => setCount(count + 1)
    return (
        <div data-testid={TEST_ID_APP_BAR}>
            <StyledMuiAppBar
                elevation={0}
                position="relative"
            >
                <Toolbar>
                    <Logo />
                    <SearchBar />
                    <CartButton
                        click={handleCartButtonClick}
                        count={count}
                    />
                </Toolbar>
            </StyledMuiAppBar>
        </div>
    )
}

export default AppBar