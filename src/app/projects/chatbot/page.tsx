'use client'

import React, {useEffect, useRef, useState} from 'react'
import Response from "@/app/projects/chatbot/Response";
import Head from '@/app/head';
import data from '@/../public/chatbot.json'
import Chat from '@/components/chatbot/chat'
import RootLayout from '@/app/layout';

// Generate a new session_id on page load
let sessionId = 'A' + Math.floor(Math.random() * 1000000);
console.log(sessionId)
export default function ChatbotPage() {
 
    return (
        <>  
            <Chat/>
        </>
    );
}

    // const [inputValue, setInputValue] = useState('');
    // const [result, setResult] = useState<string | null>(null);
    // const [displayedResult, setDisplayedResult] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    // // const [history, setHistory] = useState<{ question: string, answer: string }[]>([]);
    // const [conversation, setConversation] = useState<{ question: string, answer: string | null }[]>([]);
    // const lastQuestionRef = useRef<HTMLDivElement>(null);
    // const chatContainerRef = useRef<HTMLDivElement>(null);
    // const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    // const [roles, setRoles] = useState<string[]>([]);
    //
    //
    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    //     setDisplayedResult('');
    //     try {
    //         const response = await Response(inputValue,sessionId, selectedIndustry, roles[0]); // Pass inputValue to Response function
    //         setResult(response);
    //         // setHistory(prevHistory => [...prevHistory, { question: inputValue, answer: response }]);
    //         setConversation(prevConversation => [...prevConversation, { question: inputValue, answer: response }]);
    //     } catch (error) {
    //         console.error("Error fetching response:", error);
    //     } finally {
    //         setIsLoading(false);
    //         setInputValue('');
    //     }
    // };
    //
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(event.target.value);
    // };
    //
    // // const handleClear = () => {
    // //     setInputValue('');
    // //     setResult(null);
    // //     setDisplayedResult('');
    // //     // setIsLoading(false);
    // // };
    //
    // useEffect(() => {
    //     if (result) {
    //         // console.log("Starting to display result:", result);
    //         let index = 0;
    //         let currentDisplayedResult = ''; // Use a local variable to store the current displayed result
    //         const interval = setInterval(() => {
    //             currentDisplayedResult += result[index];
    //             setDisplayedResult(currentDisplayedResult);
    //             // console.log("Updating displayedResult:", currentDisplayedResult);
    //             index++;
    //             if (index === result.length) {
    //                 clearInterval(interval);
    //             }
    //         }, 50); // Adjust the speed by changing the interval time (50ms here)
    //         return () => clearInterval(interval);
    //     }
    // }, [result]);
    //
    // useEffect(() => {
    //     if (chatContainerRef.current) {
    //         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    //     }
    // }, [conversation]);
    //
    // const handleIndustryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const industry = event.target.value;
    //     setSelectedIndustry(industry);
    //     setRoles(industry ? data.chatbots[industry].role : []);
    // };
  {/*<Head/>*/}
            {/*<main className="flex flex-col items-center justify-center p-12 relative">*/}
            {/*    <div className="bg-white p-6 rounded-lg shadow-lg w-full mt-12 space-x-16 flex  text-center justify-center">*/}
            {/*        <div>*/}
            {/*            <label htmlFor="industry">Industry: </label>*/}
            {/*            <select id="industry" value={selectedIndustry} onChange={handleIndustryChange}>*/}
            {/*                <option value="">--Select Industry--</option>*/}
            {/*                {Object.keys(data.chatbots).map((industry) => (*/}
            {/*                    <option key={industry} value={industry} className="text-center">{industry}</option>*/}
            {/*                ))}*/}
            {/*            </select>*/}
            {/*        </div>*/}

            {/*        <div>*/}
            {/*            <label htmlFor="roles">Role: </label>*/}
            {/*            <select id="roles" className="">*/}
            {/*                <option value="">--Select Role--</option>*/}
            {/*                {roles.map((role) => (*/}
            {/*                    <option key={role} value={role} className="text-center">{role}</option>*/}
            {/*                ))}*/}
            {/*            </select>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div ref={chatContainerRef} className="chat-history mt-4 w-full h-96 overflow-y-scroll">*/}
            {/*        {conversation.map((item, index) => (*/}
            {/*            <div key={index} className="flex flex-col items-center mb-2">*/}
            {/*                <div className="question p-4 rounded mb-4 shadow-md self-end">*/}
            {/*                    {item.question}*/}
            {/*                </div>*/}
            {/*                {item.answer && (*/}
            {/*                    <div className="answer p-4 rounded mb-4  shadow-md self-start">*/}
            {/*                        {item.answer}*/}
            {/*                    </div>*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}


            {/*    <form onSubmit={handleSubmit}>*/}
            {/*        <input*/}
            {/*            className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black"*/}
            {/*            type="text"*/}
            {/*            placeholder="Type here..."*/}
            {/*            value={inputValue}*/}
            {/*            onChange={handleChange}*/}
            {/*        />*/}
            {/*        <button type="submit" className="bg-emerald-600 w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black">*/}
            {/*            Submit*/}
            {/*        </button>*/}
            {/*        /!* <button type="button" onClick={handleClear} className="bg-emerald-600 w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black">*/}
            {/*        Clear*/}
            {/*    </button> *!/*/}
            {/*    </form>*/}
            {/*    <h1 className="text-5xl font-bold mb-2 text-center">Ask me Anything</h1>*/}
            {/*    {isLoading && (*/}
            {/*        <div className="flex items-center justify-center mt-4">*/}
            {/*            <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>*/}
            {/*            <span className="ml-2">Loading...</span>*/}
            {/*        </div>*/}
            {/*    )}*/}

            {/*    /!*{!isLoading && result && (*!/*/}
            {/*    /!*    <div className="chat-response p-4 rounded text-white mt-4 bg-blue-400 shadow-md">*!/*/}
            {/*    /!*    <p>{displayedResult}</p>*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*)}*!/*/}




            {/*    <style jsx>{`*/}
            {/*        .loader {*/}
            {/*            border-top-color: transparent;*/}
            {/*            border-width: 4px;*/}
            {/*        }*/}
            {/*        .question {*/}
            {/*            align-self: flex-end;*/}
            {/*        }*/}
            {/*        .answer {*/}
            {/*            align-self: flex-start;*/}
            {/*        }*/}
            {/*    `}</style>*/}
            {/*</main>*/}