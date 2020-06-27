import React from 'react'
import styled from 'styled-components'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,

} from '@material-ui/core'
import { TEST_ID_CARD_PRODUCT } from '../../constants/testIds'
import { ProductRecord } from '../../interfaces'

const StyledDiscountBadge = styled.div`
    && {
        background: #CE352E;
        border: none;
        border-radius: 30%;
        padding: 3px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: white;
        font-size: 1em;

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
            mod = null
        }
    } = props

    const currencyFormatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    })

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
                            {mod && <StyledDiscountBadge>{(mod * 100).toFixed(0)}%</StyledDiscountBadge>}
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
            </MuiProductCard>
        </>
    )
}

export default ProductCard