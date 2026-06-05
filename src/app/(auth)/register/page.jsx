"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa6';

const LoginPage = () => {

    const registerUser = async (formData) => {
        const regData = Object.fromEntries(formData.entries());
        // console.log(data);
        const { data, error } = await authClient.signUp.email({
            name: regData.name, // required
            email: regData.email, // required
            password: regData.password, // required
            image: regData.photoUrl,
            callbackURL: "/",
        });
        // console.log(data, error)
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-full h-[90vh] flex justify-center items-center '>
            <form
                className='bg-white p-12 w-full max-w-md shadow-sm'
                action={registerUser}
            >

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Register your account
                </h2>

                {/* Name Input */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm bg-slate-200/80 placeholder-gray-500 focus:outline-none focus:bg-transparent"
                    />
                </div>

                {/* photo url Input */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        name="photoUrl"
                        placeholder="Enter your Photo Url"
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm bg-slate-200/80 placeholder-gray-500 focus:outline-none focus:bg-transparent"
                    />
                </div>

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

                {/** Check box  */}
                <label className="label mb-8">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                    />
                    Accept Term & Conditions
                </label>

                {/* Login Button */}
                <button
                    className="w-full bg-black text-white py-2.5 rounded-sm font-medium text-sm hover:bg-gray-800 transition-colors mb-6"
                    type='submit'
                >
                    Register
                </button>


            </form>
        </div>
    );
};

export default LoginPage;