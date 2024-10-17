import './App.css';
import Layout from './components/layout/Layout';
import CoreValues from './features/home/core-values';
import GrowthSection from './features/home/growth';

function App() {
  return (
    <div className="App">
      <Layout>
        <GrowthSection />
      </Layout>
      <Layout>
        <CoreValues />
      </Layout>
    </div>
  );
}

export default App;
