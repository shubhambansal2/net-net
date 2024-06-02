// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
// import { cn } from "@/utils/cn";
// import Link from "next/link";
// import blueberryLogo from '@/../public/blueberryLogo.png';
// import Image from "next/image";
//
// function Navbar() {
//     const [active, setActive] = useState<string | null>(null);
//     return (
//         <>
//             <div className="fixed w-full top-0 inset-x-0 mx-auto flex row-auto bg-white shadow-md">
//                 <div className="col-end-6 flex-1">
//                     <Link href="/">
//                         <Image src={blueberryLogo} alt="Blueberry AI" className="h-10 md:h-12 w-auto ml-10 mt-3" />
//                     </Link>
//                 </div>
//                 <div className="flex-grow flex mx-auto justify-center space-x-10">
//                     <Menu setActive={setActive}>
//                         <Link href="/">
//                             <MenuItem setActive={setActive} active={active} item="Home" className="hover:text-blue-500 text-lg font-semibold" />
//                         </Link>
//                         <MenuItem setActive={setActive} active={active} item="Services" className="hover:text-blue-500 text-lg font-semibold">
//                             <div className="flex flex-col space-y-4 text-sm">
//                                 <HoveredLink href="/projects/chatbot">Chatbots</HoveredLink>
//                                 <HoveredLink href="/aibasedsearch">AI based search</HoveredLink>
//                             </div>
//                         </MenuItem>
//                         <Link href="/contactus">
//                             <MenuItem setActive={setActive} active={active} item="Contact" className="hover:text-blue-500 text-lg font-semibold" />
//                         </Link>
//                     </Menu>
//                 </div>
//                 <div className="flex-1">
//                     {/* Empty div for centering */}
//                 </div>
//             </div>
//
//         </>
//     );
// }
//
// export default Navbar;