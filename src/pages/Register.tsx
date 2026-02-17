// import { useForm, type SubmitHandler } from 'react-hook-form'
// import Button from '../components/ui/Button'
// import Input from '../components/ui/Input'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { registerSchema } from '../validation'
// import InputErrorMsg from '../components/ui/InputErrorMsg'
// import axios, { AxiosError } from 'axios'
// import toast, { Toaster } from 'react-hot-toast';
// import { useState } from 'react'
// import { useNavigate } from 'react-router'


// function RegiserPage() {
//     const host= `https://todo-app-backend-production-3bfc.up.railway.app/api`

//     const [isLoading,setIsLoading]= useState(false)
//     const navigate= useNavigate()

//     interface IFormInput {
//         username: string
//         email: string
//         password: string
//     }

//     const {register, formState: { errors }, handleSubmit } = useForm<IFormInput>({resolver: yupResolver(registerSchema)})
//     // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
//     const onSubmit: SubmitHandler<IFormInput> = async(data) =>{
//         setIsLoading(true)
//         try {
//             let res=await axios.post(`${host}/auth/local/register`, data);
//             console.log(res);
//             toast.success('you will navigate to the login page after 2 seconds to login!', {duration:1500})
//             setTimeout(() => {
//                 navigate('/login')
//             }, 1500);
//         } catch(error) {
//             const errorObj = error as AxiosError<any>; 
//             console.log(errorObj.response);
//             toast.error(errorObj.response?.data.error.message)
//         }finally{
//             setIsLoading(false)
//         }
//     }
//     // console.log(errors);
    
    
//     return (
//         <>
//             <h2 className='mt-10'>Register to get access!</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className='px-20 py-10'>
//                 <Input type='text' placeholder='Username' {...register("username")}/>
//                 {/* {errors.username&& errors.username.type=='required'?<InputErrorMsg msg='username is required'/> : null}
//                 {errors.username&& errors.username.type=='minLength'?<InputErrorMsg msg='username must be at least 5 charachter'/> : null} */}
//                 {errors.username&& <InputErrorMsg msg={errors.username.message}/>}

//                 <Input type='email' placeholder='Email Address' {...register("email")} autoComplete='username'/>
//                 {errors.email&& <InputErrorMsg msg={errors.email.message}/>}


//                 <Input type='password' placeholder='Password' {...register("password")} autoComplete='current-password'/>
//                 {errors.password&& <InputErrorMsg msg={errors.password.message}/>}

//                 <Button isLoading={isLoading}>

//                     {isLoading&&<svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>}

//                     {isLoading? 'Loading...': 'Register'}

//                 </Button>

//             </form>
//             <Toaster
//                 position="top-center"
//                 reverseOrder={false}
//             />

//         </>
//     )
// }

// export default RegiserPage







// import { useForm, type SubmitHandler } from 'react-hook-form';
// import Button from '../components/ui/Button';
// import Input from '../components/ui/Input';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { registerSchema } from '../validation';
// import InputErrorMsg from '../components/ui/InputErrorMsg';
// import axios, { AxiosError } from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router';

// interface IFormInput {
//   username: string;
//   email: string;
//   password: string;
// }

// function RegisterPage() {
//   const host = `https://todo-app-backend-production-3bfc.up.railway.app/api`;
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm<IFormInput>({ resolver: yupResolver(registerSchema) });

//   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
//     setIsLoading(true);
//     try {
//       await axios.post(`${host}/auth/local/register`, data);
//       toast.success('Account created! Redirecting to login...');
//       setTimeout(() => navigate('/login'), 1500);
//     } catch (error) {
//       const errorObj = error as AxiosError<any>;
//       toast.error(errorObj.response?.data.error.message ?? 'Registration failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .auth-container {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//         }

//         .auth-card {
//           width: 100%;
//           max-width: 400px;
//           background: var(--bg-secondary);
//           border: 1px solid var(--border-subtle);
//           border-radius: var(--radius-lg);
//           padding: 40px 32px;
//         }

