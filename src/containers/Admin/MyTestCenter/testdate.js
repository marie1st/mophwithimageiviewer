import React, {Component} from 'react';
import styles from './TestCenter.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class MyTestCenter2 extends React.Component{
constructor(props) {
  super(props);
  this.state = {testcenter_date: '', test: '', fireRedirect: false};
  this.handleSubmit = this.handleSubmit.bind(this);
  this.onChangeValue = this.onChangeValue.bind(this);
}

onChangeValue =e=>{
    this.setState({test: e.target.value});
}
handleSubmit =e=> {
  e.preventDefault();

  const data = {
    testcenter_date: this.testcenter_date,
    covid_test: this.covid_test,
    fit_test: this.fit_test,
  };

  axios.post('http://localhost:3000/testcenter2', data)
    .then(res=> {
      this.setState({fireRedirect: true});
    })
    .catch(err =>{
      console.log(err)
    })
  if (this.state.fireRedirect) {
    return <Redirect to ={'/home/'}/>
  }
}
render ( ) {
    return ( 
    <section className={styles.section_container}>
    <form onSubmit={this.handleSubmit} >
    <div className={styles.columns_is_centered}>
      <label className={`${styles.labelhead}`} ><span>MY Test Center</span></label>
      
        <div className="form">
            <div className="control">
              <span>
              <input className="form-control" placeholder ="Test Date/Month/Year" type="text" name="testcenter_date"  onChange ={e=>this.testcenter_date= e.target.value}/>
              </span>
            </div>
        </div>
        <div Onchange={this.onChangeValue}>
        
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
}