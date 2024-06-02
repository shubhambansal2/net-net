import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Head from './head';

export default function Home() {
  return (
    <>
    <Head/>
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        {/*<FeatureSection/>*/}
    </main>  
    </>
  );
}