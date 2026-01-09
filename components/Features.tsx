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
            <button className="px-8 py-4 bg-[#2D0A31] text-white rounded-full font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#2D0A31]/20">
              Book your trip
            </button>
            <button className="px-8 py-4 border-2 border-[#2D0A31] text-[#2D0A31] rounded-full font-black text-sm hover:bg-[#2D0A31] hover:text-white transition-all">
              Learn more
            </button>
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