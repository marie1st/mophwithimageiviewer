import styles from './TestCenter.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MophStatus ({match}) {
  const Userslist = [{name: 'test'}];
  const [Users, SetUser] = useState();
  const [Errors, SetError] = useState(false);
  function onSubmit(params) {
    const URL = `http://localhost:3000/users/${match.params.listId}`;
    axios
    .post(URL, params)
    .then(response => {
      console.log("response: ", response.data);
      // do something about response
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
  }
  async function fetchData() {  
    const URL = `http://localhost:3000/users/${match.params.listId}`;
    axios
    .get(URL)
    .then(response => {
      console.log("response: ", response.data);
      SetUser(response.data);
      // do something about response
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
      
  }
useEffect(() =>{
    fetchData();
    console.log(match);
    console.log(match.url);
}, [])
  
  return (
   <>
   <div className={`${styles.section_containerest}`}>
       Test Examination Result
       {Userslist.map((user, index) =>(
     <div className={`${styles.card}`}>
         <button className={`${styles.status}`}>APPROVE</button>
        <div className={`${styles.description}`}>
        <span><div>Mail result to Go Thailand</div></span>
     </div>
        <div>
            <button className={`${styles.printout}`} >SEND</button>
        </div>
    </div>
     ))}
   </div>
   </>
  );
}

export default MophStatus;