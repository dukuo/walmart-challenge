import React from 'react'
import styled from 'styled-components'
import {
    Paper
} from '@material-ui/core'
import {
    Pagination as MuiPagination,
    PaginationProps as MuiPaginationProps
} from '@material-ui/lab'

import { TEST_ID_APP_PAGINATION } from '../../constants/testIds'

const PaginationPaper = styled(Paper)`
    && {
        padding: 10px;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 40px;
    }
`

type PaginationProps = {
    change?: any

}

const Pagination = ({ change, ...other }: PaginationProps & MuiPaginationProps) => (
    <PaginationPaper elevation={0}>
        <MuiPagination
            onChange={change}
            data-testid={TEST_ID_APP_PAGINATION}
            color="primary"
            {...other}
        />
    </PaginationPaper>
)

export default Pagination