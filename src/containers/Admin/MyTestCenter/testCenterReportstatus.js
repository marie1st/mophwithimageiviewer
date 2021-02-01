import styles from './List.module.css';
import React, { useState, useEffect } from 'react';
import {ImAttachment} from 'react-icons/im';
import axios from 'axios';
import {CardCovid} from '../../../components/CardCovid/CardCovid';
import {CardFit} from '../../../components/CardFit/CardFit';

function TestCenterReportStatus ({match}) {
  const [Users, SetUser] = useState();
  const [Errors, SetError] = useState(false);

  function Onsubmit (params){
    const URL = `http://localhost:3000/users/${match.params.listId}`;
    axios
    .post(URL, params)
    .then(response =>{
        console.log("response", response.data);
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
       Details of Examination Results
       {Users.map((user, index) =>(
           <div>
           <div className={`${styles.section_dno}`}>
           <CardCovid 
           />
           <CardFit 
           />
           </div>
           <div>
               <form>
            <table>
            <tr>
               <td width="100"><button className={`${styles.button}`} OnSubmit={this.OnSubmit(params)}>POSITIVE RESULT</button></td>
               <td width="100"><button className={`${styles.button}`} OnSubmit={this.OnSubmit(params)}>NEGATIVE RESULT</button></td>
            </tr>
            </table>
            </form>
            </div>
           </div>
     ))}
   </div>
   </>
  );
}

export default TestCenterReportStatus;