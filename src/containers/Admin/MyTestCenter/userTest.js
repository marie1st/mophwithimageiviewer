import styles from './TestCenter.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTest ({match}) {
  const Customerlis = [{given_name: 'Ingrid', lastname: 'Figma', middlename: 'M.', sex: 'Male', nationality: 'American', passport_no: '1234556', health_evisa_date: '2021-05-12T08:00:00.000Z', status: 'APPROVE'}];
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
       {Customerlis.map((user, index) =>(
     <div className={`${styles.card_status}`}>
         <button className={`${styles.status}`}>{user.status}</button>
         
        <div className={`${user.status}`=== "APPROVE" ? "`${styles.description}`": "`${styles.description1}`"}>
        <span><div>Tourist prints out  (approved) Covid-19 result.</div></span>
        <span><div>Tourist must keep this certificate with him,</div></span>
        <span><div>either electronically via the app or in paper form.</div></span>
        </div>
        <div className={`${user.status}` ==="REJECT" ? "`${styles.description}`": "`${styles.description1}`"}>
        <span><div>User repeat the process.</div></span>
        <span><div>10$ Processing Charges for</div></span>
        <span><div>Dr.Link Processing fee applies.</div></span>
        </div>
        
        <div className={`${user.status}` === "REJECT" ? "`${styles.Note1}`": "`${styles.Note}`"}>
            <span><div>Covid-19 test Certificate Form Fit to Fly Form</div></span>
        </div>

        <div className={`${user.status}` === "APPROVE" ? "`${styles.Note}`": "`${styles.Note1}`"}>
            <button className={`${styles.printout}`}>PRINT</button>
        </div>

        <div className={`${user.status}` === "REJECT" ? "ELEVENTH": "TENTH"}>
            <button className={`${styles.printout}`}>SUBMIT</button>
        </div>
    </div>
     ))}
   </div>
   </>
  );
}

export default UserTest;