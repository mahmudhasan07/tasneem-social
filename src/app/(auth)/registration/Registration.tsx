'use client'
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import logo from '@/assets/images/raaya_logo.png'
import Image from 'next/image';
import Button from '@/Components/UI/Button/Button';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa6';
import { CreateUserInterFace } from '@/utils/Interfaces';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/Redux/Store';
import { CreateUser } from '@/Redux/ReduxFunctions';
import ShowToastify from '@/utils/ShowToastify';
import { ToastContainer } from 'react-toastify';

const Registration = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [register, setRegister] = useState<string>("Register");


    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setRegister("submitting")
        const formData = new FormData(e.currentTarget);
        const data: CreateUserInterFace = {
            firstName: formData.get("first-name") as string,
            lastName: formData.get("last-name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        }
        dispatch(CreateUser({ data }))
            .then(res => {
                if ('error' in res && res.error) {
                    ShowToastify({ error: res.error.message })
                    setRegister("Register")
                }
                if ('payload' in res && res.payload) {
                    ShowToastify({ success: "User Create Successfully" })
                    setRegister("Register")
                }
            })
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setPassword(value);

        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const hasMinLength = value.length >= 8;
        // Check if all conditions are met
        if (!hasUppercase) {
            setErrorMessage('Password must include at least one uppercase letter.');
        } else if (!hasLowercase) {
            setErrorMessage('Password must include at least one lowercase letter.');
        } else if (!hasNumber) {
            setErrorMessage('Password must include at least one number.');
        } else if (!hasSpecialChar) {
            setErrorMessage('Password must include at least one special character.');
        } else if (!hasMinLength) {
            setErrorMessage('Password must be at least 8 characters long.');
        }

        else {
            setErrorMessage(''); // Clear the error message if all conditions are met
        }
        if (value.length <= 0) {
            setErrorMessage('');
        }
    };


    const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value != password) {
            setConfirmPassword(true)
        }
        else {
            setConfirmPassword(false)
        }
        if (e.target.value.length <= 0) {
            setConfirmPassword(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-md p-6 rounded-lg ">
                <div className="text-center mb-6">
                    <Image src={logo} alt='logo' width={150} className='mx-auto' />
                    <h1 className="text-4xl my-4 text-gray-700">Create your account!</h1>
                    <p className="text-sm text-gray-500">
                        Please Enter The Information Requested To Create Your Account
                    </p>
                </div>
                <form onSubmit={handleRegister}>
                    <div className='flex gap-4'>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                name='first-name'
                                required
                                className="w-full mt-1 px-4 py-2 bg-[#FCFCFD] text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name='last-name'
                                required
                                className="w-full mt-1 px-4 py-2 text-sm bg-[#FCFCFD] border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="georgia.young@example.com"
                            name='email'
                            required
                            className="w-full mt-1 px-4 py-2 text-sm border bg-[#FCFCFD] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword == true ? 'text' : 'password'}
                            placeholder="Password"
                            name='password'
                            required
                            onChange={handlePasswordChange}
                            className="w-full mt-1 px-4 py-2 text-sm border bg-[#FCFCFD] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <p className='text-sm text-red-600'>{errorMessage}</p>
                        <div className='absolute right-3 top-8'>
                            <button type='button' className='text-xl' onClick={() => setShowPassword(!showPassword)}>{showPassword == false ? <IoEyeSharp /> : <FaEyeSlash />}</button>
                        </div>
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type={showConfirmPassword == true ? 'text' : 'password'}
                            required
                            placeholder="Confirm Password"
                            onChange={handleConfirmPassword}
                            className="w-full mt-1 px-4 py-2 text-sm border bg-[#FCFCFD] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <p className={confirmPassword == false ? "hidden" : "text-sm text-red-600"}>Your password doesn&#39;t match</p>
                        <div className='absolute right-3 top-8'>
                            <button type='button' className='text-xl' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword == false ? <IoEyeSharp /> : <FaEyeSlash />}</button>
                        </div>
                    </div>
                    <Button className='w-full rounded-lg'>{register}</Button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account?{' '}
                    <Link href="/login" className="text-purple-600 ml-2 hover:underline">
                        log in Here!
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;