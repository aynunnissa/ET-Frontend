import './App.css';
import Layout from './components/layout/Layout';
import ContactUs from './features/home/contact-us';
import CoreValues from './features/home/core-values';
import GrowthSection from './features/home/growth';
import JoinUsSection from './features/home/join-us';
import PartnersSection from './features/home/partners';

function App() {
  return (
    <div className="App">
      <Layout>
        <GrowthSection />
        <CoreValues />
        <PartnersSection />
        <JoinUsSection />
        <ContactUs />
      </Layout>
    </div>
  );
}

export default App;
