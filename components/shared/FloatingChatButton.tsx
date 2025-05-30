
import React from 'react';
import ChatBubbleIcon from '../icons/ChatBubbleIcon';

interface FloatingChatButtonProps {
  onClick: () => void;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-[#F7A49E] text-[#232220] p-4 rounded-full shadow-xl hover:bg-[#e6938c] focus:outline-none focus:ring-2 focus:ring-[#F7A49E] focus:ring-opacity-50 transition-transform duration-150 ease-in-out hover:scale-110 z-40"
      aria-label="Open chat assistant"
    >
      <ChatBubbleIcon size={28} />
    </button>
  );
};

export default FloatingChatButton;