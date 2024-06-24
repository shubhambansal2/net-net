"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Typewriterelement() {
  const words = [
    {
      text: "Harness the power of",
      className: "lg:text-4xl mx-auto"
    },
    {
      text: "Large Language Models",
      className: "text-blue-900 dark:text-blue-900 lg:text-4xl mx-auto"
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-4 min-w-96">
      <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-10">
        Power your business with the latest AI technology
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

