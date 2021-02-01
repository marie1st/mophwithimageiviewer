import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Register from '../Admin/Register/Register';
export const UserRoutes = () =>{
  return (
  <>
   <Switch>
     <Route exact path="/register" component={Register} />
   </Switch>
  </>
  );
}
