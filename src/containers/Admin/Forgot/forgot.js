import React, {Component} from 'react';
import styles from './forgot.module.css';
import {Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Forgot extends React.Component{
constructor(props) {
  super(props);
  this.state = {email: '', password: '', fireRedirect: false}
}
handleSubmit =e=> {
  e.preventDefault();

  const data = {
    email: this.email,
    password: this.email,
  };

  axios.post('http://localhost:8000/reset_password_email', data)
    .then(res=> {
      this.setState({fireRedirect: true})
    })
    .catch(err =>{
      console.log(err)
    })

  if(this.state.fireRedirect) {
    return <Redirect to="/" />
  }

}
render ( ) {
    return ( <section className={styles.section_container}>
    <form onSubmit={this.handleSubmit}>
    <div className={styles.columns_is_centered}>
      <div className="column is-half">
          <div className="form-control">
            <label className="label">อีเมล์</label>
            <div className="control">
              <input className="form-control" type="email" name="email" placeholder="email" onChange ={e=>this.email = e.target.value}/>
            </div>
          </div>
          <div className="form-control">
            <label className="label">รหัสผ่านใหม่</label>
            <div className="control">
            <input className="form-control" type="password" name="password" placeholder ="password" onChange={e=>this.password = e.target.value}/>
            </div>
          </div>
          <div className={styles.newline}>
          </div>
          <div className={styles.newline}>
          </div>
          <div className="outer">
            <div className="field is-grouped">
              <div className="inner">
                <button className="button" type="submit">รีเซ็ทพาสเวิร์ด</button>
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