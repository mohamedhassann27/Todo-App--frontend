import { useForm, type SubmitHandler } from 'react-hook-form';
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../validation';
import InputErrorMsg from '../components/ui/InputErrorMsg';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
// import { useNavigate } from 'react-router';

function LoginPage() {
    const host= `https://todo-app-backend-production-3bfc.up.railway.app/api`

    const [isLoading, setIsLoading]= useState(false)
    // const navigate= useNavigate()
    
    interface IFormInput{
        // username: string;
        identifier: string;
        password: string;
    }

    const {register, handleSubmit, formState: { errors }} =useForm<IFormInput>({resolver: yupResolver(LoginSchema)})

    const onSubmit: SubmitHandler<IFormInput>= async(data)=>{
        // console.log(data);
        setIsLoading(true)
        try {
            let {data: resData}= await axios.post(`${host}/auth/local`, data)
            console.log(resData);
            toast.success("you will navigate to the home page after 2 seconds!", {duration:1500})
            localStorage.setItem('loggedInUser', JSON.stringify(resData))
            setTimeout(() => {
                location.replace('/')
            }, 2000);
        } catch (error) {
            const errorObj= error as AxiosError<any>
            console.log(errorObj.response)
            toast.error(errorObj.response?.data.error.message)
            
        }finally{
            setIsLoading(false)
        }

        
    }

    // console.log(errors);
    

    return (
        <>
            <h2 className='mt-10'>Login to get access!</h2>
            <form  className='px-20 py-10' onSubmit={handleSubmit(onSubmit)} >

                <div>
                    <Input type='email' placeholder='Email Address'autoComplete='username'{...register('identifier')} />
                    {errors.identifier &&<InputErrorMsg msg={errors.identifier?.message}/>}
                </div>

                <div className="">
                    <Input type='password' placeholder='Password' autoComplete='current-password' {...register('password')}/>
                    {errors.password &&<InputErrorMsg msg={errors.password?.message}/>}
                </div>

                <Button title='Login'>
                    {isLoading&& <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>}
                    {isLoading? 'Loading...': 'Login'}
                </Button>

            </form>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default LoginPage
