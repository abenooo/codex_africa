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
      country: 'Best in Switzerland',
      title: 'Visit the breathtaking Swiss Alps',
      bgColor: '#FFF0F3',
      imgUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200'
    },
    {
      country: 'Best in Netherlands',
      title: 'See the rivers in Amsterdam',
      bgColor: '#F0F3FF',
      imgUrl: 'https://images.unsplash.com/photo-1512470876302-972fad2aa9dd?auto=format&fit=crop&q=80&w=1200'
    },
    {
      country: 'Best in Japan',
      title: 'Explore the neon lights of Tokyo',
      bgColor: '#FDFCF0',
      imgUrl: 'https://images.unsplash.com/photo-1540959733332-e94e270b4d82?auto=format&fit=crop&q=80&w=1200'
    },
    {
      country: 'Best in Iceland',
      title: 'Chasing the Aurora Borealis',
      bgColor: '#F3F9F5',
      imgUrl: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&q=80&w=1200'
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