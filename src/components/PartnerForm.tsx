import React, { useState } from 'react';
import { X } from 'lucide-react';
import { sendPartnershipToSlack } from '../utils/slackWebhooks';

interface PartnerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerForm({ isOpen, onClose }: PartnerFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendPartnershipToSlack(formData);
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
        setFormData({ fullName: '', organizationName: '', email: '' }); // Reset form
      }, 2000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
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
        
        <h2 className="text-2xl font-bold text-[#142933] mb-6">Looking to Partner with LucidBots.org?</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              placeholder="Your name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#23C0D8] focus:border-[#23C0D8]"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name
            </label>
            <input
              type="text"
              id="organizationName"
              required
              placeholder="Organization name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#23C0D8] focus:border-[#23C0D8]"
              value={formData.organizationName}
              onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#23C0D8] focus:border-[#23C0D8]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
} 