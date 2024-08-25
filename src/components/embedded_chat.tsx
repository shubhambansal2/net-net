import React, { useEffect } from 'react';

interface ChatbotIntegrationProps {
  chatbotId: string;
  userId: string;
}

const ChatbotIntegration: React.FC<ChatbotIntegrationProps> = ({ chatbotId, userId }) => {
  useEffect(() => {
    // Create a script tag
    const script = document.createElement('script');
    
    // Set the script's src to the URL of your chatbot script
    script.src = `https://mighty-dusk-63104-f38317483204.herokuapp.com/api/users/chatbot_script/${chatbotId}/`;
    
    // Set the data-chatbot-id and data-user-id attributes
    script.setAttribute('data-chatbot-id', chatbotId);
    script.setAttribute('data-user-id', userId);

    // Append the script tag to the body
    document.body.appendChild(script);

    // Cleanup by removing the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, [chatbotId, userId]);

  return (
    <div>
      {/* Any other UI elements for your component can go here */}
      <p>Chatbot {chatbotId} will be loaded below.</p>
      <p>User {userId} will be loaded</p>
    </div>
  );
};

export default ChatbotIntegration;