import styles from './TestCenter.module.css';
import React, { useState, useEffect } from 'react';
import {ImAttachment} from 'react-icons/im';
import {Cardbox } from '../../../components/Cardbox/cardbox';
import axios from 'axios';

function UserTest ({match}) {
  const [Users, SetUser] = useState([]);
  const [Errors, SetError] = useState(false);
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
       {Users.map((user, index) =>(
     <div className={`${styles.card}`}>
         <button className={`${styles.status}`}>{user.status}</button>
        <div className={`${styles.description}`}>
        <span><div>Tourist prints out  (approved) Covid-19 result.</div></span>
        <span><div>Tourist must keep this certificate with him,</div></span>
        <span><div>either electronically via the app or in paper form.</div></span>
        </div>
        <div className = {`${styles.Note}`} >
            <div>Covid-19 test Certificate Form Fit to Fly Form</div>
        </div>

        <div>
            <button className={`${styles.printout}`}>PRINT</button>
        </div>
    </div>
     ))}
   </div>
   </>
  );
}

export default UserTest;