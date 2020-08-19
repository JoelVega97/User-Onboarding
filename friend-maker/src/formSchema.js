import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address'),

    first_name: yup
    .string()
    .required('First name is required'),

    last_name: yup
    .string()
    .required('Last name is required'),

    tos: yup
    .boolean()
    .required('You must agree to the Terms of Service')
})

export default formSchema