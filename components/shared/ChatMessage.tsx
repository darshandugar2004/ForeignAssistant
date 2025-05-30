
import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types';
import SpeakerIcon from '../icons/SpeakerIcon';

interface ChatMessageProps {
  message: ChatMessageType;
  onSpeak?: (text: string) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onSpeak }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl shadow-md ${
          isUser
            ? 'bg-[#F7A49E] text-[#232220] rounded-br-none'
            : 'bg-[#FBEFED] text-[#4e4c4f] rounded-bl-none border border-[#F7A49E]'
        }`}
      >
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        ) : (
          <p
            className="text-sm whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: message.text }}
          />
        )}
        {message.sender === 'bot' && onSpeak && (
          <button 
            onClick={() => onSpeak(message.text)} 
            className="mt-2 text-xs text-[#F7A49E] hover:text-[#4e4c4f] flex items-center"
            aria-label="Speak this message"
          >
            <SpeakerIcon size={16} className="mr-1" /> Listen
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;