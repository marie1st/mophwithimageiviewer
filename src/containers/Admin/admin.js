import {Route, Switch } from 'react-router-dom';
import Menu from './Menu/Module';
import Mophlist from './MyTestCenter/mophlist';
import Mophlistind from './MyTestCenter/mophindividual';
import MophManage from './ManageTestCenter/manage';
import Login from './Login/Login';
import MophTestind from './ManageTestCenter/testcenterlist';
import Register from './Register/Register';
import ListSearch from './MyTestCenter/listsearch';
import Vaccine from './MyTestCenter/vaccine';
import MophlistApprove from './MyTestCenter/mophlistapprove';
import MophlistReject from './MyTestCenter/mophlistreject';
import ManageApprove from './ManageTestCenter/manageapprove';
import ManageReject from './ManageTestCenter/managereject';




export const AdminRoutes = () =>{
  return (
  <>
   <Switch>
     <Route exact path="/admin" component={Menu}/>
     <Route exact path="/admin/lists/:userId" component={Mophlistind} />
     <Route exact path="/admin/mytestcenter" component={MophManage } />
     <Route exact path="/admin/moph/tests/:testId" component={MophTestind } />
     <Route exact path="/admin/views" component={Mophlist} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/register" component={Register} />
     <Route exact path="/admin/search" component={ListSearch} />
     <Route exact path="/admin/vaccine" component={Vaccine} />
     <Route exact path="/admin/testlistapprove" component={MophlistApprove} />
     <Route exact path="/admin/testlistreject" component={MophlistReject} />
     <Route exact path="/admin/listapprove" component={ManageApprove}/>
     <Route exact path="/admin/listreject" component={ManageReject} />
   </Switch>
  </>
  );
}
