'use client';

import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import blogabstractimage1 from '@/../public/blogabstract1.png';
import blogabstractimage2 from '@/../public/blogabstract2.png';
import blogabstractimage5 from '@/../public/blogabstract5.png';
import blogabstractimage6 from '@/../public/blogabstract6.png';
import blogabstractimage7 from '@/../public/blogabstract7.png';
import blogabstractimage8 from '@/../public/blogabstract8.png';
import blogabstractimage9 from '@/../public/blogabstract9.png';
import Image from "next/image";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
 
export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          href = {item.href}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Prompt Engineering - The Art",
    description: "Learn the art of crafting engaging and effective prompts.",
    header: <Image src={blogabstractimage1} alt="Empower conversations" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
     href: "/blog/promptengineering"
  },
  {
    title: "Model Fine Tuning and Conversational AI",
    description: "Fine Tune Models and Build Conversational AI for your business.",
    header: <Image src={blogabstractimage2} alt="Empower conversations" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500"/>,
     href: "/blog/finetuning"
  },
  {
    title: "Retrieval Augmented Generation, RAG models using Vector Database",
    description: "Integrate your context and knowledge into LLMs to make them more powerful.",
    header: <Image src={blogabstractimage5} alt="Empower conversations" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "/blog/rag"
  },
  {
    title: "Integrating Graph Data with LLM",
    description:
      "Navigate the world of graph data and learn how to integrate it with LLMs.",
    header: <Image src={blogabstractimage6} alt="Empower conversations" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
     href: "/blog/graphllm"
  },
  {
    title: "Working with Relational Databases",
    description: "Chatbot integration with relational databases and SQL.",
    header: <Image src={blogabstractimage7} alt="Empower conversations" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
     href: "/blog/rdbmsretrieval"
  },
  {
    title: "Building powerful agents with Langchain",
    description: "Not only info but actions too. Learn how to build powerful agents with Rasa.",
    header: <Image src={blogabstractimage8} alt="Empower conversations" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
     href: "/blog/langchain"
  },
  {
    title: "Power your chatbot with the internet",
    description: "Search the web, get the latest news, and much more with your chatbot.",
    header: <Image src={blogabstractimage9} alt="Empower conversations" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
     href: "/blog/internetsearch"
  },
];