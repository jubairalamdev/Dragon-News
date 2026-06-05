import React from 'react';
import Navbar from '@/components/shared/Navbar';

const authLayout = ({children}) => {
    return (
        <main className='w-full bg-slate-100'>

        <div className='max-w-300 xl:w-300 mx-auto'>
            <Navbar />
            {children}
        </div>
        </main>
    );
};

export default authLayout;