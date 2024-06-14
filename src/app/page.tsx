"use client";
import image1 from '@/../public/homepagephone1.png';
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
import StaticDemo from "@/components/staticdemo";
import Customtypewriter from "@/components/customtypewriter";


export default function Home() {
    const image_1 = <Image src={image1} alt="Empower conversations"  className="h-42 w-42 md:h-50 md:w-50 ml-10 mt-3" priority={true} />;
    const image_2 = <Image src={image1} alt="Empower conversations"  className="h-42 w-42 md:h-50 md:w-50 ml-10 mt-3" priority={true} />;
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
                <div className="relative flex flex-row mt-2">                     
                <StaticDemo/>
                {/* <p className="text-black-500 text-4xl">Improve Customer Satisfaction</p> */}
                <Customtypewriter text={"Improve Customer Satisfaction"} className={"text-blue-500 dark:text-blue-500 text-4xl"}/>
                </div>
                <div className="relative flex flex-row mt-2">         
                    <div className="relative flex flex-col">
                    {/* <p className="text-black-500 text-4xl">Reduce your Customer Support Cost Significantly</p> */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <Customtypewriter text={"Reduce your Customer Support Cost Significantly"} className={"text-black-500 dark:text-blue-500 text-4xl"}/>
                    <Customtypewriter text={"Let AI do the Job"} className={"text-black-500 dark:text-blue-500 text-4xl"}/>
                    </div>            
                     <StaticDemo/>
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