import styles from './List.module.css';
import {Router} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {ImAttachment} from 'react-icons/im';
import useModal from 'react-hook-usemodal';
import {Cardbox } from '../../../components/Cardbox/cardbox'

export const List = () =>{
  const [users, SetUser] = useState([]);
  async function fetchData() {
      const response = await fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(response => SetUser(response));
  }
useEffect(() =>{
    fetchData();
}, [])

  return (
   <div>
       {users.map((user, index) =>(
     <div>
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
  );
}