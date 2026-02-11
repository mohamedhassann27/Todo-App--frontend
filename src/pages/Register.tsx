import { useForm, type SubmitHandler } from 'react-hook-form'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../validation'
import InputErrorMsg from '../components/ui/InputErrorMsg'
import axios, { AxiosError } from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react'
import { useNavigate } from 'react-router'


function RegiserPage() {

    const [isLoading,setIsLoading]= useState(false)
    const navigate= useNavigate()

    interface IFormInput {
        username: string
        email: string
        password: string
    }

    const {register, formState: { errors }, handleSubmit } = useForm<IFormInput>({resolver: yupResolver(registerSchema)})
    // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    const onSubmit: SubmitHandler<IFormInput> = async(data) =>{
        setIsLoading(true)
        try {
            let res=await axios.post('http://localhost:1337/api/auth/local/register', data);
            console.log(res);
            toast.success('you will navigate to the login page after 2 seconds to login!', {duration:1500})
            setTimeout(() => {
                navigate('/login')
            }, 1500);
        } catch(error) {
            const errorObj = error as AxiosError<any>; 
            console.log(errorObj.response);
            toast.error(errorObj.response?.data.error.message)
        }finally{
            setIsLoading(false)
        }
    }
    // console.log(errors);
    
    
    return (
        <>
            <h2 className='mt-10'>Register to get access!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='px-20 py-10'>
                <Input type='text' placeholder='Username' {...register("username")}/>
                {/* {errors.username&& errors.username.type=='required'?<InputErrorMsg msg='username is required'/> : null}
                {errors.username&& errors.username.type=='minLength'?<InputErrorMsg msg='username must be at least 5 charachter'/> : null} */}
                {errors.username&& <InputErrorMsg msg={errors.username.message}/>}

                <Input type='email' placeholder='Email Address' {...register("email")} autoComplete='username'/>
                {errors.email&& <InputErrorMsg msg={errors.email.message}/>}


                <Input type='password' placeholder='Password' {...register("password")} autoComplete='current-password'/>
                {errors.password&& <InputErrorMsg msg={errors.password.message}/>}

                <Button isLoading={isLoading}>

                    {isLoading&&<svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>}

                    {isLoading? 'Loading...': 'Register'}

                </Button>

            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </>
    )
}

export default RegiserPage
