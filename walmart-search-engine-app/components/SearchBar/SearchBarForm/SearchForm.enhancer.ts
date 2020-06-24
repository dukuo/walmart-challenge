// import { reduxForm } from 'redux-form'
import { withFormik } from 'formik'
import { SEARCH_FORM } from '../../../constants/forms'

export default withFormik({
    mapPropsToValues: (props:any) => props.mapPropsToValues,
    validationSchema: (props:any) => props.validationSchema,
    handleSubmit: (values, bag) => bag.props.onSubmit(values, bag),
    displayName: SEARCH_FORM
})