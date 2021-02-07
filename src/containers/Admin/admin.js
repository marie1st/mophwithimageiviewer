import {Route, Switch } from 'react-router-dom';
import Menu from './Menu/Module';
import Mophlist from './MyTestCenter/mophlist';
import Mophlistind from './MyTestCenter/mophindividual';
import MophManage from './ManageTestCenter/manage';
import Login from './Login/Login';
import MophTestind from './ManageTestCenter/testcenterlist';
import Register from './Register/Register';


export const AdminRoutes = () =>{
  return (
  <>
   <Switch>
     <Route exact path="/admin" component={Menu}/>
     <Route exact path="/admin/moph/users/:userId" component={Mophlistind} />
     <Route exact path="/admin/manage" component={MophManage } />
     <Route exact path="/admin/moph/tests/:testId" component={MophTestind } />
     <Route exact path="/login" component={Login} />
     <Route exact path="/register" component={Register} />
   </Switch>
  </>
  );
}
