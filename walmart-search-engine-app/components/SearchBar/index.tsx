import * as Yup from 'yup'

import SearchBarForm from './SearchBarForm'
import { FormValues } from './SearchBarForm/SearchForm'

const SearchBar = () => {
    const validation = Yup
        .object()
        .shape({
            query: Yup
                .string()
                .required(`Ingresa al menos 3 caracteres`),

        })
    const propsToValues:FormValues = {
        query: ''
    }
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