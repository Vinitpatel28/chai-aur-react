import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const currentUser = await authService.getCurrentUser()
                if(currentUser) dispatch(login({userData: currentUser}));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center py-12 px-4">
            <div className="mx-auto w-full max-w-md bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[80px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-xl font-semibold text-gray-900">Create account</h2>
                <p className="mt-2 text-center text-sm text-gray-500">
                    Already have an account?&nbsp;
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Sign in
                    </Link>
                </p>
                {error && (
                  <p className="mt-4 text-red-600 text-center text-sm">{error}</p>
                )}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-4 mt-6'>
                        <Input label="Full Name" placeholder="Enter your full name"
                        {...register("name", { required: true })} />
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
                        <Button type="submit" className="w-full">Create account</Button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Signup