"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Head from './head';
import BlogSection from "@/components/Blogs";
import ConversationalCommerce from '@/components/conversationalmessage';
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";


import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Head/>
            <main className="min-h-screen antialiased bg-grid-white/[0.02]">
                <ConversationalCommerce/>
                <HeroSection />
            </main>
            <Footer/>
        </>
    );
}


