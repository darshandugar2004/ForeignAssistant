
import React from 'react';

interface LoadingSpinnerProps {
  size?: string; // e.g., 'w-8 h-8'
  color?: string; // e.g., 'border-blue-500'
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'w-12 h-12', 
  color = 'border-[#F7A49E]', // New card color
  message
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div 
        className={`animate-spin rounded-full ${size} border-t-2 border-b-2 ${color}`}
      ></div>
      {message && <p className="mt-2 text-sm text-[#F7A49E]">{message}</p>} 
    </div>
  );
};

export default LoadingSpinner;