import React from 'react'
import * as Yup from 'yup'

import SearchBarForm from './SearchBarForm'
import { FormValues } from './SearchBarForm/SearchForm'

export const validation = Yup
    .object()
    .shape({
        query: Yup
            .string()
            .min(4)
            .required(`Ingresa al menos 4 caracteres`),

    })
export const propsToValues: FormValues = {
    query: ''
}
const SearchBar = () => {
    const onSubmitHandler = () => {

    }
    return (
        <>
            <SearchBarForm
                onSubmit={onSubmitHandler}
                validationSchema={validation}
                mapPropsToValues={propsToValues}
            />
        </>
    )
}

export default SearchBar