import React, {useState, useEffect} from 'react';
import styles from './TestCenter.module.css';
import {Link } from 'react-router-dom';
import axios from 'axios';
import {Dateformat } from '../../../dateformat';
import Home from '../../Admin/Home/home';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Dropdown} from '../../../components/Dropdown/dropdown';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

function Vaccine() {
    const classes = useStyles();
    const token = localStorage.getItem('token');
    const [Customerls, SetCustomerls] = useState([]);
    const [Errors, SetError] = useState(false);
    const [HasUser, SetHasUser] = useState(false);
    const [Vaccine_date, SetDate] = useState();
    const [Manufacturer, SetManu] = useState();
    const [Dose1, SetDose1] = useState();
    const [Dose1Batch, SetDose1Batch] = useState();
    const [Dose2, SetDose2] = useState();
    const [Dose2Batch, SetDose2Batch] = useState();
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
    <div className={`${styles.section_search}`}><span><button className={`${styles.button_search}`}>Search</button></span></div>
    <div className={`${styles.section_containerer}`}>
    <div className={`${styles.columns_is_centered}`}>
      <label className={`${styles.labelhead}`} ><span>Tourist Approval List</span></label>
      <table className={`${styles.section_table}`}>
  
      <tr>
              <td>Firstname</td>
              <td>Lastname</td>
              <td>Middlename</td>
              <td>Sex</td>
              <td>Address</td>
              <td>Contact no.</td>
              <td>Contact email</td>
              <td>Contact Person</td>
              <td>Passport No.</td>
              <td>National ID no.</td>
              <td>Nationality</td>
              <td>Date of Birth</td>
              <td>Name of Vaccine Center</td>
              <td>Address of Vaccine Center</td>
              <td>Vaccine official Name</td>
              <td>Manufacturer</td>
              <td>DOSE1</td>
              <td>DOSE 1 Batch no.</td>
              <td>DOSE2</td>
              <td>DOSE2 Batch no.</td>
              <td>Date of Vaccine Administration</td>
              <td>Vaccine Validation Until</td>
        </tr>    
       
          {Customerls.map((row, index) => (
            <tr>
            <td>
                {row.given_name}
            </td>
            <td>{row.lastname}</td>
            <td>{row.middlename}</td>
            <td>{row.sex}</td>
            <td>{row.address}</td>
            <td>{row.contact_no}</td>
            <td>{row.contact_email}</td>
            <td>{row.contact_person}</td>
            <td>{row.passport_no}</td>
            <td>{row.national_no}</td>
            <td>{row.nationality}</td>
            <td><Dateformat date={row.date_of_birth} /></td>
            <td>{row.vaccine_center}</td>
            <td>{row.vaccine_center_address}</td>
            <td>{row.vaccine_name}</td>
            <td> <div>
            <Dropdown list={['Pfizer-BioNTech', 'Moderna','Sinovac', 'AstraZeneca', 'Janssen', 'Novavax']} id="btu" onChange={(event) => {SetManu({...Manufacturer, [event.target.id]: event.target.value}) }}/>
              <select value="manufacturer" onChange={(event) => {SetManu({...Manufacturer, [event.target.id]: event.target.value}) }}> 
                  <option name="pfizer"> Pfizer-BioNTech COVID-19 vaccine</option>
                  <option name="moderna">Moderna's COVID-19 vaccine</option>
                  <option name="sinovac">SINOVAC COVID-19 vaccine</option>
                  <option name="astrazeneca">AstraZeneca's COVID-19 vaccine</option>
                  <option name="janssen">Janssen's COVID-19 vaccine</option>
                  <option name="novavax">NOvavax's COVID-19 vaccine</option>
              </select>
            </div></td>
            <td>
              <input className="form-control" placeholder="DOSE1" type="text" name="DOSE1" onChange ={e=>{SetDose1({...Dose1, [e.target.name]: e.target.value})}}/>
              </td>
            <td><input className="form-control" placeholder="DOSE1BATCH" type="text" name="DOSE1BATCH" onChange ={e=>{SetDose1Batch({...Dose1Batch, [e.target.name]: e.target.value})}}/>
              </td>
            <td><input className="form-control" placeholder="DOSE2" type="text" name="DOSE2" onChange ={e=>{SetDose2({...Dose2, [e.target.name]: e.target.value})}}/>
              </td>
            <td><input className="form-control" placeholder="DOSE2BATCH" type="text" name="DOSE2BATCH" onChange ={e=>{SetDose2Batch({...Dose2Batch, [e.target.name]: e.target.value})}}/>
              </td>
            <td> <span>
              <div className={`${styles.date_box}`}>
              <form className={classes.container} noValidate>
                    <TextField
                      id="date1"
                      type="date1"
                      defaultValue="Vaccine Date/Month/Year"
                      className={classes.textField}
                      onChange={(date1)=> SetDate(date1)}
                    />
              </form>
              </div></span></td>
            <td><span>
              <div className={`${styles.date_box}`}>
              <form className={classes.container} noValidate>
                    <TextField
                      id="date2"
                      type="date2"
                      defaultValue="Vaccine Date/Month/Year"
                      className={classes.textField}
                      onChange={(date2)=> SetDate(date2)}
                    />
              </form>
              </div></span></td>
            
         </tr> 
          ))}
      </table>
    </div>
  </div>
  </>
  )
}

export default Vaccine;