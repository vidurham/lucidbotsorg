import React from 'react';
import { Bot, Brain, Users, ArrowRight, Lightbulb, Building2, GraduationCap, Heart } from 'lucide-react';
import LucidBotsLogo from './assets/LucidBots_Colored_Logo_Full.png';
import EducationImage from './assets/education.jpg';
import InnovationImage from './assets/innovation.jpg';
import ImpactImage from './assets/impact.jpg';
import AndrewImage from './assets/andrew.png';
import PDQuoteImage from './assets/pdquote.jpg';

function App() {
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
          <button className="bg-[#23C0D8] text-white px-8 py-3 rounded-md hover:bg-[#4FCDE0] transition-colors text-lg font-semibold">
            Donate Today
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex justify-center mb-12">
            <img 
              src={LucidBotsLogo} 
              alt="LucidBots Logo" 
              className="h-40 w-auto"
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Extending Human Reach
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic bg-gradient-to-r from-[#23C0D8] to-[#4FCDE0] text-transparent bg-clip-text">
            Beyond Robotics
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={InnovationImage}
                alt="Innovation at LucidBots"
                className="w-full h-80 object-cover object-[center_90%]"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Pushing the boundaries of what's possible in robotics</p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">Empowering the next generation of robotics engineers</p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">Creating positive change in communities worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Future Section */}
      <div className="bg-[#D3F2F7] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#142933] mb-6">Join the Future</h2>
            <div className="w-32 h-1 bg-[#23C0D8] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Brain className="h-16 w-16 text-[#23C0D8] mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Faster Innovation</h3>
              <p className="text-gray-600">Rapid product iteration through real-world testing and feedback.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Building2 className="h-16 w-16 text-[#23C0D8] mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Mission-Driven</h3>
              <p className="text-gray-600">Revenue reinvested in community programs and education.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <GraduationCap className="h-16 w-16 text-[#23C0D8] mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Hands-On Training</h3>
              <p className="text-gray-600">Practical experience for veterans and individuals with disabilities.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Heart className="h-16 w-16 text-[#23C0D8] mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Community Impact</h3>
              <p className="text-gray-600">Supporting schools, churches, and underserved groups.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Building the Future Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Building the Future</h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={AndrewImage}
                alt="LucidBots Leadership"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-[#142933] p-8 text-white">
              <img 
                src={PDQuoteImage}
                alt="Peter Drucker Quote"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Living Our Values</h2>
            <div className="w-24 h-1 bg-[#23C0D8] mx-auto"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-[#23C0D8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lead with Compassion</h3>
                <p className="text-gray-600">
                  We prioritize genuine care and respect in every interaction, fostering an inclusive culture that drives meaningful impact.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <GraduationCap className="h-8 w-8 text-[#23C0D8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Grow with Purpose</h3>
                <p className="text-gray-600">
                  We embrace intentional growth through ambitious goals and continuous learning, ensuring our evolution outpaces change.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-[#23C0D8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Win as One Team</h3>
                <p className="text-gray-600">
                  Success comes through collaboration. We build trust, share ownership, and amplify our impact together.
                </p>
              </div>
            </div>

            {/* Second row - 2 centered cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <ArrowRight className="h-8 w-8 text-[#23C0D8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Drive Positive Change</h3>
                <p className="text-gray-600">
                  We take ownership of our future, embracing challenges as opportunities for innovation and progress.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="h-8 w-8 text-[#23C0D8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pursue Extraordinary Impact</h3>
                <p className="text-gray-600">
                  We solve problems in revolutionary ways, working hard at work worth doing to create unprecedented change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Lightbulb className="h-12 w-12 text-[#23C0D8] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100K+</h3>
              <p className="text-gray-600">Revenue Challenge Met</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-[#23C0D8] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Training Programs</p>
            </div>
            <div>
              <Building2 className="h-12 w-12 text-[#23C0D8] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#142933] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white">Our Services</h2>
            <p className="mt-4 text-xl text-[#D3F2F7]">Real-world robotics meets social impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Service Overview</h3>
              <p className="text-gray-600 mb-4">In-house services providing controlled environments for product testing while generating revenue for social impact.</p>
              <a href="#" className="text-[#23C0D8] font-semibold hover:text-[#4FCDE0]">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-4">Hands-on experience for veterans and individuals with disabilities, creating pathways to tech careers.</p>
              <a href="#" className="text-[#23C0D8] font-semibold hover:text-[#4FCDE0]">Join Program →</a>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Partnerships</h3>
              <p className="text-gray-600 mb-4">Collaborating with educational institutions and nonprofits to expand our reach and impact.</p>
              <a href="#" className="text-[#23C0D8] font-semibold hover:text-[#4FCDE0]">Partner With Us →</a>
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
            <button className="bg-[#23C0D8] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#4FCDE0] transition-colors inline-flex items-center">
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
                <li><a href="#" className="text-gray-400 hover:text-white">Field Testing</a></li>
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
    </div>
  );
}

export default App;