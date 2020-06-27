import React from 'react'
import * as Yup from 'yup'

import SearchBarForm from './SearchBarForm'
import { FormValues } from './SearchBarForm/SearchForm'
import { useRouter } from 'next/router'

export const validation = Yup
    .object()
    .shape({
        query: Yup
            .string()
            .min(3)
            .required(`Ingresa al menos 3 caracteres`),

    })
export let propsToValues: FormValues = {
    query: ''
}

type SearchBarProps = {
    submit?: any
}
const SearchBar = ({ submit }: SearchBarProps) => {
    const router = useRouter()
    React.useEffect(() => {
        if(router.query.q) {
            propsToValues = {
                query: router.query.q.toString()
            }
        }
    }, [router])
    return (
        <>
            <SearchBarForm
                onSubmit={submit}
                validationSchema={validation}
                mapPropsToValues={propsToValues}
            />
        </>
    )
}

export default SearchBar