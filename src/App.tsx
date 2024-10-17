import './App.css';
import Header from './components/layout/Header';
import Button from './components/shared/Button';
import ChevronLeft from "./assets/icons/chevron-left.svg";
import Layout from './components/layout/Layout';
import GrowthSection from './features/home/growth';

function App() {
  return (
    <div className="App">
      <Layout>
        <GrowthSection />
      </Layout>
      
    </div>
  );
}

export default App;
