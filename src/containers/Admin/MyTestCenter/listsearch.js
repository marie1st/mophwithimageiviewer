import React, {useState, useEffect} from 'react';
import styles from './TestCenter.module.css';
import {Link } from 'react-router-dom';
import axios from 'axios';
import {Dateformat } from '../../../dateformat';
import Home from '../../Admin/Home/home';

function ListSearch() {

    const token = localStorage.getItem('token');
    const [Customerls, SetCustomerls] = useState([]);
    const [Errors, SetError] = useState(false);
    const [HasUser, SetHasUser] = useState(false);
    const [Search, SetSearch] = useState();
    function handleSubmit(e) {
      e.preventDefault();
      SetSearch({search: e.target.value});
    }


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
    <>
    <form onSubmit={handleSubmit}>
      <div className="form-control">
            <div className={`${styles.section_search}`}>
            <span>
            <input className="form-control" placeholder="search" type="text" name="search"  onChange={e=>{SetSearch({...Search, [e.target.name]: e.target.value})}}/>
            <button className={`${styles.button_search}`} type ="submit" >Go</button>
            </span>
            </div>
        </div>
    </form>
    <div className={`${styles.section_containerer}`}>
    <div className={`${styles.columns_is_centered}`}>
      <label className={`${styles.labelhead}`} ><span>Tourist Approval List</span></label>
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
       
          {Customerls.filter((Customer) =>{
            if(Search.search ==null) 
              return Customer
            else if(Customer.given_name.toLowerCase().includes(Search.search.toLowerCase()) || Customer.lastname.toLowerCase().includes(Search.search.toLowerCase())) 
              return Customer
            }
          ).map((row, index) => (
            <tr>
            <td>
                {row.given_name}
            </td>
            <td>{row.lastname}</td>
            <td>{row.sex}</td>
            <td>{row.nationality}</td>
            <td><Link to ={`lists/${row.user_id}`}>{row.passport_no}</Link></td>
            <td><Dateformat date ={row.test_date} /></td>
            <td>{row.status}</td>
         </tr> 
          ))}
      </table>
    </div>
  </div>
  </>
  )
}

export default ListSearch;