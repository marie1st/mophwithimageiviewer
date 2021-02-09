import React, {Component, useState, useEffect} from 'react';
import styles from './manage.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function MophManage ({}) {
    //const Customerlis = [{id: '1', clinic_name: 'Niranam Clinic', country: 'Outside Thailand', address: 'Street of Philadelphia, PA, USA', email: 'clinicanonymous@test.clinic', phone_no: 'DIAL-AMERICA-080',  status: 'awaiting approval', clinic_registration_number: '1234566668'}];

    const [Customerls, SetCustomerls] = useState([]);
    const [Errors, SetError] = useState(false);
    function fetchData() {  
      const URL = 'http://localhost:3000/test-centers';
      axios.get("http://localhost:3000/test-centers")
      .then(response => {
        console.log("response: ", response.data);
        SetCustomerls(response.data);
        // do something about response
      })
      .catch(err => {
        SetError(true);
      });
        
    }
  useEffect(() =>{
      fetchData();
  }, [])

  return(
    <section className={`${styles.section_containerer}`}>
    
    <div className={`${styles.columns_is_centered}`}>
      <label className={`${styles.labelhead}`} ><span>Test Center List</span></label>
      <table className={`${styles.section_table}`}>

      <tr>
            <td>Test Center Number</td>
            <td>Clinic Name</td>
            <td>Country</td>
            <td>Address</td>
            <td>Email</td>
            <td>Phone number</td>
            <td>Status</td>
      </tr>   
       
          {Customerls.map((row, index) => (
            <tr>
              <Link to ={`/admin/moph/tests/${row.id}`}><td>
                  {row.clinic_registration_number}
              </td></Link>
              <td>{row.clinic_name}</td>
              <td>{row.country}</td>
              <td>{row.address}</td>
              <td>{row.email}</td>
              <td>{row.phone_no}</td>
              <td>{row.status}</td>
           </tr>
          ))}
      </table>
    </div>
  </section>
  )
}

export default MophManage;