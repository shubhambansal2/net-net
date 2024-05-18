"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import blueberryLogo from '@/../public/blueberryLogo.png';
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div className={cn("fixed w-full top-0 inset-x-0 mx-auto z-50 flex", className)}>
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image src={blueberryLogo} alt="Blueberry AI" className="h-10 md:h-12 w-auto ml-10 mt-3" />
                    </Link>
                </div>
                <div className="flex-grow flex justify-center"> {/* Changed to flex-grow and justify-center */}
                    <Menu setActive={setActive}>
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
                            <MenuItem setActive={setActive} active={active} item="Contact Us" />
                        </Link>
                    </Menu>
                </div>
            </div>
        </>
    );
}

export default Navbar;