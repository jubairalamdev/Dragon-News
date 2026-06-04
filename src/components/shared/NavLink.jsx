"use client"

import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className }) => {

    const pathname = usePathname();
    const isActive = pathname === href

    return (
        <Button
            className={`${
                    isActive
                    ? "bg-pink-800 text-white py-2 px-3 rounded-lg"
                    : ""
                }
                ${className}    
            `}
        >
            <Link
                href={href} >
                {children}
            </Link>
        </Button>
    );
};

export default NavLink;