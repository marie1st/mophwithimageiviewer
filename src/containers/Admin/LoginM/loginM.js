import React, {Component} from 'react';
import styles from './LoginM.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class LoginM extends React.Component{
constructor(props) {
  super(props);
  this.state = {email: '', password: '', token: '', fireRedirect: false}
}
handleSubmit =e=> {
  e.preventDefault();

  const data = {
    email: this.email,
    password: this.password
  };

  axios.post('http://localhost:8000/login', data)
    .then(res=> {
      localStorage.setItem('token', res.data.token);
      this.setState({fireRedirect: true})
    })
    .catch(err =>{
      console.log(err)
    })

  if(this.state.fireRedirect) {
    return <Redirect to="/admin" />
  }

}
render ( ) {
  const to = "/register";
    return ( <section className={styles.section_container}>
    <form onSubmit={this.handleSubmit}>
    <div className={styles.columns_is_centered}>
      <div className="column is-half">
          <div className="form-control">
            <label className="label">Email</label>
            <div className="control">
              <input className="form-control" type="email" name="email" placeholder="email" onChange ={e=>this.email = e.target.value}/>
            </div>
          </div>

          <div className="form-control">
            <label className="label">Password</label>
            <div className="control">
            <input className="form-control" type="password" name="password" placeholder ="password" onChange={e=>this.password = e.target.value}/>
            </div>
          </div>
          <div className="outer">
            <div className="field is-grouped">
              <div className="inner">
              <span>
                <button type="submit">Submit</button>
              </span>
              </div>
        
            </div>
          </div>
      </div>
    </div>
    </form>
  </section>
    )
}
}