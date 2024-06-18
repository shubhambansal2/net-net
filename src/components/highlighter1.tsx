"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
 
export default function Highlight1() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-3xl lg:text-3xl font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-center "
      >
       Bring Significant improvement in  <br />{" "}
        <Highlight className="text-black dark:text-white">
          Customer Satisfaction Score (CSAT)
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}