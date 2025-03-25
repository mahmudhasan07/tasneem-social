"use client";
import Button from "@/Components/UI/Button/Button";
import React, { FormEvent, useState } from "react";
import logo from "@/assets/images/raaya_logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { LoginInterFace } from "@/utils/Interfaces";
import { AppDispatch } from "@/Redux/Store";
import { useDispatch } from "react-redux";
import { LogInUser, setUser } from "@/Redux/ReduxFunctions";
import ShowToastify from "@/utils/ShowToastify";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const LogIn = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [logIn, setLogIn] = useState<string>('Log in');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const route = useRouter()

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // e.stopPropagation()
        setLogIn("loading ...")
        const formData = new FormData(e.currentTarget);
        const data: LoginInterFace = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        dispatch(LogInUser({ data }))
            .then(res => {
                console.log(res);

                if ('error' in res && res.error) {
                    ShowToastify({ error: "Check your email /password again" })
                    setLogIn('Log in')
                }
                if ('payload' in res && res.payload) {
                    const userDetails = res?.payload?.result.userInfo
                    const name = `${userDetails.firstName} ${userDetails.lastName}`
                    const email = userDetails.email
                    const role = userDetails.role
                    const token = res.payload.result.accessToken
                    dispatch(setUser({ user: { name, email, role }, token: token }))
                    setLogIn('Log in')
                    route.push('/')

                }
            })

    }

    const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-6 ">
        <div className="flex flex-col items-center mb-6">
          <Image src={logo} alt="logo" className="mx-auto" width={150} />
        </div>

                <h2 className="text-4xl text-center my-4">Hi, Welcome Back! 👋</h2>
                <p className="text-center text-gray-600 mb-8">
                    Lets explore <Link href={'/'} className='text-primary'>Raaya Social</Link> diversely
                </p>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-4 py-2 border bg-[#FCFCFD] border-gray-300 focus:outline-double rounded-md shadow-sm  focus:border-primary"
                            placeholder="georgia.young@example.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword == true ? "text" : "password"}
                                name="password"
                                required
                                className="mt-1 block w-full px-4 py-2 border bg-[#FCFCFD] focus:outline border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                placeholder="Enter your password"
                            />
                            <div className='absolute right-3 top-3'>
                                <button type='button' className='text-xl' onClick={handleShowPassword}>{showPassword == false ? <IoEyeSharp /> : <FaEyeSlash />}</button>
                            </div>
                        </div>
                    </div>
                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                onChange={() => setChecked(!checked)}
                                className="h-4 w-4 text-purple-600 border-gray-300 rounded bg-primary focus:ring-primary"
                                style={{
                                    backgroundColor: "#A554E6"
                                }}
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                        </label>
                        <a
                            href="/forgot-password"
                            className="text-sm text-purple-600 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

          <Button className="w-full rounded-lg">{logIn}</Button>
        </form>
        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            If you don&#39;t have any account please
            <Link
              href="/registration"
              className="text-purple-600 ml-3 hover:underline"
            >
              Register Here!
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
