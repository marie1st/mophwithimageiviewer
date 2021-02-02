import React, {Component, useState, useEffect} from 'react';
import styles from './TestCenter.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';

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


export default function MyTestCenter2 (){

  const classes = useStyles();

  const [Testcenter_date, SetDate] = useState();
  const [TestData, SetTest] = useState();
  const [FireRedirect, SetFire] = useState();
  const [Covid_test, SetCovid] = useState();
  const [Fit_test, SetFit] = useState();


const onChangeValue =e=>{
    SetTest(e.target.value);
}
const handleSubmit =e=> {
  e.preventDefault();

  axios.post('http://localhost:3000/testcenter2', {testcenter_date: Testcenter_date, test: TestData})
    .then(res=> {
      SetFire(true);
    })
    .catch(err =>{
      console.log(err)
    })
  if (FireRedirect) {
    return <Redirect to ={'/home/'}/>
  }
}

    return ( 
    <section className={styles.section_container}>
    <form onSubmit={handleSubmit} >
    <div className={styles.columns_is_centered}>
      <label className={`${styles.labelhead}`} ><span>MY Test Center</span></label>
      
        <div className="form">
            <div className="control">
              <span>
              <div className={`${styles.date_box}`}>
              <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue="Test Date/Month/Year"
                      className={classes.textField}
                      onChange={(date)=> SetDate(date)}
                    />
              </form>
              </div></span>
            </div>
        </div>
        <div Onchange={onChangeValue}>
        
            <span>
        <input className={`${styles.checkbox}`} type="radio" name="test" value="covid_test"/>
            Covid 19 Test Certificate
            </span>
    
        
            <span>
        <input className={`${styles.checkbox}`} type="radio" name="test" value="fit_test"/>
            Fit to Fly</span>
        </div>
    
      </div>
      
          <div className="outler">
            <div className="field is-grouped">
              <div className="inner">
                <span>
                <button className={`${styles.button}`} type ="submit" >SUBMIT</button>
                </span>
              </div>
            </div>
          </div>
    </form>
  </section>
    )
}
