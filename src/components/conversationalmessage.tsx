import React from 'react';
// import '../css/ConversationalCommerce.css'; // Import CSS module if using CSS modules
import { FlipWords } from "@/components/ui/flip-words";
import { Typewriterelement } from "@/components/typewriter";

const ConversationalCommerce = () => {
    const words = ["Powerful", "Conversational","Responsive", "Amazing"]
    const navigateToChatbotPage = () => {
      window.location.href = '/chatbot';
    };
    const navigateToContactus = () => {
      window.location.href = '/contactus';
    };
    return (
      <div className="flex flex-col my-4">
        <div>
        <Typewriterelement/>
        <div className="text-md sm:text-2xl md:text-2xl lg:text:3xl xl:text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} color="text-blue-900" className="text-md sm:text-2xl md:text-2xl lg:text:3xl xl:text-4xl mx-auto font-bold"/> <br />
        chatbots with Blueberry AI
        </div>
        <div className="flex flex-row text-lg mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <button className="px-4 py-2 mt-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200" onClick={navigateToChatbotPage}>Try Chatbot</button>
        <button className="px-4 py-2 mt-2 ml-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"onClick={navigateToContactus}>Schedule a Demo</button>
        </div>
        </div>
      </div>
    );
  };
  
  export default ConversationalCommerce;

  