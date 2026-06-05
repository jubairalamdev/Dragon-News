"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa6';

const LoginPage = () => {

    const loginUser = async (formData) => {
        const regData = Object.fromEntries(formData.entries());
        // console.log(data);
        const { data, error } = await authClient.signIn.email({
            email: regData.email, // required
            password: regData.password, // required
            rememberMe: true,
            callbackURL: "/"
        });
        // console.log(data, error)
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-full h-[90vh] flex justify-center items-center '>
            <form
                className='bg-white px-12 py-14 -mt-[5%] w-full max-w-md shadow-sm'
                action={loginUser}
            >

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Login your account
                </h2>

                {/* Email Input */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm bg-slate-200/80 placeholder-gray-500 focus:outline-none focus:bg-transparent"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm bg-slate-200/80 placeholder-gray-500 focus:outline-none focus:bg-transparent"
                    />
                </div>

                {/* Show Password */}
                <span
                    className='text-gray-600 flex gap-1 items-center mb-3 -mt-3 hover:underline w-fit cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <FaEye /> show Password
                </span>

                {/* Login Button */}
                <button
                    className="w-full bg-black text-white py-2.5 rounded-sm font-medium text-sm hover:bg-gray-800 transition-colors mb-6"
                    type='submit'
                >
                    Login
                </button>

                {/* Register Link */}
                <p className="text-gray-600 text-sm text-center font-medium cursor-pointer">
                    {`Don't Have An Account?`}
                    <Link
                        href="/register"
                        className='text-red-500 hover:underline ml-1'>
                        Register
                    </Link>
                </p>

            </form>
        </div >
    );
};

export default LoginPage;