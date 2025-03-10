'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isListening, setIsListening] = useState(false);
  const [buttonText, setButtonText] = useState('start');

  useEffect(() => {
    if (isListening) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setButtonText('listening...');
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        console.log(event);
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        if (transcript.includes('jarvis')) {
          console.log('Wake word detected!');
        }
      };

      recognition.onerror = (event: SpeechRecognitionError) => {
        console.error('Speech recognition error:', event.error);
      };

      recognition.start();

      return () => {
        recognition.stop();
        setButtonText('start');
      };
    }
  }, [isListening]);

  return (
    <div className="flex justify-center items-center h-screen space-x-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsListening(!isListening)}>{buttonText}
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        stop
      </button>
    </div>
  );
}