//         .auth-header {
//           text-align: center;
//           margin-bottom: 32px;
//         }

//         .auth-title {
//           font-size: 24px;
//           font-weight: 600;
//           color: var(--text-primary);
//           margin-bottom: 8px;
//           letter-spacing: -0.02em;
//         }

//         .auth-subtitle {
//           font-size: 14px;
//           color: var(--text-secondary);
//         }

//         .form-field {
//           margin-bottom: 20px;
//         }

//         .form-label {
//           display: block;
//           font-size: 13px;
//           font-weight: 500;
//           color: var(--text-primary);
//           margin-bottom: 8px;
//         }

//         .form-input {
//           width: 100%;
//           background: var(--bg-primary);
//           border: 1px solid var(--border-subtle);
//           border-radius: var(--radius-sm);
//           padding: 10px 12px;
//           font-size: 14px;
//           color: var(--text-primary);
//           font-family: var(--font-primary);
//           outline: none;
//           transition: all 0.15s ease;
//         }

//         .form-input::placeholder {
//           color: var(--text-tertiary);
//         }

//         .form-input:hover {
//           border-color: var(--border-default);
//         }

//         .form-input:focus {
//           border-color: var(--accent-blue);
//           background: var(--bg-elevated);
//         }

//         .form-error {
//           margin-top: 6px;
//           font-size: 12px;
//           color: var(--red);
//         }

//         .btn-primary {
//           width: 100%;
//           background: var(--accent-blue);
//           color: white;
//           border: none;
//           border-radius: var(--radius-sm);
//           padding: 10px 16px;
//           font-size: 14px;
//           font-weight: 500;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           transition: all 0.15s ease;
//           margin-top: 24px;
//         }

//         .btn-primary:hover:not(:disabled) {
//           background: var(--accent-blue-hover);
//         }

//         .btn-primary:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }

//         .spinner {
//           width: 14px;
//           height: 14px;
//           border: 2px solid #ffffff40;
//           border-top-color: #ffffff;
//           border-radius: 50%;
//           animation: spin 0.6s linear infinite;
//         }

//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }

//         .auth-footer {
//           text-align: center;
//           margin-top: 24px;
//           padding-top: 24px;
//           border-top: 1px solid var(--border-subtle);
//           font-size: 13px;
//           color: var(--text-secondary);
//         }

//         .auth-link {
//           color: var(--accent-blue);
//           text-decoration: none;
//           font-weight: 500;
//         }

//         .auth-link:hover {
//           text-decoration: underline;
//         }
//       `}</style>

//       <div className="auth-container">
//         <div className="auth-card">
//           <div className="auth-header">
//             <h1 className="auth-title">Create an account</h1>
//             <p className="auth-subtitle">Get started with your todo list</p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             <div className="form-field">
//               <label htmlFor="username" className="form-label">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 placeholder="johndoe"
//                 className="form-input"
//                 {...register('username')}
//               />
//               {errors.username && (
//                 <div className="form-error">{errors.username.message}</div>
//               )}
//             </div>

//             <div className="form-field">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 autoComplete="username"
//                 className="form-input"
//                 {...register('email')}
//               />
//               {errors.email && (
//                 <div className="form-error">{errors.email.message}</div>
//               )}
//             </div>

//             <div className="form-field">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 autoComplete="current-password"
//                 className="form-input"
//                 {...register('password')}
//               />
//               {errors.password && (
//                 <div className="form-error">{errors.password.message}</div>
//               )}
//             </div>

//             <button type="submit" className="btn-primary" disabled={isLoading}>
//               {isLoading && <span className="spinner" />}
//               {isLoading ? 'Creating account...' : 'Create account'}
//             </button>
//           </form>

//           <div className="auth-footer">
//             Already have an account?{' '}
//             <Link to="/login" className="auth-link">
//               Sign in
//             </Link>
//           </div>
//         </div>
//       </div>

