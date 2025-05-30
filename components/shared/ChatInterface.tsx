
import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { ChatMessage as ChatMessageType, ChatComponentProps } from '../../types';
import ChatMessage from './ChatMessage';
import LoadingSpinner from './LoadingSpinner';
import SendIcon from '../icons/SendIcon';
import MicrophoneIcon from '../icons/MicrophoneIcon';
import { createChatSession, sendMessageToChat } from '../../services/geminiService';
import useTextToSpeech from '../../hooks/useTextToSpeech';
import useSpeechRecognition from '../../hooks/useSpeechRecognition';

const ChatInterface: React.FC<ChatComponentProps> = ({
  chatInstance,
  setChatInstance,
  systemInstruction,
  modelName = 'gemini-2.5-flash-preview-04-17',
  placeholderText,
  initialBotMessage,
}) => {
  const [messages, setMessages] = useState<ChatMessageType[]>(() => {
    if (initialBotMessage) {
      return [{ id: 'initial-bot', text: initialBotMessage, sender: 'bot', timestamp: new Date() }];
    }
    return [];
  });
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { speak, isSpeaking: isBotSpeaking, isSupported: ttsSupported } = useTextToSpeech();
  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening, 
    error: sttError, 
    isSupported: sttSupported 
  } = useSpeechRecognition();

  const isInitializedRef = useRef(false);

  useEffect(() => {
    if (chatInstance && !isInitializedRef.current) {
      if (messages.length === 0 && initialBotMessage) {
         setMessages([{ id: 'initial-bot', text: initialBotMessage, sender: 'bot', timestamp: new Date() }]);
      }
      isInitializedRef.current = true; 
    } else if (!chatInstance && !isInitializedRef.current) {
      console.warn("ChatInterface: chatInstance not provided, attempting to create one. This might not be intended for global chat setup.");
      const newChat = createChatSession(systemInstruction, modelName);
      setChatInstance(newChat);
      if (initialBotMessage) {
        setMessages([{ id: 'initial-bot', text: initialBotMessage, sender: 'bot', timestamp: new Date() }]);
      }
      isInitializedRef.current = true;
    }
  }, [chatInstance, systemInstruction, modelName, initialBotMessage, setChatInstance, messages.length]);


  useEffect(() => {
    if (transcript) {
      setUserInput(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim() || !chatInstance || isLoading) return;

    const newUserMessage: ChatMessageType = {
      id: Date.now().toString(),
      text: userInput.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const botResponseText = await sendMessageToChat(chatInstance, newUserMessage.text);
      const newBotMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newBotMessage]);
    } catch (error) {
      console.error("Error in chat:", error);
      let errorMessageText = "Oh dear, Jeenu, I'm having a little trouble connecting. Please try again in a moment.";
      if (error instanceof Error && error.message.includes("API key not valid")) {
        errorMessageText = "It seems there's an issue with the API configuration. Please notify the developer.";
      }
      const errorMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        text: errorMessageText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleVoiceInput = () => {
    if (!sttSupported) {
        alert("Jeenu, it seems voice input isn't supported on your browser. You can still type your messages!");
        return;
    }
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F7A49E] rounded-lg overflow-hidden">
      <div className="p-4 border-b border-[#FBEFED]/50">
        <h2 className="text-lg font-semibold text-[#232220]">Chat with your Assistant</h2>
      </div>
      <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-[#FBEFED] custom-scrollbar">
        {messages.map(msg => (
          <ChatMessage key={msg.id} message={msg} onSpeak={ttsSupported ? speak : undefined} />
        ))}
        {isLoading && <div className="flex justify-center"><LoadingSpinner message="Thinking..." /></div>}
        <div ref={messagesEndRef} />
      </div>
      {sttError && <p className="p-2 text-xs text-center text-red-500">Mic error: {sttError}</p>}
      <div className="p-4 border-t border-[#FBEFED]/50 bg-[#F7A49E]">
        <div className="flex items-center space-x-2">
          {sttSupported && (
            <button
              onClick={handleVoiceInput}
              disabled={isBotSpeaking || isLoading}
              className={`p-2 rounded-full ${isListening ? 'bg-red-500 text-white animate-pulse' : 'text-[#232220] hover:bg-[#FBEFED]/60'} transition-colors`}
              aria-label={isListening ? "Stop listening" : "Start voice input"}
            >
              <MicrophoneIcon size={20} />
            </button>
          )}
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
            placeholder={isListening ? "Listening..." : placeholderText}
            className="flex-grow p-3 border border-[#F7A49E] rounded-lg focus:ring-2 focus:ring-[#F7A49E] focus:border-transparent outline-none transition-shadow text-[#4e4c4f] bg-white placeholder-[#9f8d8d]"
            disabled={isLoading || isListening}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !userInput.trim()}
            className="p-3 bg-[#4e4c4f] text-[#FBEFED] rounded-lg hover:bg-[#232220] disabled:bg-[#9f8d8d] transition-colors flex items-center justify-center"
            aria-label="Send message"
          >
            <SendIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;