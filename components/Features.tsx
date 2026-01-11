import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
  imgUrl: string;
  index: number;
  ctaText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  bgColor,
  imgUrl,
  index,
  ctaText
}) => {
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
          <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">CORE PLATFORM</p>
          <h2 className="text-5xl lg:text-7xl font-black text-[#1a1a1a] leading-[1.05] tracking-tighter mb-8">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">{description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://cal.com/abenezer-kifle-t8tqcf/platform-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-red-500/30 active:scale-95"
            >
              {ctaText}
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 p-8 lg:p-12">
          <div className="w-full h-[400px] lg:h-[550px] rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={imgUrl}
              alt={title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: 'Digital Member Management',
      description: 'Streamline your SACCO operations with our comprehensive digital member management system that handles everything from member onboarding to account management.',
      bgColor: '#F4F7FF',
      imgUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1200',
      ctaText: 'Book Now'
    },
    {
      title: 'Automated Savings & Loans',
      description: 'Efficiently manage savings and loan products with our automated system that ensures accuracy and saves time for both members and administrators.',
      bgColor: '#F0FBF7',
      imgUrl: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1200',
      ctaText: 'Book Now'
    },
    {
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports and gain valuable insights into your SACCO\'s performance with our advanced reporting tools.',
      bgColor: '#FFF6ED',
      imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      ctaText: 'Book Now'
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-10 h-[2px] bg-red-500"></span>
          <span className="text-[10px] font-black text-red-600 tracking-[0.4em] uppercase">Our Core Features</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed to help your SACCO thrive in the digital age
          </p>
        </div>

        <div className="relative">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;