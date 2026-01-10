import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A1929] to-[#1E3A5F] overflow-hidden px-6 py-20 lg:py-32">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Messaging */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start z-40 relative mt-8 lg:mt-16"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">2,000+ 5 star reviews</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white"
          >
            Modern SACCO software for Africa
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-200 mb-10 max-w-xl leading-relaxed"
          >
            Launch member onboarding, savings, loans, and mobile banking from one secure platform — in minutes, not months.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <button className="bg-[#D4FF00] text-gray-900 px-8 py-4 rounded-full font-bold text-sm whitespace-nowrap hover:bg-[#E5FF33] transition-all duration-300 shadow-lg active:scale-95">
              Book appointment
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold text-sm whitespace-nowrap hover:bg-white/20 transition-all duration-300 shadow-lg active:scale-95">
              View pricing
            </button>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-blue-100 font-medium text-sm">
              <svg className="w-5 h-5 text-[#D4FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No setup fees
            </div>
            <div className="flex items-center gap-2 text-blue-100 font-medium text-sm">
              <svg className="w-5 h-5 text-[#D4FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Bank-grade security
            </div>
            <div className="flex items-center gap-2 text-blue-100 font-medium text-sm">
              <svg className="w-5 h-5 text-[#D4FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Launch in minutes
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Device Mockups */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full h-full flex items-center justify-end">
            
            {/* Desktop Monitor Mockup - Reporting Interface */}
            <div className="relative z-10 w-[95%] lg:w-[110%] transform translate-y-0 lg:translate-y-0">
              <div className="bg-gray-300 p-[4px] rounded-[1.5rem] shadow-[0_60px_100px_rgba(0,0,0,0.6)]">
                <div className="bg-[#0f0f0f] p-[10px] rounded-[1.3rem]">
                  <div className="rounded-[0.8rem] overflow-hidden bg-white aspect-[16/10] relative">
                    {/* Reporting Dashboard Content */}
                    <div className="w-full h-full bg-white p-4 flex text-[10px]">
                      {/* Sidebar */}
                      <div className="w-[15%] bg-white border-r border-gray-200 pr-2 space-y-0.5">
                        <div className="py-1.5 px-2 text-gray-600 font-medium text-[9px]">Dashboard</div>
                        <div className="py-1.5 px-2 text-gray-600 font-medium text-[9px]">Reports</div>
                        <div className="py-1.5 px-2 bg-gray-100 text-gray-900 font-semibold rounded text-[9px]">Reporting</div>
                        <div className="py-1.5 px-2 text-gray-600 font-medium text-[9px]">Compliance</div>
                        <div className="py-1.5 px-2 text-gray-600 font-medium text-[9px]">Analytics</div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 pl-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-1">Reporting</h2>
                            <div className="flex gap-4 text-[9px]">
                              <button className="pb-1 border-b-2 border-gray-900 font-semibold">Spending</button>
                              <button className="pb-1 text-gray-500">Compliance</button>
                              <button className="pb-1 text-gray-500 flex items-center gap-0.5">
                                Present
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <button className="bg-[#D4FF00] text-gray-900 px-4 py-1.5 rounded-lg font-semibold text-[9px]">
                            Create card
                          </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-white border border-gray-200 rounded-lg p-2">
                            <div className="text-[7px] text-gray-500 mb-0.5">Total spending</div>
                            <div className="text-sm font-bold">$165,927.41</div>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-2">
                            <div className="text-[7px] text-gray-500 mb-0.5">Monthly avg</div>
                            <div className="text-sm font-bold">$2,947.72</div>
                          </div>
                        </div>

                        {/* Chart Area */}
                        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-3 h-32 relative">
                          <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                            {/* Grid lines */}
                            <line x1="0" y1="30" x2="400" y2="30" stroke="#e5e7eb" strokeWidth="0.5"/>
                            <line x1="0" y1="60" x2="400" y2="60" stroke="#e5e7eb" strokeWidth="0.5"/>
                            <line x1="0" y1="90" x2="400" y2="90" stroke="#e5e7eb" strokeWidth="0.5"/>
                            
                            {/* Stacked area chart paths */}
                            <path d="M 0 100 Q 50 95 100 85 T 200 70 T 300 55 T 400 40 L 400 120 L 0 120 Z" fill="#93C5FD" opacity="0.7"/>
                            <path d="M 0 95 Q 50 90 100 80 T 200 65 T 300 50 T 400 35 L 400 120 L 0 120 Z" fill="#86EFAC" opacity="0.7"/>
                            <path d="M 0 90 Q 50 85 100 75 T 200 60 T 300 45 T 400 30 L 400 120 L 0 120 Z" fill="#FCA5A5" opacity="0.7"/>
                            <path d="M 0 85 Q 50 80 100 70 T 200 55 T 300 40 T 400 25 L 400 120 L 0 120 Z" fill="#FDE047" opacity="0.7"/>
                          </svg>
                          
                          {/* Legend */}
                          <div className="absolute top-2 right-2 flex flex-col gap-0.5 text-[7px]">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                              <span className="text-gray-600">Travel</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                              <span className="text-gray-600">SaaS</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-red-400"></div>
                              <span className="text-gray-600">Marketing</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <span className="text-gray-600">Operations</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Monitor Stand */}
              <div className="absolute top-[99.5%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[100px] h-[60px] bg-gradient-to-b from-gray-400 to-gray-500" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)' }} />
                <div className="w-[240px] h-3 bg-gray-300 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.3)] mt-[-1px]" />
              </div>
            </div>

            {/* Mobile Phone Mockup - Exact position as in design (bottom right, touching monitor edge) */}
            <motion.div 
              initial={{ x: 40, y: 40, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "backOut" }}
              className="absolute right-[2%] lg:right-[5%] bottom-[-8%] lg:bottom-[-6%] w-28 md:w-36 lg:w-44 z-40"
            >
              <div className="bg-black p-1.5 rounded-[2.2rem] border-[4px] border-[#2a2a2a] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
                 <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 md:w-16 h-3.5 bg-black rounded-full z-50 border border-gray-800" />
                 <div className="rounded-[1.8rem] w-full aspect-[9/19.5] overflow-hidden bg-[#0A1929] relative">
                    {/* Mobile App Content */}
                    <div className="w-full h-full bg-gradient-to-b from-[#0A1929] to-[#1E3A5F] p-3 text-white text-[7px]">
                      <div className="flex justify-between items-center mb-6">
                        <div className="font-bold text-[8px]">ramp</div>
                        <div className="flex gap-1.5">
                          <div className="w-5 h-5 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between py-1.5 border-b border-white/10">
                          <span className="text-white/60 text-[7px]">Travel expenses</span>
                          <span className="font-semibold text-[7px]">$2,749.00</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-white/10">
                          <span className="text-white/60 text-[7px]">SaaS payments</span>
                          <span className="font-semibold text-[7px]">$1,342.11</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-white/10">
                          <span className="text-white/60 text-[7px]">Marketing</span>
                          <span className="font-semibold text-[7px]">$842.00</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-white/10">
                          <span className="text-white/60 text-[7px]">Operations</span>
                          <span className="font-semibold text-[7px]">$1,234.56</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-white/5 rounded-xl p-2.5">
                          <div className="text-[6px] text-white/60 mb-1">Total Spending</div>
                          <div className="font-bold text-[9px]">$6,167.67</div>
                        </div>
                      </div>
                    </div>
                 </div>
                 <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-40 rounded-[2.2rem]" />
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;