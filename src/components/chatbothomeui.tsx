"use client";
import {PlaceholdersAndVanishInput} from "@/components/ui/placeholders-and-vanish-input";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {setInputValue} from '@/store/slices/inputValueSlice';
import {useDispatch} from "react-redux";


export function Chatbothome() {

    const router = useRouter();
    // const [inputValue, setInputValue] = useState('');
    const [input, setInput] = useState('');
    // const { setInputValue } = useInputValue();
    const dispatch = useDispatch();
    const placeholders = [
        "What is the capital of France?",
        "How to make a cup of coffee?",
        "Where is my order?",
        "I want to return this product",
    ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setInput(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setInputValue(input));
        router.push('/chatbot');
    };
    return (
        <div className=" flex flex-col justify-center  items-center px-4 pb-0  mt-2 mx-auto">
            <div className="flex flex-row ml-2 mt-0">
                <h2 className="mb-10 sm:mb-20 text-xl ml-2 sm:ml-1 text-center sm:text-5xl dark:text-white text-black">
                    Ask
                </h2>
                <h2 className="mb-10 sm:mb-20 text-xl  ml-4 text-center sm:text-5xl dark:text-white text-blue-900">
                    BlueberryAI
                </h2>
                <h2 className="mb-10 sm:mb-20 text-xl ml-4 text-center sm:text-5xl dark:text-white text-black">
                    Anything New
                </h2>
            </div>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}