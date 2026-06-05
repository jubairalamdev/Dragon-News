"use client"

import { Link, Button } from "@heroui/react";
import Image from "next/image";
import userAvatar from "@/assets/user.png"
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { logoutUser } from "@/lib/actions";

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    return (
        <nav className="flex py-4 items-center justify-between">
            <span></span>
            <ul className="flex items-center gap-4 text-gray-600">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>

            {
                isPending
                    ? <div>
                        <span className="skeleton skeleton-text">Authenticating...</span>
                        <span className="loading loading-infinity loading-lg"></span>
                    </div>
                    : user
                        ? <div className="flex items-center gap-3">
                            <h3 className="font-bold text-gray-600">Welcome, {user.name}</h3>
                            <Image src={user.image} width={41} height={41} alt="User Avatar"  className="rounded-full border" />
                            <Button 
                                className="bg-gray-800 text-white font-bold tex-lg py-3 px-5 rounded-lg"
                                onClick={logoutUser}    
                            >
                                Logout
                            </Button>
                        </div>
                        : <div className="flex items-center gap-3">
                            <Image src={userAvatar} width={41} height={41} alt="User Avatar"/>
                            <Button>
                                <Link href="/login" className="bg-gray-800 text-white font-bold tex-lg py-3 px-5 rounded-lg">
                                    Login
                                </Link>
                            </Button>
                        </div>
            }


        </nav>
    );
};

export default Navbar;