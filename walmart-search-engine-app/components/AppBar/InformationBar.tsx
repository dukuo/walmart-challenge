import React from 'react'
import styled from "styled-components"
import { Grid, Link } from "@material-ui/core"

const StyledTopGrid = styled(Grid)`
    && {
        background: #133355;
        color: #FFF;    
        padding: .5em;
        p {
            margin: 0;
            font-size: 12px;
        }
    }
`
const InlineWhatsAppButton = styled(Link)`
    && {
        color: ${props => props.theme.palette.primary.main};
    }
`
const InformationBar = () => (
    <StyledTopGrid container>
        <Grid item xs={12}>
            <p>
                    Servicio al cliente de Líder.cl: WhatsApp <InlineWhatsAppButton href="https://wa.me/56967211492">+56967211492</InlineWhatsAppButton> | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00
            </p>
        </Grid>
    </StyledTopGrid>
)

export default InformationBar