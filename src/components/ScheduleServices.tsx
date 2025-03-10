import React, { useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LucidBotsLogo from '../assets/LucidBots_Colored_Logo_Full.png';
import HeaderImage from '../assets/header.jpg';
import BeforeAfterImage from '../assets/beforeafter.png';
import WindowImage from '../assets/window.jpg';
import GarageImage from '../assets/garage.jpg';
import PoolImage from '../assets/pool.jpg';
import RoofImage from '../assets/roof.jpg';
import SidewalkImage from '../assets/sidewalk.jpg';
import StoreImage from '../assets/store.png';
import WarehouseImage from '../assets/warehouse.jpg';
import logo from '../assets/logo.png';

export function ScheduleServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[500px] bg-[#0A2847]">
        <div className="absolute inset-0">
          <img 
            src={HeaderImage}
            alt="Drone Cleaning Service"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2847]/90 via-[#0A2847]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full">
          <div className="flex flex-col h-full justify-center">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cleaning Services</h1>
              <button 
                onClick={() => {
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#23C0D8] text-white px-6 md:px-8 py-3 rounded-lg text-lg md:text-xl font-medium hover:bg-[#4FCDE0] transition-colors flex items-center gap-2"
              >
                Let's Talk Now
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute bottom-8 right-4 text-right">
              <div className="text-white">
                <p className="text-xl md:text-3xl font-normal mb-1">Call Now for a Free Estimate</p>
                <p className="text-xl md:text-3xl font-semibold">(980) 430 4360</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#142933] mb-4">
            Revolutionizing Property Maintenance
          </h2>
          <h2 className="text-4xl font-bold text-[#142933] mb-6">
            with Robotics & Innovation
          </h2>
          <div className="w-96 h-0.5 bg-[#23C0D8] mx-auto mb-8"></div>
          <h3 className="text-[#142933] text-2xl font-medium mb-6">
            Advanced Drone & Robotic Cleaning Solutions for Residential and Commercial
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            At LucidBots.org, we are transforming the exterior cleaning industry with cutting-edge robotic technology. Our drone-powered and automated solutions deliver safer, more efficient, and cost-effective cleaning for large structures. By eliminating the risks and inefficiencies of traditional cleaning methods, we ensure superior results while prioritizing sustainability and operational excellence.
          </p>
        </div>

        {/* Residential Services */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-[#142933] mb-16 text-center">Residential Services</h2>
          
          {/* Drone Roof Cleaning */}
          <div className="mb-24 relative bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-[#23C0D8] text-3xl font-semibold mb-4">
                  Drone Roof Cleaning - Safe & Effective
                </h3>
                <div className="w-24 h-1 bg-[#23C0D8] mb-4"></div>
                <p className="text-gray-600 text-xl mb-4">
                  Protect & Preserve Your Roof
                </p>
                <p className="text-gray-600">
                  Our Sherpa Drone safely removes dirt, moss, and algae buildup from roofs without damaging shingles. No ladders, no risk—just a smarter, safer way to extend your roof's lifespan and keep your home looking pristine.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={RoofImage}
                  alt="Drone Roof Cleaning"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Exterior Soft Wash */}
          <div className="mb-24 relative bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-[#23C0D8] text-3xl font-semibold mb-4">
                  Exterior Soft Wash - Safe for Homes
                </h3>
                <div className="w-24 h-1 bg-[#23C0D8] mb-4"></div>
                <p className="text-gray-600 text-xl mb-4">
                  Gentle Yet Powerful Home Cleaning
                </p>
                <p className="text-gray-600">
                  Say goodbye to mold, algae, and stains! Our Low Bot uses low-pressure soft wash technology to safely clean delicate surfaces like vinyl siding, stucco, and wood. No damage, no harsh chemicals—just a pristine, refreshed home exterior.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={BeforeAfterImage}
                  alt="Before and After Exterior Cleaning"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Driveway & Sidewalk */}
          <div className="mb-24 relative bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-[#23C0D8] text-3xl font-semibold mb-4">
                  Driveway & Sidewalk Revitalization
                </h3>
                <div className="w-24 h-1 bg-[#23C0D8] mb-4"></div>
                <p className="text-gray-600 text-xl mb-4">
                  Restore Curb Appeal in Minutes
                </p>
                <p className="text-gray-600">
                  Our high-powered surface cleaner ("The Land Bot") removes oil stains, grime, and dirt from driveways, sidewalks, and patios. Faster, deeper, and Eco-friendly, keeping your home looking its best!
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={SidewalkImage}
                  alt="Sidewalk Cleaning"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Pool Deck */}
          <div className="mb-24 relative bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-[#23C0D8] text-3xl font-semibold mb-4">
                  Pool Deck & Patio Renewal
                </h3>
                <div className="w-24 h-1 bg-[#23C0D8] mb-4"></div>
                <p className="text-gray-600 text-xl mb-4">
                  Safe & Slip-Free Outdoor Living Spaces
                </p>
                <p className="text-gray-600">
                  Mold and algae buildup on pool decks and patios can make surfaces dangerously slippery. Our Land Bot gently removes contaminants, restoring safety and aesthetics. Enjoy your outdoor space worry-free!
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={PoolImage}
                  alt="Pool Deck Cleaning"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Banner */}
        <div className="mb-20">
          <div className="bg-[#0A1C2E] py-8 md:py-0">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-[240px] flex-shrink-0">
                    <img 
                      src={logo} 
                      alt="LucidBots Logo" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex flex-col text-center md:text-left">
                    <p className="text-[#23C0D8] text-2xl md:text-3xl font-semibold">Safer. Faster.</p>
                    <p className="text-[#23C0D8] text-2xl md:text-3xl font-semibold">More Effective.</p>
                    <p className="text-[#23C0D8] text-2xl md:text-3xl font-semibold">Cost-Efficient.</p>
                  </div>
                </div>
                <div className="text-center md:text-right mt-6 md:mt-0">
                  <p className="text-white text-lg md:text-2xl mb-1 font-semibold">Call Now for a Free Estimate</p>
                  <p className="text-white text-lg md:text-2xl font-semibold">(980) 430 4360</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Services */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-[#142933] mb-16 text-center">Commercial Services</h2>
          
          {/* High-Rise Window */}
          <div className="mb-24 relative bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-[#23C0D8] text-3xl font-semibold mb-4">
                  High-Rise Window & Facade Cleaning
                </h3>
                <div className="w-24 h-1 bg-[#23C0D8] mb-4"></div>
                <p className="text-gray-600">
                  Safe and efficient cleaning solutions for tall buildings using advanced drone technology. Our drones access hard-to-reach areas without scaffolding or lifts.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={WindowImage}
                  alt="High-Rise Window Cleaning"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Parking Garage */}
          <div className="mb-24 relative bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-[#23C0D8] text-3xl font-semibold mb-4">
                  Parking Garage & Walkway Deep Clean
                </h3>
                <div className="w-24 h-1 bg-[#23C0D8] mb-4"></div>
                <p className="text-gray-600">
                  Comprehensive cleaning solutions for parking structures and walkways. Our robotic cleaners ensure thorough cleaning of large areas efficiently.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={GarageImage}
                  alt="Parking Garage Cleaning"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Storefront */}
          <div className="mb-24 relative bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-[#23C0D8] text-3xl font-semibold mb-4">
                  Storefront & Signage Brightening
                </h3>
                <div className="w-24 h-1 bg-[#23C0D8] mb-4"></div>
                <p className="text-gray-600">
                  Enhance your business's curb appeal with our specialized cleaning services. We restore the brilliance of your storefront and signage.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={StoreImage}
                  alt="Storefront Cleaning"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Industrial */}
          <div className="mb-24 relative bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-[#23C0D8] text-3xl font-semibold mb-4">
                  Industrial & Warehouse Exterior Restoration
                </h3>
                <div className="w-24 h-1 bg-[#23C0D8] mb-4"></div>
                <p className="text-gray-600">
                  Large-scale cleaning solutions for industrial facilities using drone technology. Efficient cleaning for warehouses and industrial buildings.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={WarehouseImage}
                  alt="Industrial Cleaning"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form Footer */}
        <div id="quote-form" className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-[#0A1C2E] p-6 text-white text-center">
                <h3 className="text-2xl font-semibold">Quick Quote Form</h3>
                <p className="text-[#23C0D8]">Takes less than 2 minutes!</p>
              </div>
              <iframe 
                src="https://pub.quoteiq.io/customer_form/gP2LMu4OAkfHQOmpkeNXBg7gnSn1-pDktEH53gJD30WAtsJBn" 
                className="w-full h-[800px] border-0"
                title="Get a Quote"
                allow="accelerometer; autoplay; camera; encrypted-media; geolocation; gyroscope; microphone; midi"
                aria-label="Quote request form"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Rather talk to someone directly? Call us at{' '}
                <a 
                  href="tel:9804304360" 
                  className="text-[#23C0D8] font-semibold hover:text-[#4FCDE0] transition-colors"
                >
                  (980) 430-4360
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#142933] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img src={LucidBotsLogo} alt="LucidBots Logo" className="h-16 w-auto" />
          </div>
          <a 
            href="tel:9804304360"
            className="text-white text-xl hover:text-[#23C0D8] transition-colors flex items-center gap-2"
          >
            <Phone className="h-6 w-6" />
            (980) 430-4360
          </a>
        </div>
      </div>
    </div>
  );
} 