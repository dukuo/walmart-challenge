import React from 'react'
import styled from 'styled-components'
import {
    Button
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { lighten } from 'polished';

const StyledCartButton = styled(Button)`
    && {
        background: ${(props: any) => props.theme.palette.darkPrimary.main};
        color: ${props => props.theme.palette.darkPrimary.contrastText};
        padding: 10px 13px;
        margin: 0 10px;
        &:hover {
            background: ${(props: any) => lighten(.15, props.theme.palette.darkPrimary.main)};
        }
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
        font-weight: bold;
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