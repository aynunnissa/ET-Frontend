import { lazy } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import GrowthSection from './features/home/growth';
import HeroSection from './features/home/hero-banners';
import BackToTop from './components/shared/button/BackToTop';

const ContactUs = lazy(() => import('./features/home/contact-us'));
const CoreValues = lazy(() => import('./features/home/core-values'));
const JoinUsSection = lazy(() => import('./features/home/join-us'));
const PartnersSection = lazy(() => import('./features/home/partners'));
const TestimoniSection = lazy(() => import('./features/home/testimoni'));

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
        <BackToTop />
      </Layout>
    </div>
  );
}

export default App;
