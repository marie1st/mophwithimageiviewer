import React, {Component} from 'react';
import styles from './TestCenter.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Testcenterform extends React.Component{
constructor(props) {
  super(props);
  this.state = {given_name: '', lastname: '', middlename: '', other_name: '', sex: '', date_of_birth: '', country: '', nationality: '', passport_no: '', test_date: '', test: '', fireRedirect: false};
  this.handleSubmit = this.handleSubmit.bind(this);
  this.onChangeValue = this.onChangeValue.bind(this);
}

onChangeValue =e=>{
    this.setState({test: e.target.value});
}

handleSubmit =e=> {
  e.preventDefault();

  const data = {
    given_name: this.given_name,
    lastname: this.lastname,
    middlename: this.middlename,
    other_name: this.other_name,
    sex: this.sex,
    date_of_birth: this.date_of_birth,
    country: this.country,
    nationality: this.nationality,
    passport_no: this.passport_no,
    test_date: this.test_date,
  };

  axios.post('http://localhost:3000/testcenter/', data)
    .then(res=> {
      this.setState({fireRedirect: true});
    })
    .catch(err =>{
      console.log(err)
    })
  if (this.state.fireRedirect) {
    return <Redirect to ={'/users/mytestcenter2/'}/>
  }
}
render ( ) {
    return ( 
    <section className={styles.section_containerer}>
    <form onSubmit={this.handleSubmit} >
    <div className={styles.columns_is_centered}>
      <label className={`${styles.labelhead}`} ><span>Personal Form</span></label>
      <table>
        <div className="form-control">
            
            <div className={`${styles.section_control}`}>
             <tr><td width="120">Given Name:</td>
             
              <td width="300"><input className="form-control" placeholder ="Firstname" type="text" name="given_name" onChange ={e=>this.given_name= e.target.value}/>
             </td></tr>
            </div>

        </div>
        <div className="form-control">
            <div className={`${styles.section_control}`}>
              <tr><td width="120">Family Name:</td>
              <td width="300"><input className="form-control" placeholder="Lastname" type="text" name="lastname" onChange ={e=>this.lastname = e.target.value}/>
              </td></tr>
            </div>
        </div>

        <div className="form-control">
            <div className={`${styles.section_control}`}>
            <tr><td width="100">Middle Name:</td>
            <td width="300"><input className="form-control" placeholder="Middlename" type="text" name="middlename"  onChange={e=>this.middlename= e.target.value}/>
            </td></tr>
            </div>
        </div>

        <div className="form-control">
            <div className={`${styles.section_control}`}>
            <tr><td width="120">Other Names:</td>
            <td width="300"><input className="form-control" placeholder="Other names" type="text" name="other_name" onChange={e=>this.other_name = e.target.value}/>
            </td></tr>
            </div>
        </div>
        <div className="form-control">
            <div className={`${styles.section_control}`}>
            <tr><td width="120">Sex:</td>
            <td width="300"><input className="form-control" placeholder="Sex" type="text" name="sex" onChange={e=>this.sex = e.target.value}/>
            </td></tr>
            </div>
        </div>
        <div className="form-control">
            <div className={`${styles.section_control}`}>
            <tr><td width="120">Date of Birth:</td>
            <td width="300"><input className="form-control" placeholder="Date of Birth" type="text" name="date_of_birth" onChange={e=>this.date_of_birth = e.target.value}/>
            </td></tr></div>
        </div>
        <div className="form-control">
            <div className={`${styles.section_control}`}>
            <tr><td width="120">Country of Birth:</td>
            <td width="300"><input className="form-control" placeholder="Country of birth" type="text" name="country" onChange={e=>this.country = e.target.value}/>
            </td></tr></div>
        </div>

        <div className="form-control">
            <div className={`${styles.section_control}`}>
            <tr><td width="120">
            Nationality:</td>
            <td width="300"><input className="form-control" placeholder="Nationality" type="text" name="nationality" onChange={e=>this.nationality = e.target.value}/>
            </td></tr>
            </div>
        </div>

        <div className="form-control">
            <div className={`${styles.section_control}`}>
            <tr><td width="120">
            Passport No.:</td>
            <td width="300"><input className="form-control" placeholder="Passport No." type="text" name="passport_no" onChange={e=>this.passport_no = e.target.value}/>
            </td></tr>
            </div>
        </div>

        <div className="form-control">
            <tr><td width="155"></td>
            <td width="300">
            <input className="form-control" placeholder="Test Date/Month/Year" type="text" name="test_date" onChange={e=>this.test_date = e.target.value}/>
            </td></tr>
        </div>
        

        <div OnChange ={this.onChangeValue}>
            <span>
            <label><input className={`${styles.checkbox}`} value="test_result" type="radio" name="test"/>
            Test Examination Result</label></span>

            <span>
            <label><input className={`${styles.checkbox}`} value="covid_test" type="radio" name="test"/>
            Covid-19 test Certificate Form</label></span>
            
            <span>
            <label><input className={`${styles.checkbox}`} value="fit_test" type="radio" name="test"/>
            Fit to Fly Form</label></span>

        </div>
   </table>
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
}