"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Head from './head';
import BlogSection from "@/components/Blogs";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <>
            <Head />
            <main className="min-h-screen antialiased bg-grid-white/[0.02]">
                <HeroSection />
                <HeroSection />
                <HeroSection />
                <HeroSection />
            </main>
            <Footer/>
        </>
    );
}