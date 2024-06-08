"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Head from './head';
import ConversationalCommerce from '@/components/conversationalmessage';
import {BentoGridDemo} from "@/components/blogcards";
import {Chatbothome} from "@/components/chatbothomeui";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <>  
            <Head/>
            <main className="min-h-screen antialiased bg-grid-white/[0.02]">
            <div className="flex flex-col justify-center items-center min-h-[40rem]">
                    <div className="flex flex-col justify-center items-center space-y-0 px-2 mt-20"> {/* Changed to space-y-4 for vertical spacing */}
                            <Chatbothome/>
                            <ConversationalCommerce/>
                    </div>
                </div>
                <div className="mt-2"> {/* Add this div with a small top margin */}
                <BentoGridDemo />
                </div>
            </main>
            <Footer/>
        </>
    );
}