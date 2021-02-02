import styles from './TestCenter.module.css';
import React, { useState, useEffect } from 'react';
import {ImAttachment} from 'react-icons/im';
import {Cardbox } from '../../../components/Cardbox/cardbox';
import axios from 'axios';

function UserStatus ({match}) {
  const Customerlis = [{given_name: 'Ingrid', lastname: 'Figma', middlename: 'M.', sex: 'Male', nationality: 'American', passport_no: '1234556', health_evisa_date: '2021-05-12T08:00:00.000Z'}];
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
       {Customerlis.map((user, index) =>(
     <div className={styles.card}>
        <table>
            <tr>
                <td width="150">Given Name: {user.given_name}</td>
                <td width="150">Nationality: {user.nationality}</td>
            </tr>
            <tr>
                <td width="150">Family Name: {user.lastname}</td>
                <td width="150">Passport Document No.: {user.passport_no}</td>
            </tr>
            <tr>
                <td width="150">Sex: {user.sex}</td>
                <td width="150">Status: {user.status}</td>
            </tr>
        </table>
     </div>
     ))}
   </div>
   </>
  );
}

export default UserStatus;