import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import axios from 'axios'
import { Grid, Hidden, CircularProgress } from '@material-ui/core'
import SearchResults from '../../components/SearchResults'
import { API_SEARCH_PRODUCT } from '../../constants/router'
import Layout from '../../components/Layout'
import FilterButton from '../../components/FilterButton'

const FilterGridItem = styled(Grid)`
    && {
        display:flex;
        justify-content: flex-end;
    }
`

const ToolsGridItem = styled(Grid)`
    && {
        padding: 10px;
        margin-top: 13px;
        margin-bottom: 10px;
        align-items: center;
    }
`

const fetchDataCall = async ({ api }) => {
    let apiReturn = await axios
      .get(api)
      .then(async function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    return apiReturn;
  };

const SearchProduct = (props: any) => {
    const MAX_PRODUCTS_PER_PAGE = 3
    const router = useRouter()
    const [products, setProducts] = React.useState([])
    const [activeProducts, setActiveProducts] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(0)
    const [totalPages, setTotalPages] = React.useState(products.length / MAX_PRODUCTS_PER_PAGE)
    const [isLoading, setLoading] = React.useState(false)
    
    React.useEffect(() => {
        if(router && router.query.q) {
            setLoading(true)
            const fetchData = async api => {
                let response = await fetchDataCall({ api: api });
                setProducts(response && response.data);
              };
          
              fetchData(`${API_SEARCH_PRODUCT}/${router.query.q}`);
            setLoading(false)
        }
    }, [router])
    
    React.useEffect(() => {
        setActiveProducts(products.slice(currentPage, MAX_PRODUCTS_PER_PAGE))
    }, [products])
    
    const onSearchSubmitHandler = ({ query }:any) => router.push({
        pathname: router.pathname,
        query: {
            q: query
        }
    })

    return (
        <Layout onSearchSubmit={onSearchSubmitHandler}>
            <ToolsGridItem container alignContent="space-between">
                <Grid item xs={12} sm={3}>
                    Resultados para: <b>Query</b>
                </Grid>
                <Hidden xsDown>
                    <Grid item sm={6} />
                </Hidden>
                <FilterGridItem item xs={12} sm={3}>
                    <FilterButton />
                </FilterGridItem>
            </ToolsGridItem>
            <Grid container>
                <Grid item xs={12} sm={3}></Grid>
                <Grid item xs={12} sm={9}>
                    {isLoading && <CircularProgress />}
                    {!isLoading && <SearchResults products={activeProducts} />}
                </Grid>

            </Grid>
        </Layout>
    )
}


export default SearchProduct