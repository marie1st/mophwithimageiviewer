import styles from './manage.module.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import FilePreviewerThumbnail from 'react-file-previewer';


// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';


function MophTestind ({match}) {
  const params = [{example: true}];
  const [Customers, SetCustomer] = useState([]);
  const [Errors, SetError] = useState(false);

  const UserList = [{clinic_name: 'Niranam Clinic', country: 'Outside Thailand', address: 'Street of Philadelphia, PA, USA', email: 'clinicanonymous@test.clinic', phone_no: 'DIAL-AMERICA-080',  status: 'awaiting approval', clinic_registration_number: '123456678', clinic_file_path: '../../../pdf-test.pdf'}];

  function onSubmit() {
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
      SetCustomer(response.data);
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
   <div className={`${styles.section_containerestest}`}>
     
   <label className={`${styles.labelhead}`} ><span>Check List</span></label>
       
     <div className={styles.card}>
        {UserList.map((user, index)=>(
          <div>
        <table>
           <tr>
             
             <td width="100">Clinic Name:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.clinic_name}</div></td>
             <td width="100">Clinic Address:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.address}</div></td>
            
           </tr>
           <tr>

             <td width="100">Country</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.country}</div></td>
             <td width="100">Clinic Registration Number:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.clinic_registration_number}</div></td>
           </tr>
           <tr>
             <td width="100">Phone:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.phone_no}</div></td>
             <td width="100">Email:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.email}</div></td>
           </tr>
           
         </table>
         <div className={`${styles.section_containhead}`} >Clinic Document:</div>
         <Link to={`${user.clinic_file_path}`} target="_blank" download>Download</Link>
          <FilePreviewerThumbnail file={{url: `${user.clinic_file_path}`}}/> 
    
          <div className={`${styles.section_foot}`} >Clinic Registration File</div>

         
         </div>
        
         ))} 

         
         
     </div>
    <div>
     <button className={`${styles.button}`} >APPROVE</button>
     <button className={`${styles.button}`} >REJECT</button>
    </div>
   </div>
   </>
  );
}

export default MophTestind;