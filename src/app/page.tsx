"use client";
import Head from './head';
import ConversationalCommerce from '@/components/conversationalmessage';
import {Chatbothome} from "@/components/chatbothomeui";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import StaticDemo from "@/components/staticdemo";
import StaticDemo2 from "@/components/staticdemo2";
import Customtypewriter from "@/components/customtypewriter";
import {WobbleBlogCards} from "@/components/blogcards2"


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
        className="relative flex flex-col gap-4 items-center justify-center">
            <main className="min-h-screen antialiased bg-grid-grey/[0.02] z-10">
                <div className="flex flex-col justify-center items-center mt-5 min-h-[40rem]">
                    {/* <div className="flex flex-col justify-center items-center space-y-4 px-2 mt-20">  */}
                            <Chatbothome/>
                            <ConversationalCommerce/>
                    {/* </div> */}
                </div>
                <div className="flex lg:flex-row flex-col">
                <div className="flex flex-col lg:mt-60">
                <Customtypewriter text={"Improve Customer Satisfaction"} className={"text-blue-900 dark:text-blue-900 text-xl sm:text-2xl lg:text-3xl"}/>
                <Customtypewriter text={"Engage your customers better"} className={"text-pink-800 dark:text-blue-500 text-xl sm:text-2xl lg:text-3xl"}/>
                <Customtypewriter text={"Reduce your Customer Support Cost"} className={"text-green-900 dark:text-blue-500 text-xl sm:text-2xl lg:text-3xl"}/>
                </div>
                <StaticDemo/>
                
                </div>
                <div className="flex lg:flex-row flex-col">  
                    <StaticDemo2/>
                    <div className="flex flex-col lg:mt-60 lg:order-last order-first">
                    <Customtypewriter text={"Real time information"} className={"text-blue-1000 dark:text-blue-500 text-xl sm:text-2xl lg:text-3xl"}/>
                    <Customtypewriter text={"Frequently asked questions"} className={"text-pink-900 dark:text-blue-500 text-xl sm:text-2xl lg:text-3xl"}/>
                    <Customtypewriter text={"Professional and Prompt Responses   "} className={"text-green-800 dark:text-blue-500 text-xl sm:text-2xl lg:text-3xl"}/>
                    </div>
                </div>

                <div className=" mt-2">
                <WobbleBlogCards/> 
                </div> 
            </main>
            </motion.div>
            </AuroraBackground>
            <Footer/>
        </>
    );
}