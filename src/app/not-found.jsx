import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col'>
            <h2 className='font-bold text-5xl'>This page is not found</h2>

            <button className='btn bg-purple-500 text-white'>
                <Link href="/" >
                    Back to home
                </Link>
            </button>
        </div>
    );
};

export default notFound;