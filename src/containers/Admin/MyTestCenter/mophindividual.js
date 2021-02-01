import styles from './TestCenter.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { thumbnailPlugin, Viewer } from '@react-pdf-viewer/thumbnail';

// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';


function Mophindividual ({match}) {
  const params = [{example: true}];
  const thumbnailPluginInstance = thumbnailPlugin();
  const [Customers, SetCustomer] = useState([]);
  const [Errors, SetError] = useState(false);

  const UserList = [{given_name: 'Maria', lastname: 'Sherapova', nationality: 'russian', passport_no: '1234444', middlename: 'M.', arrival_date: '01/02/2021', other_name: 'Mirium', departure_date: '02/03/2021', sex: 'Female', flight_no: 'THA123', date_of_birth: '01/03/2000', city: 'Chenoble', country_of_birth: 'Russia', accommodation1: 'Hyatt Erawan', health_evisa_path1: '/files/file1.pdf', health_evisa_path2: '/files/file2.pdf'}]

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
   <div className={`${styles.section_containerest}`}>
     
   <label className={`${styles.labelhead}`} ><span>Check List</span></label>
       
     <div className={styles.card}>
        {UserList.map((user, index)=>(
          <div>
        <table>
           <tr>
             
             <td width="50">Given Name:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.given_name}</div></td>
             <td width="50">Nationality:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.nationality}</div></td>
            
           </tr>
           <tr>

             <td width="50">Family Name:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.lastname}</div></td>
             <td width="50">Passport No.:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.passport_no}</div></td>
           </tr>
           <tr>
             <td width="50">Middle Name:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.middlename}</div></td>
             <td width="50">Arrival Date:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.arrival_date}</div></td>
           </tr>
           <tr>
             <td width="50">Other Names:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.other_name}</div></td>
             <td width="50">Departure Date:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.departure_date}</div></td>
           </tr>
           <tr>
             <td width="50">Sex:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.sex}</div></td>
             <td width="50">Flight:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.flight_no}</div></td>
           </tr>
           <tr>
             <td width="50">Date of Birth:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.date_of_birth}</div></td>
             <td width="50">City:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.city}</div></td>
           </tr>
           <tr>
             <td width="50">Country of Birth</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.country_of_birth}</div></td>
             <td width="50">Hotel</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.accommodation1}</div></td>
           </tr>
         </table>
         <div className={`${styles.section_containhead}`} >Test Examination Result</div>
         <a href= {`/path/${user.health_evisa_path1}`} >
          PDF1
          </a>
          <div className={`${styles.section_foot}`} >Covid-19 Test Certification Form</div>

         <div className={`${styles.section_containhead}`} >Test Examination Result</div>
         <a href= {`/path/${user.health_evisa_path2}`} >
           PDF2
         </a>
         <div className={`${styles.section_foot}`} >Fit-to-Fly Form</div>
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

export default Mophindividual;