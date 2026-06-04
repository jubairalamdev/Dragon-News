import React from 'react';
import Navbar from '@/components/shared/Navbar';

const authLayout = ({children}) => {
    return (
        <div className='max-w-300 mx-auto'>
            <Navbar />
            {children}
        </div>
    );
};

export default authLayout;