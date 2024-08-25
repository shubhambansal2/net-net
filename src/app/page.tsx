"use client";
import Head from './head';
import ConversationalCommerce from '@/components/conversationalmessage';
import {Chatbothome} from "@/components/chatbothomeui";
import Footer from "@/components/Footer";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {motion} from "framer-motion";
import StaticDemo from "@/components/staticdemo";
import StaticDemo2 from "@/components/staticdemo2";
import {WobbleBlogCards} from "@/components/blogcards2"
import IntegrationLogos from '@/components/logo-marquee';
import Highlight1 from '@/components/highlighter1';
import Highlight2 from '@/components/highlighter2';
import {Provider} from "react-redux";
import {store} from "@/store";
import ChatbotEmbed from '@/components/embedded_chat'
import Image from 'next/image';
import HomePageElement1 from '@/../public/HomePageElement1.gif';
import '../css/gifstyles.css';


export default function Home() {
    return (
        <>
            <div className="homepage-theme">
                <Provider store={store}>
                    <Head/>
                    {/* <AuroraBackground className="homepage-theme"> */}
                    <motion.div
                        initial={{opacity: 0.0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            delay: 0.2,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center">
                        <main className="min-h-screen antialiased bg-grid-grey/[0.02] z-10">
                           
                            <div className="flex flex-col justify-center items-center mt-20 sm:mt-5  min-h-[40rem]">
                            <div className="flex flex-row">
                                <div className="flex flex-col space-y-4  mt-20 mb-40">
                                    <Chatbothome/>
                                    <ConversationalCommerce/>
                                </div>
                                
                                {/* <div>
                                <Image src={HomePageElement1} alt="Fast and Prompt chatbots"/>
                                </div> */}
                            </div>    
                                <div className=" flex flex-col items-center justify-center mb-40">
                                    <div
                                        className="text-md sm:text-lg md:text-lg lg:text:xl xl:text-xl text-neutral-600 dark:text-neutral-400">
                                        Built with Cutting Edge AI Technologies
                                        <br></br>
                                        <br></br>
                                    </div>
                                    <IntegrationLogos/>
                                </div>
                            </div>
                            <div className="flex lg:flex-row flex-col justify-center items-center mt-5">
                                <Highlight1/>
                                <StaticDemo/>
                            </div>
                            <div className="flex lg:flex-row flex-col md:justify-center md:items-center">
                                <StaticDemo2/>
                                <div className="flex flex-col lg:mt-30 lg:order-last order-first">
                                    <Highlight2/>
                                </div>
                            </div>
                            <div className="mt-2 mr-10 ml-10">
                                <WobbleBlogCards/>
                            </div>
                        </main>
                    </motion.div>
                    {/* </AuroraBackground> */}
                    <Footer/>
                </Provider>
            </div>
        </>
    );
}