"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useRouter } from "next/router";


export function Chatbothome() {
  
  const placeholders = [
    "What is the capital of France?",
    "How to make a cup of coffee?",
    "Where is my order?",
    "I want to return this product",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className=" flex flex-col justify-center  items-center px-4 pb-0 py-20 mt-2">
      <div className="flex flex-row ml-2">
      <h2 className="mb-10 sm:mb-20 text-xl ml-2 text-center sm:text-5xl dark:text-white text-black">
          Ask
      </h2>
      <h2 className="mb-10 sm:mb-20 text-xl  ml-4 text-center sm:text-5xl dark:text-white text-blue-900">
          BlueberryAI
      </h2>
      <h2 className="mb-10 sm:mb-20 text-xl ml-4 text-center sm:text-5xl dark:text-white text-black">
          Anything
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