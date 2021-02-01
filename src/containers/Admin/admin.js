
import styles from './Admin.module.css';
import {Route, Switch } from 'react-router-dom';
import List from './List/list';
import Menu from './Menu/Module';
import { AllList} from './AllList/AllList';
import LoginM from './LoginM/loginM';
import { Profile } from './Profile/profile';
import Register from './Register/Register';
import Forgot from './Forgot/forgot';
import Reset from './Reset/reset';
import MyTestCenter from './MyTestCenter/MyTestCenter';
import MyTestCenter2 from './MyTestCenter/testdate';
import Testcenterform from './MyTestCenter/testcenterform';
import Testlist from './MyTestCenter/testlist';
import Testlistind from './MyTestCenter/testlistind';
import Mophlist from './MyTestCenter/mophlist';
import Mophlistind from './MyTestCenter/mophindividual';
import MophStatus from './MyTestCenter/mophstatus';
import Status from './MyTestCenter/userStatus';
import StatusUserDetail from './MyTestCenter/userTest';
import StatusTestCenter from './MyTestCenter/testcenterstatus';

export const AdminRoutes = () =>{
  return (
  <>
   <Switch>
     <Route exact path="/admin" component={Menu} />
     <Route path="/admin/all" component={AllList} />
     <Route path="/lists/:listId" component={List} />
     <Route exact path="/login" component={LoginM} />
     <Route path="/profile/:userID" component={Profile} />
     <Route exact path="/register" component={Register} />
     <Route path="/forgot" component={Forgot} />
     <Route path="/reset" component={ Reset } />
     <Route exact path="/users/mytestcenter" component={MyTestCenter} />
     <Route exact path="/users/mytestcenter2" component={MyTestCenter2} />
     <Route exact path="/users/status/:userId" component={Status }/>
     <Route exact path="/users/status/details/:userId" component={StatusUserDetail} />
     <Route exact path="/test_center/mytestcenter2" component={Testcenterform} />
     <Route exact path="/test_center/mytestcentor" component={Testlist} />
     <Route exact path="/test_center/:userId" component={Testlistind} />
     <Route exact path="/test_center/status/:userId" component={StatusTestCenter} />
     <Route exact path="/moph/mophlist" component={Mophlist} />
     <Route exact path="/moph/testuserid" component={Mophlistind} />
     <Route exact path="/moph/mophstatus" component={MophStatus} />
   </Switch>
  </>
  );
}
