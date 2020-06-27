import React from 'react'
import styled from 'styled-components'
import {
    Button,
    Card,
    Chip,
    CardActions,
    CardContent,
    CardMedia,
    Typography,

} from '@material-ui/core'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import {
    TXT_BUTTON_ADD_TO_CART,
    TXT_PRODUCT_CARD_CHIP_DELIVERY,
    TXT_PRODUCT_CARD_CHIP_LOCAL,
} from '../../constants/text'
import { TEST_ID_CARD_PRODUCT } from '../../constants/testIds'
import { ProductRecord } from '../../interfaces'

const StyledDiscountBadge = styled(Chip)`
    && {
        background: #CE352E;
        font-weight: bold;

        & > div {
            margin: 5px;
        }
    }
`
const PriceStrikeThrough = styled(Typography)`
    && {
        text-decoration: line-through;
        font-weight: bold;
        color: #6F6F6F;
    }
`

const MuiProductCard = styled(Card)`
    && {
        flex: 1;
        height: 100%;
        align-self: stretch;
    }
`

const MultiTypography = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const SpacedDiv = styled.div`
    && {
        margin: 5px;
        display: flex;
        align-items: center;
    }
`
const DescriptionTypography = styled(Typography)`
    && {
        color: #9F9F9F;
    }
`
const BrandTypography = styled(Typography)`
    && {
        font-weight: bold;
        color: #2F2F2F;
    }
`
const PriceTypography = styled(Typography)`
    && {
        font-weight: bold;
        color: #555555;
    }
`
const MuiProductMedia = styled(CardMedia)`
    min-height: 360px;
    background: #555;
`
const MuiCardActions = styled.div`
    justify-content: center;
    align-items: center;
    padding: 20px;
    bottom: 0;
`
const AddToCartButton = styled(Button)`
    && {
        border-radius: 40px;
        color: ${props => props.theme.palette.primary.main};
        margin-top: 15px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    }
`

type ProductCardProps = {
    product: ProductRecord
}

const ProductCard = (props: ProductCardProps) => {
    const {
        product:
        {
            id,
            brand,
            description,
            image,
            price,
            mod = null,
            productActions = false,
        },
    } = props

    const currencyFormatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    })

    const addToCartHandler = (id: number) => console.log(`Added product ID ${id} to cart.`)

    return (
        <>
            <MuiProductCard data-testid={TEST_ID_CARD_PRODUCT}>
                <MuiProductMedia
                    image={image}
                    title={description}
                />
                <CardContent>
                    <MultiTypography>
                        <SpacedDiv>
                            <BrandTypography variant="h6">
                                {brand}
                            </BrandTypography>
                        </SpacedDiv>
                        <SpacedDiv>
                            <DescriptionTypography variant="caption">
                                {description}
                            </DescriptionTypography>
                        </SpacedDiv>
                    </MultiTypography>
                    <MultiTypography>
                        <SpacedDiv>
                            <PriceTypography variant="h4">
                                ${currencyFormatter.format(price)}
                            </PriceTypography>
                        </SpacedDiv>
                        <SpacedDiv>
                            {mod && 
                                <StyledDiscountBadge
                                    size="small"
                                    variant="contained"
                                    label={`${(mod * 100).toFixed(0)}%`}
                                />
                            }
                        </SpacedDiv>
                    </MultiTypography>
                    <SpacedDiv>
                        {mod &&
                            <PriceStrikeThrough variant="caption">
                                ${currencyFormatter.format(price * (1 + mod))}
                            </PriceStrikeThrough>
                        }
                    </SpacedDiv>
                </CardContent>
                {productActions &&
                    <MuiCardActions>
                        <MultiTypography>
                            <Chip
                                variant="outlined"
                                icon={<LocalShippingOutlinedIcon />}
                                label={TXT_PRODUCT_CARD_CHIP_DELIVERY}
                                color="primary"
                                size="small"
                            />
                            <Chip
                                variant="outlined"
                                icon={<HomeOutlinedIcon />}
                                label={TXT_PRODUCT_CARD_CHIP_LOCAL}
                                color="secondary"
                                size="small"
                            />
                        </MultiTypography>
                        <AddToCartButton
                            fullWidth
                            color="primary"
                            onClick={() => addToCartHandler(id)}
                        >
                            {TXT_BUTTON_ADD_TO_CART}
                        </AddToCartButton>
                    </MuiCardActions>
                }
            </MuiProductCard>
        </>
    )
}

export default ProductCard