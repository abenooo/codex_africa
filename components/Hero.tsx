import React from 'react';
import { motion } from 'framer-motion';
import AppDownload from './AppDownload';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F8F9FA] overflow-hidden px-6 py-20 lg:py-32">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Messaging */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start z-40 relative mt-8 lg:mt-16"
        >
          

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-gray-900"
          >
            Modern SACCO software for Africa
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
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
            <a 
              href="https://cal.com/abenezer-kifle-t8tqcf/platform-demo" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm whitespace-nowrap hover:bg-red-600 transition-all duration-300 shadow-lg active:scale-95"
            >
              Book appointment
            </a>
            <button className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-full font-bold text-sm whitespace-nowrap hover:bg-gray-50 transition-all duration-300 shadow-lg active:scale-95">
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
            <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No setup fees
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Bank-grade security
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          className="relative h-[450px] lg:h-[650px] flex items-start justify-center lg:justify-end pt-8 lg:pt-12"
        >
          <div className="relative w-full h-full flex items-center justify-end">
            
            {/* Desktop Monitor Mockup - Reporting Interface with perspective */}
            <div className="relative z-10 w-[95%] lg:w-[110%] transform translate-y-0 lg:translate-y-0" style={{ perspective: '1500px' }}>
              <div className="bg-gray-300 p-[4px] rounded-[1.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)]" style={{ transform: 'rotateY(-15deg) rotateX(10deg) translateY(0)' }}>
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

            {/* Mobile Phone Mockup - Larger size for better readability */}
            <motion.div 
              initial={{ x: 40, y: 40, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "backOut" }}
              className="absolute right-[2%] lg:right-[5%] bottom-[-8%] lg:bottom-[-6%] w-32 md:w-40 lg:w-48 z-40"
            >
              <div className="bg-black p-1.5 rounded-[2rem] border-[3px] border-[#2a2a2a] shadow-[0_25px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                 <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 md:w-16 h-3 bg-black rounded-full z-50 border border-gray-800" />
                 <div className="rounded-[1.7rem] w-full aspect-[9/19.5] overflow-hidden relative">
                    {/* Mobile App Content - Better spacing */}
                    <div className="w-full h-full bg-gradient-to-b from-[#FFD54F] via-[#FFC107] to-[#FFB300] overflow-y-auto text-[7px]">
                      
                      {/* Header */}
                      <div className="px-3 pt-5 pb-3 flex justify-between items-center">
                        <div className="bg-yellow-600/30 p-1.5 rounded-lg">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <p className="text-[6px] text-gray-700 leading-tight">እንኳን ደህና መጡ,</p>
                          <p className="text-[7px] font-bold text-gray-900">Abenezer Kifle</p>
                        </div>
                        <div className="bg-yellow-600/30 p-1.5 rounded-lg">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                          </svg>
                        </div>
                      </div>
                      {/* Card */}
                      <div className="px-3 pb-3">
                        <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-[16px] p-3 text-white shadow-xl">
                          <div className="flex items-center gap-1.5 mb-2.5">
                            <div className="w-3.5 h-3.5 bg-white/90 rounded flex items-center justify-center">
                              <div className="w-2.5 h-2.5 bg-orange-500 rounded"></div>
                            </div>
                            <span className="text-[6px] font-semibold">Abenezer Kifle</span>
                          </div>
                          
                          <div className="mb-2.5">
                            <p className="text-[5px] tracking-[0.12em] opacity-90">★★★★★★★★★★★★★★★★★★</p>
                          </div>
                          
                          <div className="flex justify-between items-end text-[5px]">
                            <div>
                              <p className="text-[7px] font-bold tracking-wide mb-0.5">1213123123123123</p>
                              <p className="text-[6px] text-white/80 uppercase font-medium">mainAccount</p>
                            </div>
                            <div className="text-right">
                              <p className="text-[6px] font-bold tracking-wide">ETHIO SACCOS</p>
                              <p className="text-[5px] text-white/80">Nov 28, 2025</p>
                            </div>
                          </div>
                        </div>
                       
                        
                        {/* Pagination */}
                        <div className="flex justify-center gap-1 mt-2.5">
                          <div className="w-5 h-0.5 bg-gray-900 rounded-full"></div>
                          <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
                          <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
                          <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="px-3 pb-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-[16px] p-3 shadow-lg">
                          <div className="grid grid-cols-4 gap-2.5">
                            <div className="flex flex-col items-center">
                              <div className="w-9 h-9 bg-[#FFC107] rounded-full flex items-center justify-center shadow-md mb-1">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                                </svg>
                              </div>
                              <p className="text-[6px] font-bold text-center leading-tight">ዋጋ</p>
                              <p className="text-[5px] text-gray-500 text-center">ማሳወቂያ</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-9 h-9 bg-[#FFC107] rounded-full flex items-center justify-center shadow-md mb-1">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
                                </svg>
                              </div>
                              <p className="text-[6px] font-bold text-center leading-tight">ስደር</p>
                              <p className="text-[5px] text-gray-500 text-center">ቅድስ</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-9 h-9 bg-[#FFC107] rounded-full flex items-center justify-center shadow-md mb-1">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                                </svg>
                              </div>
                              <p className="text-[6px] font-bold text-center leading-tight">ክፍል</p>
                              <p className="text-[5px] text-gray-500 text-center">ክፍ</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-9 h-9 bg-[#FFC107] rounded-full flex items-center justify-center shadow-md mb-1">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z"/>
                                </svg>
                              </div>
                              <p className="text-[6px] font-bold text-center leading-tight">ይመልከቱ</p>
                              <p className="text-[5px] text-gray-500 text-center">ታሪኽ</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="px-3 pb-14">
                        <div className="grid grid-cols-4 gap-2">
                          {[
                            { icon: '👤', label: 'Membership' },
                            { icon: '🧮', label: 'Loan' },
                            { icon: '📈', label: 'Buy' },
                            { icon: '💰', label: 'Dividends' },
                            { icon: '📋', label: 'Apply' },
                            { icon: '📊', label: 'Statements' },
                            { icon: '💳', label: 'Payment' },
                            { icon: '🏦', label: 'Savings' }
                          ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-2 flex flex-col items-center justify-center shadow-sm border border-gray-100">
                              <span className="text-sm mb-1">{item.icon}</span>
                              <span className="text-[5px] font-bold text-gray-800 text-center leading-tight">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Nav */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2 flex justify-between items-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="bg-[#FFC107] p-2.5 rounded-full shadow-xl -mt-8 border-2 border-white">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                          </svg>
                        </div>
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                 </div>
                 <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-30 rounded-[2rem]" />
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;