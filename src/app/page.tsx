"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Head from './head';
import ConversationalCommerce from '@/components/conversationalmessage';
import {BentoGridDemo} from "@/components/blogcards";
import {Chatbothome} from "@/components/chatbothomeui";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>  
            <Head/>
            <AuroraBackground>
            <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
            <main className="min-h-screen antialiased bg-grid-grey/[0.02] z-10">
            <div className="flex flex-col justify-center items-center mt-5 min-h-[40rem]">
                    {/* <div className="flex flex-col justify-center items-center space-y-4 px-2 mt-20">  */}
                            <Chatbothome/>
                            <ConversationalCommerce/>
                    {/* </div> */}
                </div>
                <div className="mt-2"> {/* Add this div with a small top margin */}
                <BentoGridDemo />
                </div>
            </main>
            </motion.div>
            </AuroraBackground>
            <Footer/>
        </>
    );
}


{/* <motion.div
initial={{ opacity: 0.0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{
  delay: 0.3,
  duration: 0.8,
  ease: "easeInOut",
    }} 
className=" flex flex-col gap-4 items-center justify-center px-4">*/}
{/* </motion.div> */}