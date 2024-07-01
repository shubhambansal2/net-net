import React, {useEffect, useRef, useState} from 'react';
import ChatBackend from "@/app/chatbot/ChatBackend";
import Image from "next/image";
import IconLogo from '@/../public/logo3.svg';
import TypewriterEffect from './typewriter';
import Custombotform from "@/components/custombotform";
import {Button} from "@/components/ui/moving-border";
import {MultiStepLoader as Loader} from "@/components/ui/multi-step-loader";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import UploadEmbeddings from "@/app/chatbot/UploadEmbeddings";
import './chat.css';

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

interface ChatProps {
    industry: string | null;
}

const loadingStates = [
    {
        text: "Fetching Required Information for Retrieval",
    },
    {
        text: "Preparing the Chatbot for Interaction",
    },
    {
        text: "Loading Chatbot Interface",
    },
];

const Temp: React.FC<ChatProps> = ({industry}) => {
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const [conversation, setConversation] = useState<{
        question: string,
        answer: string | null,
        isTyping?: boolean
    }[]>([]);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    const [roles, setRoles] = useState<string[]>([]);
    const [selectedRole, setSelectedRole] = useState<string>('Customer Support');
    const [showCards, setShowCards] = useState(true);
    const [isSubmittingFromCard, setIsSubmittingFromCard] = useState(false);
    const [data, setData] = useState<Data>({chatbots: {}});
    const [rag, setRag] = useState<boolean>(false); // RAG status
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [isStateUpdated, setIsStateUpdated] = useState(false); // New state to track state updates
    // const {inputValue} = useInputValue();
    const [titleAndRole, setTitleAndRole] = useState('');
    const [websiteURL, setWebsiteURL] = useState('');
    const inputValue = useSelector((state: RootState) => state.inputValue.value);
    const inputIndustry = useSelector((state: RootState) => state.chatbot.industry);
    const inputSelectedRole = useSelector((state: RootState) => state.chatbot.selectedRole);
    const inputChatbotName = useSelector((state: RootState) => state.chatbot.chatbotName);
    const inputOrganisationName = useSelector((state: RootState) => state.chatbot.organisationName);
    const [manualChatbot, setManualChatbot] = useState(false);
    const [uploadingEmbeddings, setUploadEmbeddings] = useState(false);
    const [websiteURLState, setWebsiteURLState] = useState(false);
    // const location = useLocation();
    const inputWebsiteURL = useSelector((state: RootState) => state.chatbot.websiteURL);
    // const [inputWebsiteURL, setInputWebsiteURL] = useState(useSelector((state: RootState) => state.chatbot.websiteURL));

    useEffect(() => {
        // Reset all states here
        // window.location.href = '/chatbot';
        setInputText('');
        // setIsLoading(false);
        setConversation([]);
        setSelectedRole('Customer Support');
        setShowCards(true);
        setIsSubmittingFromCard(false);
        setManualChatbot(false);
        setUploadEmbeddings(false);
        setWebsiteURLState(false);
        setIsFormOpen(false);
        setIsFormVisible(true);
        setIsStateUpdated(false);
        setTitleAndRole('Welcome to Blueberry AI Chatbot');
        // setIsFormSubmitted(false);
        setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 767);
        // setInputWebsiteURL(null);
        // If you have any cleanup to do, return a function from here
        return () => {
            // Cleanup code here
            setTitleAndRole('Welcome to Blueberry AI Chatbot');
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    useEffect(() => {
        if (inputValue) {
            console.log("EXECUTING INPUT VALUE...");
            setInputText(inputValue);
            setIsStateUpdated(true); // Indicate that the state update is triggered
        }
    }, [inputValue]);

    useEffect(() => {
        if (isStateUpdated) {
            handleSubmit(); // Call handleSubmit once state is updated
            setIsStateUpdated(false); // Reset the state update indicator
        }
    }, [isStateUpdated]);


    useEffect(() => {
        console.log("Industry : ", industry);
        // @ts-ignore
        setSelectedIndustry(industry);
        // setSelectedRole('default');
        setConversation([]);
        setShowCards(true);
    }, [industry]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/chatbots');
                const jsonData = await response.json();
                const formattedData = {chatbots: {}};
                console.log("jsonData: ", jsonData);

                jsonData.forEach((item: any) => {
                    const industry = Object.keys(item)[1]; // Skip _id field
                    // @ts-ignore
                    formattedData.chatbots[industry] = {
                        role: item[industry].role,
                        query: item[industry].query
                    };
                });

                setData(formattedData);
                // if(show)
                // setShowCards(true);
                // console.log(formattedData);
            } catch (error) {
                console.error('Error fetching chatbot data:', error);
            } finally {
                // setIsLoading(false);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // const handleIndustryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const industry = event.target.value;
    //     setSelectedIndustry(industry);
    //     if (industry && data.chatbots.hasOwnProperty(industry)) {
    //         // @ts-ignore
    //         setRoles(data.chatbots[industry]?.role);
    //     } else {
    //         setRoles([]);
    //     }
    //     setConversation([]);
    //     setShowCards(true);
    //     sessionId = 'A' + Math.floor(Math.random() * 1000000);
    //     console.log("New session ID for changing industry:", sessionId);
    // };

    // const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelectedRole(event.target.value);
    // };

    // const handleRagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setRag(event.target.value === 'true');
    //     sessionId = 'A' + Math.floor(Math.random() * 1000000);
    //     console.log("New session ID for changing RAG Status:", sessionId);
    // };

    const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();

        if (!inputText && !uploadingEmbeddings) return;
        if (!uploadingEmbeddings) {
            setConversation(prevConversation => [
                ...prevConversation,
                {question: inputText, answer: null, isTyping: true}
            ]);
        }

        // setIsLoading(true);
        setShowCards(false);
        setInputText('');

        try {

            if (uploadingEmbeddings) {
                console.log("Starting with embedding uploads");
                setLoading(true);
                setConversation([]);
                console.log("website url: ", inputWebsiteURL);
                const response = await UploadEmbeddings(inputWebsiteURL);
                console.log("Embedding response: ", response);
                console.log("Completed with embedding uploads");
                // setLoading(false);
                setRag(true);
                setUploadEmbeddings(false);
            } else {
                const response = await ChatBackend(inputText, sessionId, selectedIndustry, selectedRole, inputChatbotName, inputOrganisationName, rag);

                setConversation(prevConversation =>
                    prevConversation.map((item, index) =>
                        index === prevConversation.length - 1
                            ? {...item, answer: response, isTyping: false}
                            : item
                    )
                );
            }

        } catch (error) {
            console.error("Error fetching response:", error);
        } finally {
            // setIsLoading(false);
            setLoading(false);
            toggleForm();
            // setIsFormSubmitted(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [conversation]);

    useEffect(() => {
        if (inputText && isSubmittingFromCard) {
            handleSubmit().then(r => {
            });
            setInputText('');
            setIsSubmittingFromCard(false);
        }
    }, [isSubmittingFromCard, inputText, handleSubmit]);

    // On selecting card, start the chat
    const handleCardClick: React.MouseEventHandler<HTMLDivElement> = async (event) => {
        const query = (event.target as HTMLDivElement).textContent || '';
        setInputText(query);
        setIsSubmittingFromCard(true);
        await handleSubmit();
    };

    // Generate message based on industry and role
    const getMessage = () => {
        console.log("Running getMessage");
        if (industry) {
            setTitleAndRole(`Welcome to Blueberry AI Chatbot specially designed for the ${industry} industry`);
        } else if (inputIndustry && inputSelectedRole && inputChatbotName && inputOrganisationName) {
            setTitleAndRole(`Introducing ${inputChatbotName}, your dedicated virtual assistant designed specifically for the ${inputIndustry} industry. ${inputChatbotName} is specialised for assistance in ${inputSelectedRole} and is here to enhance your experience and streamline your interactions.`);
            // setTitleAndRole(`This chatbot is designed for the ${inputIndustry} industry with the role of ${inputSelectedRole}, named ${inputChatbotName}, for the organisation ${inputOrganisationName}.`);
        } else {
            setTitleAndRole('Welcome to Blueberry AI Chatbot');
        }
    };

    useEffect(() => {
        getMessage();
    }, [industry]);

    // Get Custom title based on chatbot form inputs
    useEffect(() => {
        if (inputIndustry && inputSelectedRole && inputChatbotName && inputOrganisationName) {
            setLoading(true);
            toggleForm();
            setConversation([]);
            setTimeout(() => {
                setLoading(false);
                console.log("Loading set to false");
            }, 5000);
            getMessage();
            setManualChatbot(true);
            console.log("Running Form code...");
            setSelectedIndustry(inputIndustry);
            setSelectedRole(inputSelectedRole);
            // setLoading(false);
        }
    }, [inputIndustry, inputSelectedRole, inputOrganisationName, inputChatbotName]);

    // Website Embeddings upload
    useEffect(() => {
        if (inputWebsiteURL) {
            setUploadEmbeddings(true);
            setWebsiteURLState(true);
            // setLoading(true);
            console.log("Running website hook");
        }
    }, [inputWebsiteURL]);

    useEffect(() => {
        if (websiteURLState) {
            console.log("Reached websiteURL hooks");
            handleSubmit();
            setUploadEmbeddings(false);
            setWebsiteURLState(false);
        }
    }, [websiteURLState]);

    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 767);
        };
        setLoading(false);
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    // const handleFormSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    //     if (event) event.preventDefault();
    //     // setIsFormSubmitted(true);
    // };

    return (
        <div className="flex-col h-screen lg:flex lg:flex-row">
            
                   {isMobile ? (
                    <>   
                        
                        <div className="flex flex-col justify-between mt-20">
                          
                            <button onClick={toggleForm} className="ml-2 mr-2 px-20 py-2 items-center justify-center mb-10 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                            <div className="flex flex-row items-center justify-center">
                            {isFormOpen ? 'Close Form': 'Create your Custom Chatbot'}
                            {isFormOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" /><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" /></svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" /></svg>}
                            </div>
                            </button>
                            <div className="custom-bot-form-button lg:ml-10">
                            {isFormOpen && <Custombotform/>}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="custom-bot-form-button lg:ml-10">
                    <Custombotform/>
                    </div>
                )}
            
            {/* Main Content (div2) */}
            <div className="chatbot-component flex flex-col w-4/5 px-36">
                {<Loader loadingStates={loadingStates} loading={loading} duration={1500} loop={false}/>}
                <div className="title-info my-20 rounded-md bg-gradient-to-r from-blue-300 to-blue-700 text-center text-white font-bold justify-center py-2">
                    <p>
                        {titleAndRole}
                    </p>
                </div>
                {/* Chat with LLM */}
                <div ref={chatContainerRef}
                     className={`flex-1 overflow-y-auto  ${showCards ? 'flex items-center justify-center' : 'items-start chat'}`}>
                    {conversation.map((item, index) => (
                        <div key={index} className="flex flex-col items-center mb-2 w-full">
                            <div className="question p-4 py-2 mb-4 shadow-md self-end rounded-full bg-gray-100">
                                {item.question}
                            </div>
                            <div className="flex items-start w-full py-1">
                                <div className="w-1/12 flex-shrink-0">
                                    {/* Replace with your actual logo image */}
                                    <Image src={IconLogo} alt=""/>
                                </div>
                                <div className={`answer ${item.isTyping ? 'typewriter' : ' '}`}>
                                    {item.isTyping ? (
                                        <span className="typing">...</span>
                                    ) : (
                                        <TypewriterEffect text={item.answer || ''} typingSpeed={15}
                                                          scrollToBottom={scrollToBottom}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {showCards && (
                        <div className="w-full justify-center">
                            {manualChatbot ? (
                                <div className="rounded-md bg-blue-300 text-center text-white font-bold justify-center py-2">
                                    Your Custom Bot is now ready.
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(selectedIndustry && data.chatbots[selectedIndustry]?.query
                                            ? data.chatbots[selectedIndustry]?.query
                                            : data.chatbots['default']?.query
                                    )?.map((query, index) => (
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
                    )}

                </div>
                {/* Query Input */}
                <div
                    className="input-form sticky bottom-2 bg-white p-2 mx-20 border border-gray-300 rounded-full shadow-sm justify-center items-center">
                    <form onSubmit={handleSubmit} className="w-full flex">
                        <div className="self-end flex-1">
                            {/*    Creating equal space*/}
                        </div>
                        <div className="w-full py-2 px-4">
                            <input
                                type="text"
                                placeholder="Message Blueberry AI"
                                className="outline-none w-full text-gray-700"
                                value={inputText}
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
