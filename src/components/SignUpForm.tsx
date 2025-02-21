import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SignUpFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignUpForm({ isOpen, onClose }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
        setEmail('');
      }, 2000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative text-center">
          <h2 className="text-2xl font-bold text-[#142933] mb-4">Thank You!</h2>
          <p className="text-gray-600">We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-[#142933] mb-6">Sign-up to learn more about LucidBots.org</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#23C0D8] focus:border-[#23C0D8]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#23C0D8] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4FCDE0] transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Sign Up To Learn More'}
          </button>
        </form>
      </div>
    </div>
  );
} 