import styles from './manage.module.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from '../../../clinic.png';


// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';


function MophTestind ({match}) {
  
  const [Customers, SetCustomer] = useState([{status: 'PENDING'}]);
  const [Errors, SetError] = useState(false);
  const [Parameters, SetParams] = useState([]);

  //const UserList = [{clinic_name: 'Niranam Clinic', country: 'Outside Thailand', address: 'Street of Philadelphia, PA, USA', email: 'clinicanonymous@test.clinic', phone_no: 'DIAL-AMERICA-080',  status: 'awaiting approval', clinic_registration_number: '123456678', clinic_file_path: '../../../pdf-test.pdf', clinic_photo_path: '../../../clinic.png'}];

  function onSubmit() {
    
    SetParams({status: 'APPROVE'});
    axios
    .put(URL, Parameters)
    .then(respse => {
      console.log("response: ", respse.data);
      // do something about response
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
  }

  function onReject () {
   
    SetParams({status: 'REJECT'});
    axios
    .pup(URL, Parameters)
    .then(respt => {
      console.log("response: ", respt.data);
      // do something about response
    })
    .catch(err => {
      console.trror(err);
      SetError(true);
    });
  }

  async function fetchData() {  
    const URL = `http://localhost:3000/test-centers/${match.params.testId}`;
    axios
    .get(URL)
    .then(response => {
      console.log("resp", response.data);
      SetParams([...Parameters, response.data]);
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
      
  };
  
useEffect(() =>{
    fetchData();
}, []);
  return (
   <>
   <div className={`${styles.section_containerestest}`}>
     
   <label className={`${styles.labelhead}`} ><span>Check List</span></label>
       
     <div className={styles.card}>
        {Parameters.map((user, index)=>(
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
             <td width="150"><div className={`${styles.button_display}`}>{user.clinic_country}</div></td>
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
         <div className={`${styles.section_containerhead}`} >Clinic Document:</div>
         <div className={`${styles.section_center}`}><Link to={`${user.clinic_file_path}`} target="_blank" download>Download</Link></div>
         
         <div className={`${styles.preview}`}> <img className={`${styles.previewThumbnail}`} src={logo} /> </div>
    
          <div className={`${styles.section_foot}`} >Clinic Registration File</div>

         
         </div>
        
         ))} 

         
         
     </div>
    <div>
     <button className={`${styles.button}`} onClick={onSubmit} >APPROVE</button>
     <button className={`${styles.button}`} onClick={onReject}>REJECT</button>
    </div>
   </div>
   </>
  );
}

export default MophTestind;