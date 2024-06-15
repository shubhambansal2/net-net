"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Typewriterelement() {
  const words = [
    {
      text: "Harness",
      className: "text-4xl"
    },
    {
      text: "the power of",
      className: "text-4xl"
    },
    {
      text: "Large Language",
      className: "text-blue-700 dark:text-blue-500 text-4xl"
    },
    {
      text: "Models",
      className: "text-blue-700 dark:text-blue-500 text-4xl"
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-base">
        Power your business with the latest AI technology
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

