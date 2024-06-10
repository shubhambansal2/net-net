'use client'

import React, {useEffect, useRef, useState} from 'react'
import Response from "@/app/chatbot/Response";
import Head from '@/app/head';
import data from '@/../public/chatbot.json'
import Chat from '@/components/chatbot/chat'
import RootLayout from '@/app/layout';


export default function ChatbotPage() {
    return (
        <>

            <Chat/>
        </>
    );
}
