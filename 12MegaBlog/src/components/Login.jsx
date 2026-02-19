import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin({userData}));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full py-12 px-4'>
        <div className="mx-auto w-full max-w-md bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
        <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[80px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-xl font-semibold text-gray-900">Sign in</h2>
        <p className="mt-2 text-center text-sm text-gray-500">
                    Don&apos;t have an account?&nbsp;
                    <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                        Sign up
                    </Link>
        </p>
        {error && (
          <p className="mt-4 text-red-600 text-center text-sm">{error}</p>
        )}
        <form onSubmit={handleSubmit(login)} className='mt-6'>
            <div className='space-y-4'>
                <Input label="Email" placeholder="Enter your email" type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })} />
                <Input label="Password" type="password" placeholder="Enter your password"
                {...register("password", { required: true })} />
                <Button type="submit" className="w-full">Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login