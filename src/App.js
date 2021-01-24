import logo from './DR.LINK.png';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AdminRoutes} from './containers';
import Home from './containers/Admin/Home/home'

function App() {
  return (
    <div className="App">
      <header className="App-header-one">
        <div className="flex">
        <img src={logo} alt="logo" />
        </div>
      </header>
     <Router>
       <AdminRoutes />
      <Home />
     </Router>
    </div>
  );
}

export default App;
