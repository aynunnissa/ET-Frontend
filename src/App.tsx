import './App.css';
import Header from './components/layout/Header';
import Button from './components/shared/Button';
import ChevronLeft from "./assets/icons/chevron-left.svg";
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <header className="App-header bg-green-600">
          <h1 className='text-3xl font-bold underline'>Hello again, world!</h1>
          <p className="title-1 md:title-lg">This is title 1</p>
          <Button 
            text='Mitra Petani'
          />
          <Button 
            isIconBtn={true}
            isRounded={true}
            icon={ChevronLeft}
            altText=''
          />
        </header>
      </Layout>
      
    </div>
  );
}

export default App;
