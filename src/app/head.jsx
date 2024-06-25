import React from 'react';

export default function Head() {
    return (
      <>
        <title>Blueberry AI</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Blueberry AI is a cutting-edge artificial intelligence platform that transforms the way you work and live." />
        <link rel="canonical" href="https://www.aiblueberry.co/" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Blueberry AI" />
        <meta property="og:description" content="Blueberry AI is a cutting-edge artificial intelligence platform that transforms the way you work and live." />
        <meta property="og:image" content="https://i.ibb.co/QjV5P3v/Screenshot-2024-06-25-at-3-03-33-PM.png" />
        <meta property="og:url" content="https://www.aiblueberry.co/" />
        <meta property="og:type" content="website" />
      </>
    );
  }