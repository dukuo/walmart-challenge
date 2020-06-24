import styled from 'styled-components'
import {
    Button
} from '@material-ui/core'
import { TXT_BUTTON_LEGAL } from 'constants/text'

const StyledButton = styled(Button)`
    background: #FFF;
    color: ${props => props.theme.palette.main}
`

const LegalButton = () => (
    <StyledButton
        fullWidth
        variant="contained"
    >
        {TXT_BUTTON_LEGAL}
    </StyledButton>
)

export default LegalButton