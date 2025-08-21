import logo from './logo.svg';
import './App.css';
import Dropdown from './components/dropdown';
import Header from './components/header';
import Footer from './components/footer'
import Video from './components/video';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
      </header>

      <Dropdown />
      <Video  />
      
      <Footer />
    </div>
  );
}

export default App;
