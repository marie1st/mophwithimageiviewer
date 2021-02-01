import React, {Component} from 'react';
import styles from './Register.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Register extends React.Component{
constructor(props) {
  super(props);
  this.state = {email: '', password: '', username: '', confirm_password: '', terms: false, fireRedirect: false};
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit =e=> {
  e.preventDefault();

  const data = {
    username: this.username,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,
    terms: this.terms,
    token: '',
  };

  axios.post('http://localhost:8000/register', data)
    .then(res=> {
      this.setState({fireRedirect: true, token: res.data.token});
    })
    .catch(err =>{
      console.log(err)
    })
  if (this.state.fireRedirect) {
    return <Redirect to ={'/home/'}/>
  }
}
render ( ) {
  const to = "http://localhost:3001/register";
    return ( 
    <section className={styles.section_container}>
    <form onSubmit={this.handleSubmit} >
    <div className={styles.columns_is_centered}>
      <label className={`${styles.labelhead}`} ><span>REGISTER</span></label>
      <div className="column is-half">
        <div className="form-control">
            <div className="control">
              <span>
              <input className="form-control" placeholder ="User Name" type="username" name="username"  onChange ={e=>this.username= e.target.value}/>
              </span>
            </div>
        </div>
        <div className="form-control">
            <div className="control">
              <span>
              <input className="form-control" placeholder="E-mail" type="email" name="email" onChange ={e=>this.email = e.target.value}/>
              </span>
            </div>
        </div>

        <div className="form-control">
            <div className="control">
            <span>
            <input className="form-control" placeholder="Password" type="password" name="password"  onChange={e=>this.password = e.target.value}/>
            </span>
            </div>
        </div>

        <div className="form-control">
            <div className="control">
            <span>
            <input className="form-control" placeholder="Confirm Password" type="password" name="password" onChange={e=>this.confirm_password = e.target.value}/>
            </span>
            </div>
        </div>

        <div className="form-control">
            <div className="control">
            <input className={`${styles.checkbox}`} type="checkbox" name="checkbox" onChange={e=>this.terms = e.target.checked}/>
            I accept <Link to ="#">Terms and Agreements</Link>
            </div>
        </div>
      </div>
      
          <div className="outler">
            <div className="field is-grouped">
              <div className="inner">
                <button className={`${styles.button}`} type ="submit" >REGISTER NOW</button>
              </div>
            </div>
          </div>
    </div>
    </form>
  </section>
    )
}
}