import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import ProcessTimeline from './components/ProcessTimeline';
import TeamSection from './components/TeamSection';
import AppDownload from './components/AppDownload';
import ComparisonSection from './components/ComparisonSection';
import ValueDelaySection from './components/ValueDelaySection';
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      <Navbar />
      {/* Hero Section */}
      {/* <main className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="card-stack space-y-12"> */}
          <Hero />
        {/* </div>
      </main> */}

      {/* Process Timeline Section */}
      <main className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="card-stack space-y-12">
          <ProcessTimeline />
        </div>
      </main>

      {/* Features Section */}
      <main className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="card-stack space-y-12">
          <Features />
        </div>
      </main>

      {/* Team Section */}
      {/* <main className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="card-stack space-y-12"> */}
          <TeamSection />
        {/* </div>
      </main> */}
      {/* App Download Section */}
      <div id="mobile-app" className="pt-24">
        <AppDownload />
      </div>
        {/* </div>
      </main> */}
      {/* Comparison Section */}
      {/* <main className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto"> */}
        <div className="w-container mx-auto space-y-12">
          <ComparisonSection />
        </div>
      {/* Value Delay Section */}
    
          <ValueDelaySection />
      
      {/* </main> */}
    </div>
  );
};

export default App;
