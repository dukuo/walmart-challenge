import React from 'react'
import styled from 'styled-components'
import {
    Pagination as MuiPagination,
    PaginationProps as MuiPaginationProps
} from '@material-ui/lab'

import { TEST_ID_APP_PAGINATION } from '../../constants/testIds'

type PaginationProps = {
    change?:any

}

const Pagination = ({ change, ...other }:PaginationProps & MuiPaginationProps ) => (
    <MuiPagination
        onChange={change}
        data-testid={TEST_ID_APP_PAGINATION}
        color="primary"
        {...other}
    />
)

export default Pagination