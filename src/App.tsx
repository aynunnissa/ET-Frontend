import './App.css';
import Layout from './components/layout/Layout';
import ContactUs from './features/home/contact-us';
import CoreValues from './features/home/core-values';
import GrowthSection from './features/home/growth';
import HeroSection from './features/home/hero-banners';
import JoinUsSection from './features/home/join-us';
import PartnersSection from './features/home/partners';
import TestimoniSection from './features/home/testimoni';

function App() {
  return (
    <div className="App">
      <Layout>
        <HeroSection />
        <GrowthSection />
        <CoreValues />
        <TestimoniSection />
        <PartnersSection />
        <JoinUsSection />
        <ContactUs />
      </Layout>
    </div>
  );
}

export default App;
