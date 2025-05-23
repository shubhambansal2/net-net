"use client";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {cn} from "@/utils/cn";
import {
  setInputChatbotName,
  setInputIndustry,
  setInputOrganisationName,
  setInputRole,
  setInputWebsiteURL,
} from "@/store/slices/chatbotSlice";
import '@/components/chatbot/chat.css';

export function Custombotform() {
  const dispatch = useDispatch();

  // State for form inputs
  const [organisationName, setOrganisationName] = useState('');
  const [chatbotName, setChatbotName] = useState('');
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');

  // State for optional website URL
  const [isWebsiteEnabled, setIsWebsiteEnabled] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if(organisationName.length === 0 && chatbotName.length === 0 && industry.length === 0 && role.length === 0 && websiteUrl.length === 0) {
      dispatch(setInputOrganisationName(organisationName));
      dispatch(setInputChatbotName(chatbotName));
      dispatch(setInputIndustry(industry));
      dispatch(setInputRole(role));
      dispatch(setInputWebsiteURL(websiteUrl));
    }
  }, [organisationName, chatbotName, industry, role, websiteUrl]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    // Dispatch values to Redux store
    dispatch(setInputOrganisationName(organisationName));
    dispatch(setInputChatbotName(chatbotName));
    dispatch(setInputIndustry(industry));
    dispatch(setInputRole(role));
    dispatch(setInputWebsiteURL(websiteUrl));
  };

  const handleToggleWebsite = () => {
    setIsWebsiteEnabled(!isWebsiteEnabled);
  };

  const handleWebsiteInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWebsiteUrl(value);
    // Show warning if there is input
    setShowWarning(!!value);
  };

  return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 justify-between">
          Create your own chatbot with Blueberry AI
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Provide some basic information and you are good to go!
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="companyname">Organisation Name</Label>
              <Input
                  id="companyname"
                  placeholder="Blueberry AI"
                  type="text"
                  value={organisationName}
                  onChange={(e) => setOrganisationName(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="botname">Your ChatBot&apos;s Name</Label>
              <Input
                  id="botname"
                  placeholder="Brix"
                  type="text"
                  value={chatbotName}
                  onChange={(e) => setChatbotName(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="industry">Industry</Label>
            <Input
                id="industry"
                placeholder="E-Commerce"
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="role">Primary Role of Chatbot</Label>
            <Input
                id="role"
                placeholder="Customer Support"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
          </LabelInputContainer>
          <div className="flex items-center mb-4">
            <label
                htmlFor="toggleWebsite"
                className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Add Website URL (Optional) &#20;
            </label>
            <input
                id="toggleWebsite"
                type="checkbox"
                checked={isWebsiteEnabled}
                onChange={handleToggleWebsite}
            />
          </div>
          {isWebsiteEnabled && (
              <LabelInputContainer className="mb-4">
                <Label htmlFor="url"></Label>
                <Input
                    id="url"
                    placeholder="www.aiblueberry.co"
                    type="url"
                    value={websiteUrl}
                    onChange={handleWebsiteInputChange}
                />
              </LabelInputContainer>
          )}
          {showWarning && (
              <p className="text-yellow-800 text-sm mt-2 font-bold">
                Add a valid website, we will read all the content and make it available for your chatbot to refer
              </p>
          )}
          <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
          >
            Create Chatbot  &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
  );
}

const BottomGradient = () => {
  return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
  );
};

const LabelInputContainer = ({
                               children,
                               className,
                             }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default Custombotform;