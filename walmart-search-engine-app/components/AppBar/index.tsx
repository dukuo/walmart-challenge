import styled from 'styled-components'
import {
    AppBar as MuiAppBar,
    Toolbar
} from '@material-ui/core'

import SearchBar from '../SearchBar'

const StyledMuiAppBar = styled(MuiAppBar)`
    background: ${props => props.theme.palette.main};
`

const AppBar = () => {
    return (
        <>
            <StyledMuiAppBar
                elevation={0}
                position="relative"
            >
                <Toolbar>
                    <SearchBar />
                </Toolbar>
            </StyledMuiAppBar>
        </>
    )
}

export default AppBar