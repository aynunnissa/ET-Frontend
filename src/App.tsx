import './App.css';
import Header from './components/layout/Header';
import Button from './components/shared/Button';
import ChevronLeft from "./assets/icons/chevron-left.svg";

function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
