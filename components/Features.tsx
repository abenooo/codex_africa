import React from 'react';

interface DestinationCardProps {
  country: string;
  title: string;
  bgColor: string;
  imgUrl: string;
  index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ country, title, bgColor, imgUrl, index }) => {
  return (
    <div
      className="sticky-card"
      style={{ top: `${40 + (index * 40)}px`, marginBottom: '100px' }}
    >
      <div
        className="w-full rounded-[48px] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/20 transition-transform duration-500 hover:scale-[1.01]"
        style={{ backgroundColor: bgColor }}
      >
        {/* Left Content */}
        <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
          <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">{country}</p>
          <h2 className="text-5xl lg:text-7xl font-black text-[#1a1a1a] leading-[1.05] tracking-tighter mb-12">
            {title}
          </h2>
          <div className="flex flex-wrap gap-4">
             {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center xl:items-start justify-center xl:justify-start gap-4">
            <a
              href="https://cal.com/abenezer-kifle-t8tqcf/platform-demo"
              target="_blank"
              rel="noopener noreferrer"
              data-cal-link="abenezer-kifle-t8tqcf/platform-demo"
              data-cal-namespace=""
              data-cal-config='{"layout":"month_view"}'
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all hover:bg-red-600 hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)] active:scale-95 whitespace-nowrap"
            >
              Book Now
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#comparison"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900 shadow-sm ring-2 ring-gray-200 transition-all hover:ring-gray-900 active:scale-95 whitespace-nowrap"
            >
              Request a Demo
            </a>
          </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 p-8 lg:p-12">
          <div className="w-full h-[400px] lg:h-[550px] rounded-[40px] overflow-hidden shadow-2xl">
            <img src={imgUrl} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" />
          </div>
        </div>
      </div>
    </div>
  );
};

 const Features: React.FC = () => {
  const destinations = [
    {
      country: 'CORE PLATFORM',
      title: 'Digital Member Management',
      bgColor: '#F4F7FF',
      imgUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1200'
    },
    {
      country: 'SAVINGS & LOANS',
      title: 'Automated Savings & Loan Management',
      bgColor: '#F0FBF7',
      imgUrl: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1200'
    },
    {
      country: 'GOVERNANCE',
      title: 'Approval Workflows & Strong Controls',
      bgColor: '#FFF6ED',
      imgUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200'
    },
    {
      country: 'REPORTING',
      title: 'Transparent Reports & General Ledger',
      bgColor: '#F7F7F7',
      imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    },
    {
      country: 'PAYMENTS',
      title: 'Digital Payments via Telebirr & Banks',
      bgColor: '#EEF3FF',
      imgUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200'
    }
  ];
  

  return (
    <>
      <div className="w-full">
        {destinations.map((dest, i) => (
          <DestinationCard
            key={i}
            index={i}
            {...dest}
          />
        ))}
      </div>



      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e2e2; border-radius: 10px; }
      `}</style>
    </>
  );
};

export default Features;