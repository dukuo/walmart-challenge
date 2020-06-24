import styled from 'styled-components'
import LegalButton from "./LegalButton"

const StyledSeparator = styled.div`
    height: 13px;
    background: ${props => props.theme.palette.main}
`

const Footer = (props:any) => (
    <>
        <LegalButton />
        <StyledSeparator />
    </>
)

export default Footer