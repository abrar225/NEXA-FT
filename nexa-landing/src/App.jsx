import React from 'react';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import FeaturedArtwork from './components/sections/FeaturedArtwork';
import MeetTheArtist from './components/sections/MeetTheArtist';
import CreateYourOwn from './components/sections/CreateYourOwn';
import FAQ from './components/sections/FAQ';
import CTABanner from './components/sections/CTABanner';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedArtwork />
        <MeetTheArtist />
        <CreateYourOwn />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
