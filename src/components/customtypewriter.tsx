import React, { useState, useEffect } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

interface TypewriterProps {
    text: string;
    className: string;
}

export default function Customtypewriter(words: TypewriterProps) {
    
    return (
      <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={[words]}/>
      </div> 
    );
  }