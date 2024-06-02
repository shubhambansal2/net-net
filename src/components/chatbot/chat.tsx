import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
// import data from "../../../public/chatbot.json";
import Response from "@/app/projects/chatbot/Response";
import '@/components/chatbot/chat.css'

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

const Chat = () => {

    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [displayedResult, setDisplayedResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversation, setConversation] = useState<{ question: string, answer: string | null }[]>([]);
    const lastQuestionRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    const [roles, setRoles] = useState<string[]>([]);
    const [selectedRole, setSelectedRole] = useState<string>('');
    const [showCards, setShowCards] = useState(true);
    const [isSubmittingFromCard, setIsSubmittingFromCard] = useState(false);
    const [data, setData] = useState<Data>({ chatbots: {} });


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
        // setRoles(industry ? data.chatbots[industry].role : []);
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

    const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
        console.log("Input vlaue: ", inputValue)
        // setIsSubmittingFromCard(false);
        if (event) event.preventDefault();
        if (!inputValue) return;
        setIsLoading(true);
        setDisplayedResult('');
        setShowCards(false);

        try {
            const response = await Response(inputValue,sessionId, selectedIndustry, selectedRole); // Pass inputValue to Response function
            setResult(response);
            // setHistory(prevHistory => [...prevHistory, { question: inputValue, answer: response }]);
            setConversation(prevConversation => [...prevConversation, { question: inputValue, answer: response }]);
        } catch (error) {
            console.error("Error fetching response:", error);
        } finally {
            setIsLoading(false);
            setInputValue('');
            setIsSubmittingFromCard(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [conversation, isLoading]);

    useEffect(() => {
        if (inputValue && isSubmittingFromCard) {
            handleSubmit();
            setInputValue('');
            setIsSubmittingFromCard(false); // Reset after submission
        }
    }, [isSubmittingFromCard, inputValue]);


    const handleCardClick: MouseEventHandler<HTMLDivElement> = async (event) => {
        const query = (event.target as HTMLDivElement).textContent || '';
        setInputValue(query);
        setIsSubmittingFromCard(true);  // Signal to handleSubmit in useEffect

        // Immediately submit since input is already updated
        await handleSubmit();
    };

    return (
        <>
            <div className="chatbot-page flex md:flex-row grid-cols-2 justify-center" >
                {/*sidebar*/}
                <div className="sidebar px-5 space-y-8 text-center  bg-gray-100 py-10">
                    {/*<div className="bg-white p-6 rounded-lg shadow-lg w-full mt-12 space-x-16 flex  text-center justify-center">*!/*/}
                    <div>
                        <label htmlFor="industry">Industry: </label>
                        <select id="industry" value={selectedIndustry} onChange={handleIndustryChange}>
                            <option value="">--Select Industry--</option>
                            {Object.keys(data.chatbots).map((industry) => (
                                <option key={industry} value={industry} className="text-center">{industry}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="roles">Role: </label>
                        <select id="roles" onChange={handleRoleChange}>
                            <option value="">--Select Role--</option>
                            {roles.map((role) => (
                                <option key={role} value={role} className="text-center">{role}</option>
                            ))}
                        </select>
                    </div>

                    {/*</div>*/}
                </div>

                {/*chat box*/}
                <div className="main-content w-full md:w-1/5 text-center  flex-1 border-2 border-black bg-blue-50 px-10">
                    <div ref={chatContainerRef} className="chat-history mt-4 w-full h-96 overflow-y-scroll">
                        {conversation.map((item, index) => (
                            <div key={index} className="flex flex-col items-center mb-2">
                                <div className="question p-4 rounded mb-4 shadow-md self-end bg-white">
                                    {item.question}
                                </div>
                                {item.answer && (
                                    <div className="answer p-4 rounded mb-4  shadow-md self-start bg-white">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Cards */}
                        {showCards && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(selectedIndustry && data.chatbots[selectedIndustry]?.query) ? (
                                    data.chatbots[selectedIndustry]?.query?.map((query, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
                                            onClick={handleCardClick}
                                        >
                                            {query}
                                        </div>
                                    ))
                                ) : (
                                    data.chatbots['default']?.query?.map((query, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
                                            onClick={handleCardClick}
                                        >
                                            {query}
                                        </div>
                                    ))
                                )}

                            </div>)
                        }


                        {isLoading && (
                            <div className="flex items-center justify-center mt-4">
                                <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
                                <span className="ml-2">Loading...</span>
                            </div>
                        )}
                    </div>


                    <form onSubmit={handleSubmit} className="py-2 space-x-4">
                        <input
                            className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black"
                            type="text"
                            placeholder="Type here..."
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <button type="submit" className="bg-emerald-600 max-w-xs p-2 border border-gray-300 rounded mb-4 text-black">
                            Submit
                        </button>
                    </form>
                    {/*<h1 className="text-5xl font-bold mb-2 text-center">Ask me Anything</h1>*/}
                </div>
            </div>
        </>
    );
};

export default Chat;