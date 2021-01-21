import logo from './LogoGoThailandOF.png';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {AdminRoutes } from './containers';


const to = "./containers/Admin/admin";

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
     </Router>
    </div>
  );
}

export default App;