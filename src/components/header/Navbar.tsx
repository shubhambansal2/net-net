"use client";
// Navbar.js

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import blueberryLogo from '@/../public/logo2.svg';
import Image from "next/image";
import '@/components/header/style.css';

const industries = [
    {name: "Finance", query: "Finance"},
    {name: "Healthcare", query: "Healthcare"},
    {name: "Technology", query: "Technology"}
];

const solutions = [
    {name: "Chatbots", path: "/chatbot"},
    {name: "AI Based Search", path: "/aisearch"}
];

function Navbar() {
    const [active, setActive] = useState<string | null>('');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed flex flex-col top-0 inset-x-0 lg:flex-row bg-white z-50 py-1 h-16 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <Link href="/">
                    <Image src={blueberryLogo} alt="Blueberry AI" style={{ width: '240px' }} className="" priority={true} />
                </Link>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`flex-grow ${menuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:justify-center px-4`}>
                <Menu setActive={setActive}>
                    <div className="flex flex-col md:flex-row md:space-x-16 md:space-y-0">
                        <div className="relative group">
                            <MenuItem setActive={setActive} active={active} item="Industry" />
                            <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-4 z-10 space-y-4 text-sm">
                                {industries.map(industry => (
                                    <HoveredLink key={industry.query} href={{pathname: "/chatbot", query: {industry: industry.query}}}>
                                        {industry.name}
                                    </HoveredLink>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <MenuItem setActive={setActive} active={active} item="Solutions" />
                            <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-4 z-10 space-y-4 text-sm">
                                {solutions.map(solution => (
                                    <HoveredLink key={solution.path} href={solution.path}>
                                        {solution.name}
                                    </HoveredLink>
                                ))}
                            </div>
                        </div>
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
            <div className="flex-1 hidden md:flex justify-center md:justify-end items-center">
                {/* Empty div for centering */}
            </div>
        </header>
    );
}

export default Navbar;
