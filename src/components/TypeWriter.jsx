import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react"

const Typewriter = ({ text, speed, onTypingComplete }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex];

        // 改行コードを検出し、改行を追加
        if (text[currentIndex] === '\n') {
          currentText += '<br />';
        }

        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(timer);
        if (onTypingComplete) {
          onTypingComplete();
        }
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, speed, onTypingComplete]);

  return <Box m={"10px"} textAlign={"left"} dangerouslySetInnerHTML={{ __html: displayText }} />;
};

export default Typewriter;
