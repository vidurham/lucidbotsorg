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

function App() {
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  const [isStoryMessageOpen, setIsStoryMessageOpen] = useState(false);

  const openSignUpForm = () => setIsSignUpFormOpen(true);
  const openPartnerForm = () => setIsPartnerFormOpen(true);

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

      {/* New Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex justify-center mb-12">
            <img 
              src={LucidBotsLogo} 
              alt="LucidBots Logo" 
              className="h-40 w-auto"
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Keep Extending Human Reach
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic bg-gradient-to-r from-[#23C0D8] to-[#4FCDE0] text-transparent bg-clip-text mb-12 leading-relaxed py-2">
            Changing the World, Bot by Bot
          </h2>
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#142933] mb-12">
              Ready to transform "what if..." dreams into "what is" realities through robotics?
            </h3>
            <button 
              onClick={openSignUpForm}
              className="bg-[#23C0D8] text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-[#4FCDE0] transition-colors inline-flex items-center mb-8"
            >
              Sign Up Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </button>
            <p className="text-lg text-gray-600 mt-12 leading-relaxed max-w-2xl mx-auto font-bold">
              🤔 Wait... you don't want to enhance our built environment and broaden access to inclusive robotics education and meaningful workforce opportunities?
            </p>
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
            <div className="text-center mt-8">
              <button 
                onClick={() => setIsStoryMessageOpen(true)}
                className="bg-[#23C0D8] text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-[#4FCDE0] transition-colors inline-flex items-center mb-8"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </div>
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
                <p className="text-gray-600 mb-4">Hands-on experience for veterans and individuals with disabilities, creating pathways to tech careers.</p>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Bot className="h-6 w-6 text-blue-500" />
                <span className="ml-2 text-lg font-semibold">LucidBots.org</span>
              </div>
              <p className="text-gray-400">Making robotics education and careers accessible to everyone.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Robotics Education</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Training Programs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Our Mission</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partner</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LucidBots.org. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <SignUpForm isOpen={isSignUpFormOpen} onClose={() => setIsSignUpFormOpen(false)} />
      <PartnerForm isOpen={isPartnerFormOpen} onClose={() => setIsPartnerFormOpen(false)} />
      <StoryMessage isOpen={isStoryMessageOpen} onClose={() => setIsStoryMessageOpen(false)} />
    </div>
  );
}

export default App;