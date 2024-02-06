import './App.css';
import Sidbar from './components/sidbar/Sidbar';
import GlobalContext from './context/GlobalContext';
import Home from './pages/home/Home';

function App() {



  return (
    <>
      <GlobalContext>
        <div className="container">
          <div className="sidbar-menu">
            <Sidbar />
          </div>
          <div className="main">
            <Home />
          </div>
        </div>
      </GlobalContext>
    </>
  );
}

export default App;
