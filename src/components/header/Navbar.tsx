"use client";
// Navbar.js

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import blueberryLogo from '@/../public/logo2.svg';
import Image from "next/image";
import '@/components/header/style.css';

function Navbar() {
    const [active, setActive] = useState<string | null>('');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed w-full flex flex-col top-0 inset-x-0  md:flex-row bg-white z-50 py-1 h-16">
            {/*<div className="">*/}
                <div className="flex-1 flex justify-between items-center px-4 md:py-2">
                    <Link href="/">
                        <Image src={blueberryLogo} alt="Blueberry AI"
                        className="ml-13"
                         priority={true} />
                    </Link>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`flex-grow ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center px-4`}>
                    <Menu setActive={setActive}>
                        <div className="flex flex-col md:flex-row md:space-x-16 md:space-y-0">
                            <MenuItem setActive={setActive} active={active} item="Industry">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/industry/finance">Finance</HoveredLink>
                                    <HoveredLink href="/industry/healthcare">Healthcare</HoveredLink>
                                    <HoveredLink href="/industry/technology">Technology</HoveredLink>
                                </div>
                            </MenuItem>
                            <MenuItem setActive={setActive} active={active} item="Solutions">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/chatbot">Chatbots</HoveredLink>
                                    <HoveredLink href="/aisearch">AI Based Search</HoveredLink>
                                </div>
                            </MenuItem>
                            <Link href="/blog">
                                <MenuItem setActive={setActive} active={active} item="Blog" />
                            </Link>

                            <Link href="/aboutus">
                                <MenuItem setActive={setActive} active={active} item="About Us" />
                            </Link>
                            <Link href="/contactus">
                                <MenuItem setActive={setActive} active={active} item="Contact Us" />
                            </Link>
                        </div>
                    </Menu>
                </div>
                <div className="flex-1  hidden md:flex justify-center md:justify-end items-center">
                    {/* Empty div for centering */}
                </div>
            {/*</div>*/}
        </header>
    );
}

export default Navbar;