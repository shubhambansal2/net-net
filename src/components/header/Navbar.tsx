"use client";
// Navbar.js

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import blueberryLogo from '@/../public/blueberryLogo.png';
import Image from "next/image";
import '@/components/header/style.css';

function Navbar() {
    const [active, setActive] = useState<string | null>(null);
    return (
        <header className="fixed top-0 inset-x-0 bg-white shadow-md z-50">
            <div className="w-full max-w-7xl mx-auto flex row-auto py-4">
                <div className="flex-1">
                    <Link href="/">
                        <Image src={blueberryLogo} alt="Blueberry AI" className="h-10 md:h-12 w-auto ml-10 mt-3" priority={true} />
                    </Link>
                </div>
                <div className="flex-grow flex mx-auto justify-center space-x-16 font-bold">
                    <Menu setActive={setActive}>
                        <div className="flex space-x-8 px-8 py-2">
                            <MenuItem setActive={setActive} active={active} item="Industry">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/industry/finance">Finance</HoveredLink>
                                    <HoveredLink href="/industry/healthcare">Healthcare</HoveredLink>
                                    <HoveredLink href="/industry/technology">Technology</HoveredLink>
                                </div>
                            </MenuItem>
                            <MenuItem setActive={setActive} active={active} item="Solutions">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/projects/chatbot">Chatbots</HoveredLink>
                                    <HoveredLink href="/solutions/ai-search">AI Based Search</HoveredLink>
                                    <HoveredLink href="/solutions/data-analytics">Data Analytics</HoveredLink>
                                </div>
                            </MenuItem>
                            <MenuItem setActive={setActive} active={active} item="Resources">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/resources/blog">Blog</HoveredLink>
                                    <HoveredLink href="/resources/case-studies">Case Studies</HoveredLink>
                                    <HoveredLink href="/resources/webinars">Webinars</HoveredLink>
                                </div>
                            </MenuItem>
                            <Link href="/about-us">
                                <MenuItem setActive={setActive} active={active} item="About Us" />
                            </Link>
                            <Link href="/book-demo">
                                <MenuItem setActive={setActive} active={active} item="Book a Demo" />
                            </Link>
                        </div>
                    </Menu>
                </div>
                <div className="flex-1">
                    {/* Empty div for centering */}
                </div>
            </div>
        </header>
    );
}

export default Navbar;