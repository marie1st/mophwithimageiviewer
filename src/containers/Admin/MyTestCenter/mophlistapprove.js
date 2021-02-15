import React, {useState, useEffect} from 'react';
import styles from './TestCenter.module.css';
import {Link } from 'react-router-dom';
import axios from 'axios';
import {Dateformat } from '../../../dateformat';
import Home from '../../Admin/Home/home';
import { ModeComment } from '@material-ui/icons';
import {Button} from '../../../components/Button/Button';

function MophlistApprove ({}) {
  //const Customerlis = [{id: '1', clinic_name: 'Niranam Clinic', country: 'Outside Thailand', address: 'Street of Philadelphia, PA, USA', email: 'clinicanonymous@test.clinic', phone_no: 'DIAL-AMERICA-080',  status: 'awaiting approval', clinic_registration_number: '1234566668'}];
  var date = new Date();
  date.setDate(date.getDate()-91);
  var prior_start = date.toISOString();
  const token = localStorage.getItem('token');
  const [Customerls, SetCustomerls] = useState([]);
  const [Errors, SetError] = useState(false);
  const [HasUser, SetHasUser] = useState(false);
  function fetchData() {  
    const URL = 'http://localhost:3000/drlink-user-views/';
    axios.get(URL)
    .then(response => {
      console.log("response: ", response.data);
      SetCustomerls(response.data);
      // do something about response
    })
    .catch(err => {
      SetError(true);
    });
      
  }

  async function fetchUser() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios.get('http://localhost:8000/api/auth/user', config).then(
      res=>{
        SetHasUser(true);
      }
      )
      .catch(
      err => {
        console.log(err);
        SetError(true);
      }
      );
  }


useEffect(() =>{
    fetchData();
    fetchUser();
}, [])

if (Errors) { return <Home /> }
return(
  <section className={`${styles.section_containerer}`}>
  
  <div className={`${styles.columns_is_centered}`}>
    <label className={`${styles.labelhead}`} ><span>Traveller List</span></label>
    <table className={`${styles.section_table}`}>

    <tr>
            <td>Given Name</td>
            <td>Family Name</td>
            <td>Sex</td>
            <td>Nationality</td>
            <td>Passport No.</td>
            <td>Test DD/MM/YYYY</td>
            <td>Status</td>
      </tr>    
     
        {Customerls.filter(Customer=>Customer.status === 'APPROVE').map((row, index) => (
          <tr>
          <td>
              {row.given_name}
          </td>
          <td>{row.lastname}</td>
          <td>{row.sex}</td>
          <td>{row.nationality}</td>
          <td><Link to ={`lists/${row.user_id}`}>{row.passport_no}</Link></td>
          <td><Dateformat date ={row.test_date} /></td>
          <td><td width="200"><Button color={"b"+`${row.status}`}>STATUS</Button><Button color={"b"+`${row.status}`}>COVID-19</Button><Button color={"b"+`${row.status}`}>FIT-TO-FLY</Button></td></td>
       </tr> 
        ))}
    </table>
  </div>
</section>
)
}
export default MophlistApprove;