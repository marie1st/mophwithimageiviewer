
import styles from './Admin.module.css';
import {Route, Switch } from 'react-router-dom';
import { List } from './List/list';
import Menu from './Menu/Module';
import { AllList} from './AllList/AllList';
import { LoginM } from './LoginM/loginM';
import { Profile } from './Profile/profile';
import Register from './Register/Register';

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
   </Switch>
  </>
  );
}
