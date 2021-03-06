import React, { useEffect } from 'react';
import logo from './DR.LINK.png';
import logo1 from './DRLINKsmall.png';
import logo2 from './DRLINKsmallone.png';
import './App.css';
import { BrowserRouter as Router, useLocation} from 'react-router-dom';
import { AdminRoutes} from './containers';
import { UserRoutes } from './containers';
import Home from './containers/Admin/Home/home';


function App() { 
  
  const location = window.location.pathname;
  console.log(location);
  return (
    <Router>
    <div className="App">
         <div className={window.location.pathname != "/register" ? "display_left": "display"}>
            <img src={logo2} alt="logo" />
        </div>
        <span><Home /></span>
        
       <AdminRoutes />
    </div>  
     </Router>
    
  );
}

export default App;
