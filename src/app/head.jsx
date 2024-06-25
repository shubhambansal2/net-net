import React from 'react';
import {BlueberryMeta} from '@/../public/BlueberryMeta.png';
import { Helmet } from 'react-helmet';

export default function Head() {
    return (
        <Helmet>
            <title>Blueberry AI</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

            {/* Additional meta tags */}
            <meta name="description" content="We help you leverage the power of AI and State of the Art LLMs" />
            <meta name="keywords" content="AI, Blueberry, Artificial Intelligence, Chatbots, Custom AI, Large Language Models" />
            <meta name="author" content="Blueberry AI Team" />

            {/* Open Graph tags for social media sharing */}
            <meta property="og:title" content="Blueberry AI" />
            <meta property="og:description" content="We help you leverage the power of AI and State-of-the-Art LLMs" />
            <meta property="og:image" content={BlueberryMeta} />
            <meta property="og:url" content="https://www.aiblueberry.co/" />
            <meta property="og:type" content="website" />

            {/* Twitter Card tags for social media sharing */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Blueberry AI" />
            <meta name="twitter:description" content="Blueberry AI is a powerful AI tool for all your needs." />
            <meta name="twitter:image" content={BlueberryMeta} />
        </Helmet>
    );
}