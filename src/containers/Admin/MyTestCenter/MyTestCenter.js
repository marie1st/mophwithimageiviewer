import React, {Component} from 'react';
import styles from './TestCenter.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class MyTestCenter extends React.Component{
constructor(props) {
  super(props);
  this.state = {email: '', testcenter_name: '', physician_name: '', address: '', contact_person: '', phone_number: '', fireRedirect: false};
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit =e=> {
  e.preventDefault();

  const data = {
    testcenter_name: this.testcenter_name,
    email: this.email,
    physician_name: this.physician_name,
    address: this.address,
    contact_person: this.contact_person,
    phone_number: this.phone_number,
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
  const to = "http://localhost:3001/register";
    return ( 
    <section className={styles.section_container}>
    <form onSubmit={this.handleSubmit} >
    <div className={styles.columns_is_centered}>
      <label className={`${styles.labelhead}`} ><span>MY Test Center</span></label>
      <div className="column is-half">
        <div className="form-control">
            <div className="control">
              <span>
              <input className="form-control" placeholder ="Test Center Name" type="text" name="testcenter_name"  onChange ={e=>this.testcenter_name= e.target.value}/>
              </span>
            </div>
        </div>
        <div className="form-control">
            <div className="control">
              <span>
              <input className="form-control" placeholder="Physician Name" type="text" name="physician_name" onChange ={e=>this.physician_name = e.target.value}/>
              </span>
            </div>
        </div>

        <div className="form-control">
            <div className="control">
            <span>
            <input className="form-control" placeholder="Address" type="text" name="address"  onChange={e=>this.address= e.target.value}/>
            </span>
            </div>
        </div>

        <div className="form-control">
            <div className="control">
            <span>
            <input className="form-control" placeholder="Contact Person" type="text" name="contact_person" onChange={e=>this.contact_person = e.target.value}/>
            </span>
            </div>
        </div>
        <div className="form-control">
            <div className="control">
            <span>
            <input className="form-control" placeholder="Phone Number" type="text" name="phone_number" onChange={e=>this.phone_number = e.target.value}/>
            </span>
            </div>
        </div>
        <div className="form-control">
            <div className="control">
            <span>
            <input className="form-control" placeholder="Email Address" type="email" name="email" onChange={e=>this.email = e.target.value}/>
            </span>
            </div>
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
    </div>
    </form>
  </section>
    )
}
}