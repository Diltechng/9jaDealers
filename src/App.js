import './App.css';
import Categories from './home/Categories';
import EditorsCard from './home/Editors-sugg/EditorsCard';
import fontlogo from './fontlogo.png'
const App = () => {
  return (
    <div className="App">
      <header className="App-header bg-light shadow w-100">
        <img src={fontlogo} className="App-logo" alt="logo" />
         <a
          className="App-link"
          href="9jadealers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className='text-success'>9ja</h1><h2 className='text-dark'>Dealers</h2>
        </a>
      </header>
      
      <EditorsCard/>
      <Categories/>
      <div className='title text-success'>Hot Deals</div>
    </div>
  );
}

export default App;
