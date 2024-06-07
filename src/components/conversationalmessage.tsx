import React from 'react';
import '../css/ConversationalCommerce.css'; // Import CSS module if using CSS modules
import womenimage from '@/../public/customercare.jpg';
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipWords } from "@/components/ui/flip-words";

const ConversationalCommerce = () => {
    const words = ["Powerful", "Conversational","Responsive"]
    return (
      <div className="container h-[40rem] flex justify-center items-center px-4">
        <div className="content">
          <h1 className="title">Harness the power of LLMs</h1>
          <h2 className="subtitle"></h2>
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={words} /> <br />
            chatbots with Blueberry AI
          </div>
          <button className="button">Try Chatbot</button>
        </div>
        <div className="imageContainer">
        <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem>
            <Image src={womenimage} alt="Empower conversations"  className="h-42 w-42 md:h-50 md:w-50 ml-10 mt-3" priority={true} />
          </CardItem>
        </CardBody>
      </CardContainer>
        </div>
          <div className={"iconContainer"}>
            {/* Add icons here */}
          </div>
        </div>
    );
  };
  
  export default ConversationalCommerce;

  