import styles from './TestCenter.module.css';
import React, { useState, useEffect } from 'react';
import {ImAttachment} from 'react-icons/im';
import {Cardbox } from '../../../components/Cardbox/cardbox';
import axios from 'axios';

function Testlistind ({match}) {
  const [Customers, SetCustomer] = useState();
  const [Errors, SetError] = useState(false);
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
       {Customers.map((user, index) =>(
     <div className={styles.card}>
         <Cardbox 
         name= {user.given_name}
         middlename= {user.middlename}
         lastname= {user.lastname}
         pass= {user.passport_no}
         nationality={user.nationality}
         date_of_birth = {user.date_of_birth}
         type_of_visa = {user.type_of_visa}
         pre_approved_visa_no = {user.pre_approved_visa_no}
         arrival_flight = {user.arrival_flight}
         date_of_arrival = {user.date_of_arrival}
         departure_flight = {user.departure_flight}
         date_of_departure = {user.date_of_departure}
         accom1 = {user.accomodation1}
         accom1_date = {user.accom1_date}
         accom2 = {user.accomodation2}
         accom2_date = {user.accom2_date}
         accom3 = {user.accomodation3}
         accom3_date = {user.accom3_date}
         insurance_covid = {user.insurance_covid}
         policy_no = {user.policy_no}
         health_evisa = {user.health_evisa}
         health_evisa_date = {user.health_evisa_date}

         />
        
         <ImAttachment /><a href= {`/path/${user.health_evisa}`} >Link to Fit-to-Fly Certificate</a>
     </div>
     ))}
   </div>
   </>
  );
}

export default Testlistind;