'use client'

import React from 'react'
import Chat from '@/components/chatbot/chat'
import {useSearchParams} from 'next/navigation';
import {Provider} from "react-redux";
import {store} from "@/store";


export default function ChatbotPage() {
    // const industryParam = useSearchParams().get('industry') ;
    return (
        <>
            {/* <Provider store={store}> */}
                <Chat/>
            {/* </Provider> */}
        </>
    );
}
