import React, { useState, useEffect, useRef } from 'react';
import Response from "@/app/chatbot/Response";
import Image from "next/image";
import blueberrylogo from "../../../public/blueberryLogo.png";
import IconLogo from '@/../public/logo3.svg';
import TypewriterEffect from './typewriter';
import Custombotform from "@/components/custombotform";

// Generate a new session_id on page load
let sessionId = 'A' + Math.floor(Math.random() * 1000000);
console.log(sessionId)

interface ChatbotData {
    role: string[];
    query?: string[]; // Make query optional since Fintech doesn't have it
}

interface Data {
    chatbots: {
        [key: string]: ChatbotData; // Index signature allows any string as a key
    };
}

const Temp = () => {
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversation, setConversation] = useState<{ question: string, answer: string | null, isTyping?: boolean }[]>([]);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    const [roles, setRoles] = useState<string[]>([]);
    const [selectedRole, setSelectedRole] = useState<string>('');
    const [showCards, setShowCards] = useState(true);
    const [isSubmittingFromCard, setIsSubmittingFromCard] = useState(false);
    const [data, setData] = useState<Data>({ chatbots: {} });
    const [rag, setRag] = useState<boolean>(false); // RAG status
    const [isFormVisible, setIsFormVisible] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/chatbots');
                const jsonData = await response.json();
                const formattedData = { chatbots: {} };

                jsonData.forEach((item: any) => {
                    const industry = Object.keys(item)[1]; // Skip _id field
                    // @ts-ignore
                    formattedData.chatbots[industry] = {
                        role: item[industry].role,
                        query: item[industry].query
                    };
                });

                setData(formattedData);
                setShowCards(true);
                console.log(formattedData);
            } catch (error) {
                console.error('Error fetching chatbot data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleIndustryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const industry = event.target.value;
        setSelectedIndustry(industry);
        if (industry && data.chatbots.hasOwnProperty(industry)) {
            // @ts-ignore
            setRoles(data.chatbots[industry]?.role);
        } else {
            setRoles([]);
        }
        setConversation([]);
        setShowCards(true);
        sessionId = 'A' + Math.floor(Math.random() * 1000000);
        console.log("New session ID for changing industry:", sessionId);
    };

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRole(event.target.value);
    };

    const handleRagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRag(event.target.value === 'true');
        sessionId = 'A' + Math.floor(Math.random() * 1000000);
        console.log("New session ID for changing RAG Status:", sessionId);
    };

    const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        if (!inputValue) return;

        setConversation(prevConversation => [
            ...prevConversation,
            { question: inputValue, answer: null, isTyping: true }
        ]);
        setIsLoading(true);
        setShowCards(false);
        setInputValue('');

        try {
            const response = await Response(inputValue, sessionId, selectedIndustry, selectedRole, rag);
            setConversation(prevConversation =>
                prevConversation.map((item, index) =>
                    index === prevConversation.length - 1
                        ? { ...item, answer: response, isTyping: false }
                        : item
                )
            );
        } catch (error) {
            console.error("Error fetching response:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {

        if (chatContainerRef.current) {
            console.log("Scroll called");
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }

    }, [conversation, isLoading]);

    useEffect(() => {
        if (inputValue && isSubmittingFromCard) {
            handleSubmit().then(r => {});
            setInputValue('');
            setIsSubmittingFromCard(false);
        }
    }, [isSubmittingFromCard, inputValue, handleSubmit]);

    const handleCardClick: React.MouseEventHandler<HTMLDivElement> = async (event) => {
        const query = (event.target as HTMLDivElement).textContent || '';
        setInputValue(query);
        setIsSubmittingFromCard(true);
        await handleSubmit();
    };

    // const scrollToBottom = () => {
    //     if (chatContainerRef.current) {
    //         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    //     }
    // };

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      };
    
      // Scroll to bottom whenever conversation changes
      useEffect(() => {
        scrollToBottom();
      }, [conversation]);

    return (
        <div className="flex h-screen">
            <Custombotform/>
            {/* Main Content (div2) */}
            <div className="flex flex-col w-4/5 px-36">
            
                {/* Chat with LLM */}
                <div ref={chatContainerRef} className={`flex-1 overflow-y-auto ${showCards ? 'flex items-center justify-center' : 'items-start mt-40 chat'}`}>
                    {conversation.map((item, index) => (
                    <div key={index} className="flex flex-col items-center mb-2 w-full">
                    <div className="question p-4 py-2 mb-4 shadow-md self-end rounded-full bg-gray-100">
                        {item.question}
                    </div>
                        <div className="flex items-start w-full py-1">
                             <div className="w-1/12 flex-shrink-0">
                                {/* Replace with your actual logo image */}
                                <Image src={IconLogo} alt="" />
                                </div>
                                <div className={`answer rounded ${item.isTyping ? 'typewriter' : ' '}`}>
                                {item.isTyping ? (
                                    <span className="typing">...</span>
                                ) : (
                                    <TypewriterEffect text={item.answer || ''} typingSpeed={15} scrollToBottom={scrollToBottom} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {showCards && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center">
                    {(selectedIndustry && data.chatbots[selectedIndustry]?.query ? data.chatbots[selectedIndustry]?.query : data.chatbots['default']?.query)?.map((query, index) => (
                        <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
                        onClick={handleCardClick}
                        >
                        {query}
                        </div>
                    ))}
                    </div>
                )}
            </div>
        
                {/* Query Input */}
                <div className="sticky bottom-2 bg-white p-2 ml-20 border border-gray-300 rounded-full w-10/12 shadow-sm justify-center items-center">
                    <form onSubmit={handleSubmit} className="w-full flex">
                        <div className="w-full py-2 px-4">
                            <input
                                type="text"
                                placeholder="Message Blueberry AI"
                                className="outline-none w-full text-gray-700"
                                value={inputValue}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="self-end flex-1">
                            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a7 7 0 100 14 7 7 0 000-14zm-.293 10.707a1 1 0 111.414-1.414l3-3a1 1 0 00-1.414-1.414l-3 3-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Temp;


{/* <div className="w-1/5 flex items-center justify-center flex-col">
                <div className="space-y-8 flex flex-col py-10">
                    <label htmlFor="industry">Industry: </label>
                    <select id="industry" value={selectedIndustry} onChange={handleIndustryChange}>
                        <option value="">--Select Industry--</option>
                        {Object.keys(data.chatbots).map((industry) => (
                            <option key={industry} value={industry} className="text-center">{industry}</option>
                        ))}
                    </select>

                    <label htmlFor="roles">Role: </label>
                    <select id="roles" onChange={handleRoleChange}>
                        <option value="">--Select Role--</option>
                        {roles.map((role) => (
                            <option key={role} value={role} className="text-center">{role}</option>
                        ))}
                    </select>
                </div>

                <div className=" bg-amber-200 py-10">
                    <label htmlFor="rag">RAG Status: </label>
                    <select id="rag" onChange={handleRagChange}>
                        <option value="">--Select RAG Status--</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
            </div> */}