import React, {Component} from 'react';
import styles from './Login.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', token: '', fireRedirect: false}
      }

handleSubmit =e=> {
  e.preventDefault();

 
  const data = JSON.stringify({
    email: this.email,
    password: this.password
  });

  axios.post('http://localhost:8000/api/login', data, {headers:{"Content-Type" : "application/json"}})
    .then(res=> {
      localStorage.setItem('token', res.data.token);
      this.setState({fireRedirect: true})
    })
    .catch(err =>{
      console.log(err)
    })

  if(this.state.fireRedirect) {
    return <Redirect to="/home" />
  }

}
render ( ) {
    return ( 
    <section className={styles.section_container}>
    <form onSubmit={this.handleSubmit} >
    <div className={styles.columns_is_centered}>
      <label className={`${styles.labelhead}`} ><span>LOGIN</span></label>
      <div className="column is-half">
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

      </div>
      
          <div className="outler">
            <div className="field is-grouped">
              <div className="inner">
                <button className={`${styles.button}`} type ="submit" >LOGIN</button>
              </div>
            </div>
          </div>
    </div>
    </form>
  </section>
    )
}
}