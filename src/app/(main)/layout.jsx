import React from 'react';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import BreakingNews from '@/components/shared/BreakingNews';

const mainLayout = ({ children }) => {
    return (
        <main className='max-w-300 xl:w-300 mx-auto'>
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
        </main>
    );
};

export default mainLayout;