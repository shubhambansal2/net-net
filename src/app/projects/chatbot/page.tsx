'use client'

import { useEffect, useRef, useState } from 'react'
import Response from "@/app/projects/chatbot/Response";

export default function ChatbotPage() {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmittedValue(inputValue);
        setIsLoading(true);
        try {
            const result = await Response(inputValue); // Pass inputValue to Response function
            setResult(result);
        } catch (error) {
            console.error("Error fetching response:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-12 relative">
            <h2 className="text-2xl mb-4 text-center">Let try</h2>
            <h1 className="text-5xl font-bold mb-2 text-center">Chatbot</h1>

            <form onSubmit={handleSubmit}>
                <input
                    className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black"
                    type="text"
                    placeholder="Enter text to analyze sentiment"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button className="bg-emerald-600 w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black">
                    Submit
                </button>
            </form>

            {submittedValue && (
                <div className="bg-blue-200 p-4 rounded text-black mt-4">
                    {/*<p><strong>Your Input:</strong> {submittedValue}</p>*/}
                    {result ? <p><strong>Sentiment Analysis:</strong> {result}</p> : <p>Loading...</p>}
                </div>
            )}
        </main>
    );
}
