"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
 
export const TextGenerateEffect = ({
  words,
  className,
  delay = 0,
}: {
  words: string;
  className?: string;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    const timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }, delay);
    
    return () => clearTimeout(timer);
  }, [scope, animate, delay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 ml-10 md:ml-2 lg:ml-20 lg:mr-20 mr-2">
        <div className="dark:text-white text-black text-md lg:text-2xl md:text-lg leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};