import React from 'react'
import styled from 'styled-components'
import {
    Button
} from '@material-ui/core'
import {
    ShoppingCart as ShoppingCartIcon
} from '@material-ui/icons'

const StyledCartButton = styled(Button)`
    && {
        background: ${(props: any) => props.theme.palette.darkPrimary.main};
        color: ${props => props.theme.palette.darkPrimary.contrastText};
        padding: 10px 13px;
        
    }
`
const StyledBadge = styled.div`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: ${props => props.theme.palette.secondary.main};
        color: ${props => props.theme.palette.primary.main};
    }
`
const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
    margin-right: 5px;
`
type CartBadgeProps = {
    count: number
}

type CartButtonProps = {
    click?: any
    count?: number
}

const CartBadge = ({ count = 0 }: CartBadgeProps) => (
    <StyledBadge>
        {count}
    </StyledBadge>
)

const CartButton = ({ click, count = 0 }: CartButtonProps) => {
    return (
        <StyledCartButton onClick={click} data-testid="cart-button">
            <StyledShoppingCartIcon />
            <CartBadge count={count} />
        </StyledCartButton>
    )
}

export default CartButton