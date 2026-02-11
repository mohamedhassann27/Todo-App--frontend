import * as yup from "yup"

export const registerSchema= yup
    .object({
        username: yup.string().required('username is required').min(5, 'username must be at least 5 charachter'),
        email: yup.string().required('email is required').email('not a valid email address'),
        password: yup.string().required('password is required').min(6, 'password must be at least 6 charachter'),
    })
    .required()

export const LoginSchema= yup
    .object({
        // username: yup.string().required('username is required').min(5, 'username must be at least 5 charachter'),
        identifier: yup.string().required('email is required').email('not a valid email address'),
        password: yup.string().required('password is required').min(6, 'password must be at least 6 charachter'),
    })
    .required()