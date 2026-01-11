import React, { Suspense } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const ProcessTimeline = React.lazy(() => import('./components/ProcessTimeline'));
const Features = React.lazy(() => import('./components/Features'));
const TeamSection = React.lazy(() => import('./components/TeamSection'));
const AppDownload = React.lazy(() => import('./components/AppDownload'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
// import ComparisonSection from './components/ComparisonSection';
// import ValueDelaySection from './components/ValueDelaySection';

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
          <Suspense fallback={null}>
            <ProcessTimeline />
          </Suspense>
        </div>
      </main>

      {/* Features Section */}
      <main className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="card-stack space-y-12">
          <Suspense fallback={null}>
            <Features />
          </Suspense>
        </div>
      </main>

      {/* Team Section */}
      <Suspense fallback={null}>
        <TeamSection />
      </Suspense>

      {/* App Download Section */}
      <div id="mobile-app" className="bg-white">
        <Suspense fallback={null}>
          <AppDownload />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
      {/* </div> */}
        {/* </div>
      </main> */}
      {/* Comparison Section */}
      {/* <main className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto"> */}
        {/* <div className="w-container mx-auto space-y-12">
          <ComparisonSection />
        </div> */}
      {/* Value Delay Section */}
    
          {/* <ValueDelaySection /> */}
      
      {/* </main> */}
    </div>
  );
};

export default App;
