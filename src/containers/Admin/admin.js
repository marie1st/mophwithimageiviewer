
import styles from './Admin.module.css';
import {Route, Switch } from 'react-router-dom';
import { List } from './List/list';
import { Menu } from './Menu/Module';
import { AllList} from './AllList/AllList';
import { LoginM } from './LoginM/loginM';
export const AdminRoutes = () =>{
  return (
  <>
   <Switch>
     <Route exact path="/admin" component={Menu} />
     <Route path="/admin/Alllist" componet={AllList} />
     <Route path="/admin/detail" component={List} />
     <Route path="/admin/login" component={LoginM} />
   </Switch>
  </>
  );
}