//       <Toaster
//         position="top-center"
//         toastOptions={{
//           style: {
//             background: 'var(--bg-elevated)',
//             color: 'var(--text-primary)',
//             border: '1px solid var(--border-subtle)',
//             borderRadius: 'var(--radius-md)',
//             fontSize: '14px',
//           },
//         }}
//       />
//     </>
//   );
// }

// export default RegisterPage;






// -----------------------Update UI only with claude-----------------------
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../validation';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

interface IFormInput {
    username: string;
    email: string;
    password: string;
}

function RegisterPage() {
    const host = `https://todo-app-backend-production-3bfc.up.railway.app/api`;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInput>({ resolver: yupResolver(registerSchema) });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setIsLoading(true);
        try {
        await axios.post(`${host}/auth/local/register`, data);
        toast.success('Account created successfully! 🎉');
        setTimeout(() => navigate('/login'), 1500);
        } catch (error) {
        const errorObj = error as AxiosError<any>;
        toast.error(errorObj.response?.data.error.message ?? 'Registration failed');
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-linear(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

        {/* Register Card */}
        <div className="w-full max-w-md relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-indigo-500/10 p-8 transform transition-all duration-300 hover:shadow-indigo-500/20">
            
            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
                <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-violet-500 blur-lg opacity-50 rounded-full"></div>
                <div className="relative bg-linear-to-r from-indigo-500 to-violet-500 p-3 rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </div>
                </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                Create Account
                </h1>
                <p className="text-slate-400 text-sm">
                Start organizing your tasks today
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Username */}
                <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-slate-300">
                    Username
                </label>
                <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-violet-500 rounded-lg opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                    <input
                    id="username"
                    type="text"
                    placeholder="johndoe"
                    className={`relative w-full bg-slate-900/50 border ${
                        errors.username ? 'border-red-500' : 'border-slate-700'
                    } rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                    {...register('username')}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    </div>
                </div>
                {errors.username && (
                    <div className="flex items-center gap-1.5 text-red-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.username.message}</span>
                    </div>
                )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                    Email Address
                </label>
                <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-violet-500 rounded-lg opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                    <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="username"
                    className={`relative w-full bg-slate-900/50 border ${
                        errors.email ? 'border-red-500' : 'border-slate-700'
                    } rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                    {...register('email')}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    </div>
                </div>
                {errors.email && (
                    <div className="flex items-center gap-1.5 text-red-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.email.message}</span>
                    </div>
                )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                    Password
                </label>
                <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-violet-500 rounded-lg opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                    <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className={`relative w-full bg-slate-900/50 border ${
                        errors.password ? 'border-red-500' : 'border-slate-700'
                    } rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                    {...register('password')}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    </div>
                </div>
                {errors.password && (
                    <div className="flex items-center gap-1.5 text-red-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.password.message}</span>
                    </div>
                )}
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                disabled={isLoading}
                className="relative w-full group mt-6 cursor-pointer"
                >
                <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-violet-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {isLoading ? (
                    <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Creating account...</span>
                    </>
                    ) : (
                    <>
                        <span>Create Account</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </>
                    )}
                </div>
                </button>

            </form>

            {/* Divider */}
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-800/50 text-slate-400">Already have an account?</span>
                </div>
            </div>

            {/* Login Link */}
            <div className="text-center">
                <Link
                to="/login"
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors inline-flex items-center gap-1 group"
                >
                <span>Sign in instead</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
            </div>

            </div>
        </div>

        {/* Toast */}
        <Toaster
            position="top-center"
            toastOptions={{
            className: 'backdrop-blur-xl',
            style: {
                background: 'rgba(30, 41, 59, 0.9)',
                color: '#e2e8f0',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                borderRadius: '12px',
                padding: '12px 20px',
            },
            success: {
                iconTheme: { primary: '#6366f1', secondary: '#fff' },
            },
            error: {
                iconTheme: { primary: '#ef4444', secondary: '#fff' },
            },
            }}
        />
        </div>
    );
}

export default RegisterPage;