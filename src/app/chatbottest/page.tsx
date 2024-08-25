'use client'
import React from 'react';
import ChatbotIntegration from '@/components/embedded_chat';

const App = () => {
  return (
    <div className="mt-80">

      <h1>Welcome to Chatbot test</h1>
      {/* Pass the chatbot ID as a prop */}
      <ChatbotIntegration chatbotId="11" userId="7" />
    </div>
  );
};

export default App;