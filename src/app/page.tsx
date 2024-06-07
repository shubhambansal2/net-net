"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Head from './head';
import BlogSection from "@/components/Blogs";
import ConversationalCommerce from '@/components/conversationalmessage';
import { FlipWords } from "@/components/ui/flip-words";
import {BentoGridDemo} from "@/components/blogcards";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>  
       
            <Head/>
            <main className="min-h-screen antialiased bg-grid-white/[0.02]">
                <ConversationalCommerce/>
                <BentoGridDemo />
            </main>
            <Footer/>
        </>
    );
}


