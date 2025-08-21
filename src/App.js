import logo from './logo.svg';
import './App.css';
import Dropdown from './components/dropdown';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
      </header>
      <Dropdown />
      <footer>
        <p class="header">This is an ongoing project, and has some more stuff planned for better functionality. For more information, please see <a href="./To-Do/to-do.html">here</a></p>
        <p class="header">Project made by Tim Fitzgerald (@wembembo on everything), notation font made by @Theweirdologist</p>
      </footer>

    </div>
  );
}

export default App;
