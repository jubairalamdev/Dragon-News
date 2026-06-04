import { Link, Button } from "@heroui/react";
import Image from "next/image";
import userAvatar from "@/assets/user.png"
import NavLink from "./NavLink";

const Navbar = () => {
    return (
                <nav className="flex py-4 items-center justify-between">
                    <span></span>
                    <ul className="flex items-center gap-4 text-gray-600 ml-[13%]">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/about">About</NavLink></li>
                        <li><NavLink href="/career">Career</NavLink></li>
                    </ul>
                    <div className="flex items-center gap-3">
                        <Image src={userAvatar} width={41} alt="User Avatar"/>
                        <Button>
                            <Link href="/login" className="bg-gray-800 text-white font-bold tex-lg py-3 px-5 rounded-lg">
                                Login
                            </Link>
                        </Button>
                    </div>
                </nav>
    );
};

export default Navbar;