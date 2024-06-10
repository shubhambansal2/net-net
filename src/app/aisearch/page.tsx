'use client'

import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export default function Aboutus() {
    const [isButtonVisible, setButtonVisible] = useState(false);
    
    const words = [
        {
          text: "Coming Pretty Soon",
          className: "text-blue-500 dark:text-blue-500 text-4xl"
        }
    ]    
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-10">
      <TypewriterEffectSmooth words={words} />
      </div> 
      </div>
    );
  }
