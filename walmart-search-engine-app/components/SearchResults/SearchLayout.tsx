import React from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@material-ui/core'
import SearchList from './SearchList'
import ProductCard from '../../components/ProductCard'
import Pagination from '../../components/Pagination'
import { ProductRecord } from '../../interfaces'
import { TXT_SEARCH_NO_RESULTS } from '../../constants/text'
const ProductCardListGrid = styled(Grid)`
    && {
        display: flex;
        min-height: 700px;
        
    }
`
const StyledNoResults = styled.div`
    && {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
`
const ProductCardGridItem = styled(Grid)`
    
`
const ProductCardContainer = styled.div`
    && {
        height: 100%;
        padding: 0 6px;  
    }
`
const SearchLayoutGridContainer = styled(Grid)`
    && ${ProductCardGridItem}:first-child > ${ProductCardContainer} {
        margin-left: 0;
    }
    && ${ProductCardGridItem}:last-child > ${ProductCardContainer} {
        margin-right: 0;
    }
`
const NoResults = () => (
    <StyledNoResults>
        <Typography variant="h4">
            {TXT_SEARCH_NO_RESULTS}
        </Typography>
    </StyledNoResults>
)

type ProductCardListItemProps = {
    product: ProductRecord
}

const ProductCardListItem = ({ product }: ProductCardListItemProps) => (
    <ProductCardGridItem item xs={12} md={4}>
        <ProductCardContainer>
            <ProductCard product={product} />
        </ProductCardContainer>
    </ProductCardGridItem>
)

type SearchLayoutProps = {
    products?: Array<ProductRecord>
}

const SearchLayout = (props: SearchLayoutProps) => {
    const { products = [] } = props
    return products.length > 0 ? (
        <SearchLayoutGridContainer container>
            <ProductCardListGrid item xs={12}>
                {products.map((product, i) => <ProductCardListItem key={`ProductResultCard-${i}`} product={product} />)}
            </ProductCardListGrid>
            <Grid container>
                <Grid item xs={12}>
                    <Pagination />
                </Grid>
            </Grid>
        </SearchLayoutGridContainer>
    )
        :
        <NoResults />
}

export default SearchLayout