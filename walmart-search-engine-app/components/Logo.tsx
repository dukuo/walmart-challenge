import React from 'react'
import styled from 'styled-components'

import LogoSVG from '../assets/logo.svg'
import Link from './Link'
import { HOME_PATH } from '../constants/router'

const StyledLink = styled(Link)`
   && {
    width: 100px;
    margin-right: 10px;
   }
`
const Logo = () => (
    <StyledLink href={HOME_PATH} data-testid="logo-link">
        <LogoSVG />
    </StyledLink>
)

export default Logo