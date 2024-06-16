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
        className="relative flex flex-col gap-4 items-center justify-center px-4">
            <main className="min-h-screen antialiased bg-grid-grey/[0.02] z-10">
            <div className="flex flex-col justify-center items-center mt-5 min-h-[40rem]">
                    {/* <div className="flex flex-col justify-center items-center space-y-4 px-2 mt-20">  */}
                            <Chatbothome/>
                            <ConversationalCommerce/>
                    {/* </div> */}
                </div>
                {/* <div className="relative flex flex-row mt-2">                     
                <StaticDemo/>
                <Customtypewriter text={"Improve Customer Satisfaction (CSAT) by atleast 30%"} className={"text-blue-800 dark:text-blue-500 text-4xl"}/>
                </div>
                <div className="relative flex flex-row mt-2">         
                    <div className="relative flex flex-row">
                    <Customtypewriter text={"Reduce your Customer Support Cost Significantly"} className={"text-blue-800 dark:text-blue-500 text-4xl"}/>
                     <StaticDemo2/>
                    </div>
                </div>
                <div className="mt-2">
                <WobbleBlogCards/> */}
                {/* </div> */}
                
            </main>
            </motion.div>
            </AuroraBackground>
            <Footer/>
        </>
    );
}