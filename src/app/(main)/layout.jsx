import React from 'react';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import BreakingNews from '@/components/shared/BreakingNews';

const mainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
        </>
    );
};

export default mainLayout;