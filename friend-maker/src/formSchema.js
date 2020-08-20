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

    password: yup
    .string()
    .min(8, 'Password must be longer than 8 characters')
    .required('Password is required'),

    tos: yup
    .boolean()
    .oneOf( [true] , 'You must agree to Terms and Services')
    .required('You must agree to Terms and Services')
})

export default formSchema