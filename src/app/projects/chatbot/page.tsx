'use client'

import { useEffect, useState } from 'react'
import Response from "@/app/projects/chatbot/Response";

export default function ChatbotPage() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [displayedResult, setDisplayedResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setDisplayedResult('');
        try {
            const response = await Response(inputValue); // Pass inputValue to Response function
            setResult(response);
        } catch (error) {
            console.error("Error fetching response:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClear = () => {
        setInputValue('');
        setResult(null);
        setDisplayedResult('');
    };

    useEffect(() => {
        if (result) {
            console.log("Starting to display result:", result);
            let index = 0;
            let currentDisplayedResult = ''; // Use a local variable to store the current displayed result
            const interval = setInterval(() => {
                currentDisplayedResult += result[index];
                setDisplayedResult(currentDisplayedResult);
                console.log("Updating displayedResult:", currentDisplayedResult);
                index++;
                if (index === result.length) {
                    clearInterval(interval);
                }
            }, 50); // Adjust the speed by changing the interval time (50ms here)
            return () => clearInterval(interval);
        }
    }, [result]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-12 relative">
            <h1 className="text-5xl font-bold mb-2 text-center">Let's build a story</h1>

            <form onSubmit={handleSubmit}>
                <input
                    className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black"
                    type="text"
                    placeholder="Start your story..."
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit" className="bg-emerald-600 w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black">
                    Submit
                </button>
                <button type="button" onClick={handleClear} className="bg-emerald-600 w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black">
                    Clear
                </button>
            </form>

            {isLoading && (
                <div className="flex items-center justify-center mt-4">
                    <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
                    <span className="ml-2">Loading...</span>
                </div>
            )}

            {!isLoading && result && (
                <div className="chat-response p-4 rounded text-white mt-4 bg-blue-400 shadow-md">
                <p>{displayedResult}</p>
                </div>
            )}

            <style jsx>{`
                .loader {
                    border-top-color: transparent;
                    border-width: 4px;
                }
            `}</style>
        </main>
    );
}