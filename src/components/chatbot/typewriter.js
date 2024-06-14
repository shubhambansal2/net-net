import React, { useState, useEffect, useRef } from 'react';


function TypewriterEffect({ text, typingSpeed, scrollToBottom }) {
    const [displayedResult, setDisplayedResult] = useState('');
    const chatRef = useRef(null);
    useEffect(() => {
        let index = 0;
        let currentDisplayedResult = '';
        const interval = setInterval(() => {
            currentDisplayedResult += text[index];
            setDisplayedResult(currentDisplayedResult);
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [text, typingSpeed]);

    useRef(scrollToBottom())
    return <>{displayedResult}</>;
}
export default TypewriterEffect;
