import React, { useState } from 'react';
import { Bot, Brain, Users, ArrowRight, Lightbulb, Building2, GraduationCap, Heart } from 'lucide-react';
import LucidBotsLogo from './assets/LucidBots_Colored_Logo_Full.png';
import EducationImage from './assets/education.jpg';
import InnovationImage from './assets/innovation2.jpg';
import ImpactImage from './assets/andrewteach.png';
import AndrewImage from './assets/andrewq.jpg';
import PDQuoteImage from './assets/pdquote.jpg';
import { SignUpForm } from './components/SignUpForm';
import { PartnerForm } from './components/PartnerForm';
import { StoryMessage } from './components/StoryMessage';
import HeroImage from './assets/innovation.jpg';

function App() {
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  const [isStoryMessageOpen, setIsStoryMessageOpen] = useState(false);

  // Add state for form and success message
  const [formData, setFormData] = useState({
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openSignUpForm = () => setIsSignUpFormOpen(true);
  const openPartnerForm = () => setIsPartnerFormOpen(true);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setShowSuccess(true);
      setFormData({ email: '' }); // Reset form
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={LucidBotsLogo} 
              alt="LucidBots Logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Extending Human Reach
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold italic bg-gradient-to-r from-[#23C0D8] to-[#4FCDE0] text-transparent bg-clip-text mb-8 leading-relaxed">
              Changing the World, Bot by Bot
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-[#142933] mb-8">
              Ready to transform "what if..." dreams into "what is" realities through robotics?
            </h3>
            
            {/* Inline signup form */}
            <form onSubmit={handleSignUp} className="space-y-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#23C0D8] focus:border-[#23C0D8]"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#23C0D8] text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-[#4FCDE0] transition-colors inline-flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? 'Signing up...' : 'Sign Up To Learn More'}
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </form>
          </div>

          {/* Right side image */}
          <div className="hidden md:block relative h-[600px]">
            <img 
              src={HeroImage}
              alt="Robotics Innovation"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Success Message Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative text-center">
            <h2 className="text-2xl font-bold text-[#142933] mb-4">Thank You!</h2>
            <p className="text-gray-600">We'll be in touch soon.</p>
          </div>
        </div>
      )}

      {/* Services Section */}
      <div className="bg-[#142933] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="mt-4 text-xl text-[#D3F2F7]">Real-world robotics meets social impact</p>
            <div className="w-32 h-1 bg-[#23C0D8] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={InnovationImage}
                  alt="Robotics Education at LucidBots"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Accessible Robotics Education</h3>
                <p className="text-gray-600 mb-4">Making robotics education accessible to everyone through hands-on learning and real-world applications.</p>
                <button 
                  onClick={openPartnerForm}
                  className="text-[#23C0D8] font-semibold hover:text-[#4FCDE0]"
                >
                  Learn More →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={EducationImage}
                  alt="Education at LucidBots"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Training Programs</h3>
                <p className="text-gray-600 mb-4">Hands-on experience for Veterans and individuals with disabilities, creating pathways to tech careers.</p>
                <button 
                  onClick={openPartnerForm}
                  className="text-[#23C0D8] font-semibold hover:text-[#4FCDE0]"
                >
                  Join Program →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={ImpactImage}
                  alt="Impact at LucidBots"
                  className="w-full h-80 object-cover object-[center_75%]"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Partnerships</h3>
                <p className="text-gray-600 mb-4">Collaborating with educational institutions and nonprofits to expand our reach and impact.</p>
                <button 
                  onClick={openPartnerForm}
                  className="text-[#23C0D8] font-semibold hover:text-[#4FCDE0]"
                >
                  Partner With Us →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Vision Section */}
      <div className="bg-[#D3F2F7] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#142933] mb-6">The Vision</h2>
            <div className="w-32 h-1 bg-[#23C0D8] mx-auto"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl bg-[#142933]">
              <img 
                src={AndrewImage}
                alt="LucidBots Leadership"
                className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-contain"
              />
            </div>
            {/* <div className="text-center mt-8">
              <button 
                onClick={() => setIsStoryMessageOpen(true)}
                className="bg-[#23C0D8] text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-[#4FCDE0] transition-colors inline-flex items-center mb-8"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Building the Future Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Building the Future</h2>
            <div className="w-32 h-1 bg-[#23C0D8] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-[#D3F2F7] p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#142933]">Innovative Solutions</h3>
                <p className="text-gray-700">Creating cutting-edge robotics technology that solves real-world challenges.</p>
              </div>
              <div className="bg-[#D3F2F7] p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#142933]">Social Impact</h3>
                <p className="text-gray-700">Empowering communities through education and workforce development.</p>
              </div>
              <div className="bg-[#D3F2F7] p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#142933]">Sustainable Growth</h3>
                <p className="text-gray-700">Building a foundation for long-term success and community benefit.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-[#142933] p-8">
              <img 
                src={PDQuoteImage}
                alt="Peter Drucker Quote"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#D3F2F7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#142933] mb-4">Ready to Make an Impact?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join our mission to make robotics education and careers accessible to everyone.
            </p>
            <button 
              onClick={openSignUpForm}
              className="bg-[#23C0D8] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#4FCDE0] transition-colors inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <SignUpForm isOpen={isSignUpFormOpen} onClose={() => setIsSignUpFormOpen(false)} />
      <PartnerForm isOpen={isPartnerFormOpen} onClose={() => setIsPartnerFormOpen(false)} />
      <StoryMessage isOpen={isStoryMessageOpen} onClose={() => setIsStoryMessageOpen(false)} />
    </div>
  );
}

export default App;