import styles from './TestCenter.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo1 from '../../../covid19.jpg';
import logo2 from '../../../fittofly.png';

// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';


function Mophindividual ({match}) {
  const Customerlis = [{given_name: 'Maria', lastname: 'Sherapova', nationality: 'russian', passport_no: '1234444', middlename: 'M.', arrival_date: '01/02/2021', other_name: 'Mirium', departure_date: '02/03/2021', sex: 'Female', flight_no: 'THA123', date_of_birth: '01/03/2000', city: 'Chenoble', country_of_birth: 'Russia', accommodation1: 'Hyatt Erawan', health_evisa_path1: '/files/file1.pdf', health_evisa_path2: '/files/file2.pdf'}];
  const [Customerls, SetCustomerls] = useState([{
    accommodation1: "Eternal Hotel",
    arrival_date: "2021-02-08T15:28:45.000Z",
    city: "Ausburg",
    country_of_birth: "Austria",
    covid_file_path: "../../../pdf-test.pdf",
    covid_test: true,
    date_of_birth: "1982-02-14T15:28:45.000Z",
    departure_date: "2021-02-08T15:28:45.000Z",
    email: "thyren@test.com",
    fit_file_path: "../../../pdf-test.pdf",
    fit_test: true,
    flight: "THA123",
    given_name: "Thyren",
    lastname: "Miles",
    nationality: "american",
    other_names: "Sexxus",
    passport_no: "AA102345",
    sex: "Male",
    status: "PENDING APPROVAL",
    test_date: "2021-02-08T15:28:45.000Z",
    test_result: "NEGATIVE",
    user_id: 1}]);
  const [Errors, SetError] = useState(false);
  const [Params, SetParams] = useState([]);

  function onSubmit() {
    
    SetParams({status: 'APPROVE'});
    axios
    .put(URL, Params)
    .then(response => {
      console.log("response: ", response.data);
      // do something about response
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
  }
  function onReject() {
   
    SetParams({status: 'REJECT'});
    axios
    .put(URL, Params)
    .then(response => {
      console.log("response: ", response.data);
      // do something about response
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
  }
  function fetchData() {  
    const URL = `http://localhost:3000/drlink-user-views/${match.params.userId}`;
    axios.get(URL)
    .then(response => {
      console.log("response: ", response.data);
      SetCustomerls(response.data);
      // do something about response
      console.log(Customerls);
    })
    .catch(err => {
      SetError(true);
    });
      
  }
useEffect(() =>{
    fetchData();
    console.log(Customerls);
}, [])

return(
  <section className={`${styles.section_containerer}`}>
  
  <div className={`${styles.columns_is_centered}`}>
    <label className={`${styles.labelhead}`} ><span>Check List</span></label>
  </div>
  <div className={`${styles.card}`}>
        {Customerlis.map((user, index)=>(
          <div>
        <table>
           <tr>
             
             <td width="200">Given Name:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.given_name}</div></td>
             <td width="200">Nationality:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.nationality}</div></td>
            
           </tr>
           <tr>

             <td width="200">Family Name:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.lastname}</div></td>
             <td width="200">Passport No.:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.passport_no}</div></td>
           </tr>
           <tr>
             <td width="200">Middle Name:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.middlename}</div></td>
             <td width="200">Arrival Date:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.arrival_date}</div></td>
           </tr>
           <tr>
             <td width="200">Other Names:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.other_name}</div></td>
             <td width="200">Departure Date:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.departure_date}</div></td>
           </tr>
           <tr>
             <td width="200">Sex:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.sex}</div></td>
             <td width="200">Flight:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.flight_no}</div></td>
           </tr>
           <tr>
             <td width="200">Date of Birth:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.date_of_birth}</div></td>
             <td width="200">City:</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.city}</div></td>
           </tr>
           <tr>
             <td width="200">Country of Birth</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.country_of_birth}</div></td>
             <td width="200">Hotel</td>
             <td width="200"><div className={`${styles.button_display}`}>{user.accommodation1}</div></td>
           </tr>
         </table>
         <div className={`${styles.section_containerhead}`} >Test Examination Result</div>
         <a href= {`/path${user.health_evisa_path1}`} >
         <div className={`${styles.preview}`}> <img className={`${styles.previewThumbnail}`} src={logo1} /> </div>
        </a>
          <div className={`${styles.section_footer}`} >Covid-19 Test Certification Form</div>

        
         <a href= {`/path${user.health_evisa_path2}`} >
         <div className={`${styles.preview}`}> <img className={`${styles.previewThumbnail}`} src={logo2} /> </div> 
         </a>
         <div className={`${styles.section_footer}`} >Fit-to-Fly Form</div>
         </div>
        
         ))} 
         
         
         
     </div>
    <div>
     <button className={`${styles.button}`} onClick={onSubmit} >APPROVE</button>
     <button className={`${styles.button}`} onClick={onReject}>REJECT</button>
    </div>
</section>
)
}

export default Mophindividual;