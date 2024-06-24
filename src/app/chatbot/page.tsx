'use client'

import React from 'react'
import Chat from '@/components/chatbot/chat'
import {useSearchParams} from 'next/navigation';
import {Provider} from "react-redux";
import {store} from "@/store";


export default function ChatbotPage() {

    // @ts-ignore
    let industryParam = useSearchParams().get('industry') ;
    if(!industryParam) {
        industryParam = "default";
    }

    return (
        <>
            <Provider store={store}>
                <Chat industry = {industryParam}/>
            </Provider>
        </>
    );
}
