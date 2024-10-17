import './App.css';
import Layout from './components/layout/Layout';
import CoreValues from './features/home/core-values';
import GrowthSection from './features/home/growth';
import PartnersSection from './features/home/partners';

function App() {
  return (
    <div className="App">
      <Layout>
        <GrowthSection />
      </Layout>
      <Layout>
        <CoreValues />
      </Layout>
      <Layout>
        <PartnersSection />
      </Layout>
    </div>
  );
}

export default App;
