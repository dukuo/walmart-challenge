import React from 'react'

import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import muiTheme from '../theme'

function ThemeWrapper({ children }:any) {
    return (
        <ThemeProvider theme={muiTheme[1]}>
            <MuiThemeProvider theme={muiTheme[1]}>
                { children }
            </MuiThemeProvider>
        </ThemeProvider>
    )
}

export default ThemeWrapper