'use client'

import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export default function Aboutus() {
    const [isButtonVisible, setButtonVisible] = useState(false);
    const words = [
        {
          text: "Welcome to Blueberry AI",
          className: "text-blue-500 dark:text-blue-500 text-3xl"
        }
    ]

    const words1 = `We harness the transformative power of Large Language Models (LLMs) to empower organizations with cutting-edge AI technologies. At Blueberry AI, we believe in the potential of artificial intelligence to revolutionize the way businesses operate, innovate, and grow.`;
    const words2 = `Our mission is to provide state-of-the-art AI solutions that drive efficiency, enhance decision-making, and unlock new opportunities for organizations across various industries. By leveraging the latest advancements in LLMs, we deliver intelligent, scalable, and customized AI tools that meet the unique needs of our clients.`;
    const words3 = `With a team of dedicated experts in AI and machine learning, we are committed to pushing the boundaries of technology and delivering exceptional value. Our solutions are designed to integrate seamlessly with existing systems, ensuring a smooth transition and immediate impact. Whether it’s improving customer engagement, optimizing operations, or driving data-driven strategies, Blueberry AI is your trusted partner in the AI-driven future.`;

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setButtonVisible(true);
    //     }, 31000);

    //     return () => clearTimeout(timer);
    // }, [31000]);

    
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center lg:mt-40 mt-80">
        <TypewriterEffectSmooth words={words} />
        <div className="ml-2 mr-2 md:ml-20 md:mr-20  md:text-xl lg:text:xl xl:text-xl text-neutral-600 dark:text-neutral-400 font-bold mt-10">
        {words1}
        <br></br>
        <br></br>
        {words2}
        <br></br>
        <br></br>
        {words3}
        </div>
      {/* <TypewriterEffectSmooth words={words} />
      <TextGenerateEffect words={words1} delay = {3000}/>
      <TextGenerateEffect words={words2} delay = {10000}/>
      <TextGenerateEffect words={words3} delay = {18000} /> */}
      <button className="px-4 py-2  rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] mt-10 transition duration-200">
                        Contact Us
                    </button>
      </div> 
      </div>
    );
  }
