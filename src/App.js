import logo from './DR.LINK.png';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AdminRoutes} from './containers';
import { UserRoutes } from './containers';
import Home from './containers/Admin/Home/home'

function App() {
  if(window.location.toString().indexOf("?register") === 1) {
    return (
      <div className="App">
         <div className="display">
            <img src={logo} alt="logo" />
        </div>
     <Router>
       <Home />
       <AdminRoutes />
      
     </Router>
    </div>
    )  
  }
  return (

    <div className="App">
         <div className="display_left">
            <img src={logo} alt="logo" />
        </div>
     <Router>
       <Home />
       <AdminRoutes />
      
     </Router>
    </div>
  );
}

export default App;
