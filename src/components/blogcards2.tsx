"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { WobbleCard } from "@/components/ui/wobble-card";
 
export function WobbleBlogCards() {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto mr-2">
      <a href="/blog/rag">
        <WobbleCard
        containerClassName="ml-2 col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[50px] lg:min-h-[300px]"
        className="ml-2"
        >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Why Retrieval Augmented Generation could save you tons of cost, Read More
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Provide a more human-like experience to your customers with RAG Enabled Chatbots.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={50}
          height={50}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-3xl"
        />
       </WobbleCard>
      </a>
      <a href="/chatbot">
       <WobbleCard containerClassName="ml-2 col-span-1 lg:col-span-1 h-full bg-red-900 min-h-[50px] lg:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Experience the blazing-fast cutting-edge state of the art Blueberry AI Chatbots
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Try out custom chatbots, modify them on the go with a few clicks.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={60}
          height={60}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
       </WobbleCard>
       </a>
      <a href="/contactus">
      <WobbleCard containerClassName="ml-2 col-span-1 lg:col-span-1 h-full bg-blue-900 min-h-[50px] lg:min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Integrate an amazing chatbot with your website, Reach out to us
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Schedule a Demo with Us
        </p>
        <Image
          src="/linear.webp"
          width={60}
          height={60}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      </a>
      
    </div>
  );
}
