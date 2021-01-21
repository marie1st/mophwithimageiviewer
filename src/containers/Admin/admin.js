
import styles from './Admin.module.css';
import {Router} from 'react-router-dom';
import { List } from './List/list';
import {Profile} from './Profile/profile';

export const AdminRoutes = () =>{
  return (
  <>
   <div className={styles.profile}>
     <Profile />
   </div>
   <div className={styles.body}>
     <List />
   </div>
  </>
  );
}
