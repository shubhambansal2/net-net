import React from 'react';
import '../css/ConversationalCommerce.css'; // Import CSS module if using CSS modules
import womenimage from '@/../public/customercare.jpg';
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipWords } from "@/components/ui/flip-words";
import { Typewriterelement } from "@/components/typewriter";

const ConversationalCommerce = () => {
    const words = ["Powerful", "Conversational","Responsive"]
    return (
      <div className="flex justify-center items-center px-4 my-4">
        <div className="content">
          <Typewriterelement />
          {/* <h1 className="title">Harness the power of LLMs</h1>
          <h2 className="subtitle"></h2> */}
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={words} /> <br />
            chatbots with Blueberry AI
          </div>
          <button className="px-4 py-2 mt-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Try Chatbot</button>
        </div>
        {/* <div className="imageContainer">
        <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem>
            <Image src={womenimage} alt="Empower conversations"  className="h-42 w-42 md:h-50 md:w-50 ml-10 mt-3" priority={true} />
          </CardItem>
        </CardBody>
      </CardContainer>
        </div> */}
          <div className={"iconContainer"}>
            {/* Add icons here */}
          </div>
        </div>
    );
  };
  
  export default ConversationalCommerce;

  