import React from 'react'
import styled from 'styled-components'
import { FormikProps } from 'formik'
import {
    IconButton,
    InputBase,
    CircularProgress,
    TextField,
    Paper,
} from '@material-ui/core'
import {
    Search as SearchIcon
} from '@material-ui/icons'
import { TXT_SEARCH_BAR_PLACEHOLDER } from '../../../constants/text'

export type FormValues = {
    query?: string
}

export type OtherProps = {

}

const SearchBarPaper = styled(Paper)`
    && {
        display: flex;
        flex: 1;
        border-radius: 10vw;
    }
`

const SearchForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isSubmitting
    } = props
    return (
        <SearchBarPaper>
            <form onSubmit={handleSubmit} data-testid="search-form">
                {!isSubmitting && 
                    <IconButton type="submit">
                        <SearchIcon />
                    </IconButton>
                }
                {isSubmitting && <CircularProgress />}
                <InputBase
                    id="query"
                    name="query"
                    inputProps={{
                        'aria-label': TXT_SEARCH_BAR_PLACEHOLDER
                    }}
                    placeholder={TXT_SEARCH_BAR_PLACEHOLDER}
                    error={!!(errors.query && touched.query)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.query}
                />
            </form>
        </SearchBarPaper>
    )
}

export default SearchForm