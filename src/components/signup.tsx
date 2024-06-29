"use client";
import React, {useState} from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {cn} from "@/utils/cn";
// import {Modal} from "@nextui-org/modal";
//@ts-ignore
import Modal from 'react-modal';
import {IconBrandFiverr, IconBrandLinkedin} from "@tabler/icons-react";
import '@/../src/app/contactus/style.css';

export function SignupFormDemo() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            companyname: {
                value: string
            };
            email: {
                value: string
            };
            number: {
                value: string
            };
            companysize: {
                value: string
            };
            requirement: {
                value: string
            };
        };
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "772bf8f0-38da-4967-8e88-975974b10f2c",
                name: target.companyname.value,
                email: target.email.value,
                phoneNumber: target.number.value,
                companySize: target.companysize.value,
                requirement: target.requirement.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setModalIsOpen(true);
            e.currentTarget.reset();
        }
    }

    return (
        <div
            className="contact-form max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className=" font-bold text-xl text-neutral-800 dark:text-neutral-200 ">
                Welcome to Blueberry AI
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Leave your details below and we will get back to you ASAP or reach out to us at aiblueberry.co@gmail.com
            </p>

            <form className="my-8" onSubmit={handleSubmit}>

                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="companyname">Company Name</Label>
                        <Input id="companyname" placeholder="Blueberry AI" type="text" name="companyname"/>
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" placeholder="aiblueberry.co@gmail.com" type="text"/>
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="number">Contact No.</Label>
                    <Input id="number" name="number" placeholder="+91 9999999999" type="number"/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="companysize">Size of your Company</Label>
                    <Input id="companysize" name="companysize" placeholder="10-50" type="text10"/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="requirement">Any specific requirements</Label>
                    <Input
                        id="requirement"
                        name="requirement"
                        placeholder="Need a customer support chatbot for my E-commerce."
                        type="requirement"
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Schedule a Demo &rarr;
                    <BottomGradient/>
                </button>
                <div
                    className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"/>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Success Modal"
                    className={modalIsOpen ? 'fade-in' : 'fade-out'}
                    style={{
                        overlay: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        },
                        content: {
                            position: 'relative',
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '20px',
                        },
                    }}
                >
                    <h2>We have received your request and will reach out to you soon.</h2>
                    <button
                        onClick={() => setModalIsOpen(false)}
                        style={{
                            backgroundColor: '#4CAF50', // Green background
                            border: 'none', // No border
                            color: 'white', // White text
                            padding: '6px 32px', // Padding
                            textAlign: 'center', // Center the text
                            textDecoration: 'none', // Remove underline
                            display: 'inline-block', // Make it inline
                            fontSize: '16px', // Increase font size
                            margin: '4px 2px', // Add some margin
                            cursor: 'pointer', // Change cursor on hover
                        }}
                    >
                        Close
                    </button>
                </Modal>
            </form>

            <div className="flex space-x-4">
                <a href="https://www.fiverr.com/aiblueberry" target="_blank" rel="noopener noreferrer"
                   className="relative group/btn flex space-x-2 items-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] justify-center">
                    <IconBrandFiverr className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Fiverr
            </span>
                    <BottomGradient/>
                </a>

                <a href="https://www.linkedin.com/company/neuraledge-ai/" target="_blank" rel="noopener noreferrer"
                   className="relative group/btn flex space-x-2 items-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] justify-center">
                    <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                LinkedIn
            </span>
                    <BottomGradient/>
                </a>
            </div>

        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
            <span
                className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
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
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default SignupFormDemo;  