"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import blueberryLogo from '@/../public/blueberryLogo.png';
import Image from "next/image";
import '@/components/header/style.css';

function Navbar() {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div className="w-full top-0 inset-x-0 mx-auto flex row-auto bg-white shadow-md z-50">
                <div className="flex-1">
                    <Link href="/">
                        <Image src={blueberryLogo} alt="Blueberry AI" className="h-10 md:h-12 w-auto ml-10 mt-3" priority={true}/>
                    </Link>
                </div>
                <div className="flex-grow flex mx-auto justify-center space-x-96 font-bold ">
                    <Menu setActive={setActive}>
                        <div className="flex space-x-16 px-16 py-2">
                            <Link href="/">
                                <MenuItem setActive={setActive} active={active} item="Home" />
                            </Link>
                            <MenuItem setActive={setActive} active={active} item="Services">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/projects/chatbot">Chatbots</HoveredLink>
                                    <HoveredLink href="/aibasedsearch">AI based search</HoveredLink>
                                </div>
                            </MenuItem>
                            <Link href="/contactus">
                                <MenuItem setActive={setActive} active={active} item="Contact"/>
                            </Link>
                        </div>
                    </Menu>
                </div>
                <div className="flex-1">
                    {/* Empty div for centering */}
                </div>
            </div>

        </>
    );
}

export default Navbar;