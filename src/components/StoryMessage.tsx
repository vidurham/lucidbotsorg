import React from 'react';
import { X } from 'lucide-react';

interface StoryMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoryMessage({ isOpen, onClose }: StoryMessageProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <p className="text-xl text-[#142933] mb-6 italic">
            "Write a short story for the people, I told my family this one the first day you told me so make it important! I can change the quote on the picture easily so just let me know ;)"
          </p>
          <button
            onClick={onClose}
            className="bg-[#23C0D8] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4FCDE0] transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
} 