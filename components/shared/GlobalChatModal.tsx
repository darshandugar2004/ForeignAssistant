
import React, { useEffect } from 'react';
import { Chat } from '@google/genai';
import ChatInterface from './ChatInterface';
import { ChatComponentProps } from '../../types'; // ChatComponentProps might be directly used by ChatInterface

interface GlobalChatModalProps extends ChatComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlobalChatModal: React.FC<GlobalChatModalProps> = ({
  isOpen,
  onClose,
  chatInstance,
  setChatInstance,
  systemInstruction,
  modelName,
  placeholderText,
  initialBotMessage,
}) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm p-4 z-50" // Removed flex items-center justify-center
      role="dialog"
      aria-modal="true"
      aria-labelledby="global-chat-title"
      onClick={onClose} // Close on overlay click
    >
      <div 
        className="bg-transparent w-full max-w-lg h-[calc(100vh-80px)] max-h-[700px] flex flex-col rounded-xl shadow-2xl overflow-hidden mx-auto my-auto" // Added mx-auto my-auto for centering if p-4 removed flex effect
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside modal content
      >
        {/* Optional: Add a close button if needed, or rely on Escape key / overlay click */}
        {/* <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">&times;</button> */}
        
        {/* The ChatInterface will fill this container */}
        <ChatInterface
          chatInstance={chatInstance}
          setChatInstance={setChatInstance} // Pass down, ChatInterface might need to re-init on its own internal critical errors
          systemInstruction={systemInstruction}
          modelName={modelName}
          placeholderText={placeholderText}
          initialBotMessage={initialBotMessage}
        />
      </div>
    </div>
  );
};

export default GlobalChatModal;
