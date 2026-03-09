// now will create acount for user to sign up and then will create a login page for user to login and then will create a dashboard for user to see their profile and then will create a logout button for user to logout
import React, { useState } from 'react'
import {Button, InputBtn} from './index'
import { useNavigate } from 'react-router-dom'
import {Login as storeLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { service } from '../appWrite/auth'

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {register, handleSubmit} = useForm();

    const handleSignUp = async (userdata) => {
        setError('');
        try {
            const user = await service.createAcount(userdata);
            if (user) {
                const session = await service.CurrentUser();
                if (session) dispatch(storeLogin(session));
                navigate('/');
            }
        } catch (error) {
            setError('Sign up failed. Please try again.',error.message);
        }
    }
    return (
            <div
            className='flex items-center justify-center w-full' 
            >
                <div  className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                     <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-25">
                            <Logo width="100%" />
                        </span>
                    </div>
                </div>
                <h1>Sing in to your acount</h1>
                <p>
                    if you have already an account? 
                        <span className='font-medium text-primary transition-all duration-200 hover:underline' onClick={()=>navigate('/login')}>
                            Sign in
                        </span>
                    </p>
                    {error && <p className='text-red-500'>{error}</p>}
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <InputBtn
                        label="Name: "
                        type="text"
                        placeholder='Enter your name'
                        { ...register( 'name', {required: true,} ) }
                            />
                    <InputBtn
                        label="Email: "
                        type="email"
                        placeholder='Enter your email'
                        {...register('email', { 
                            required: true,
                            matchPatern: (value) => /^\w+([-] \w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
                                .test(value) || "Email address must be a valid address"
                            
                        })}
                    />
                    <InputBtn
                        label="Password: "
                        type="password"
                        placeholder='Enter your password'
                        {...register('password', { required: true })}
                    />
                    <Button
                        type='submit'
                        classname='w-full'
                    >
                        Create Account
                    </Button>
                </form>
            </div>
        )
     }
export default SignUp;