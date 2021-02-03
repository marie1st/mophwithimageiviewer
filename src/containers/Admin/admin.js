import {Route, Switch } from 'react-router-dom';
import Menu from './Menu/Module';
import Mophlist from './MyTestCenter/mophlist';
import Mophlistind from './MyTestCenter/mophindividual';
import MophStatus from './MyTestCenter/mophstatus';
import Login from './Login/Login';

export const AdminRoutes = () =>{
  return (
  <>
   <Switch>
     <Route exact path="/admin" component={Menu}/>
     <Route exact path="/moph/mophlist" component={Mophlist} />
     <Route exact path="/moph/testuserid" component={Mophlistind} />
     <Route exact path="/moph/mophstatus" component={MophStatus} />
     <Route exact path="/login" component={Login} />
   </Switch>
  </>
  );
}
