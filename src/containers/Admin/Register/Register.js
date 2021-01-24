import React, {Component} from 'react';
import styles from './Register.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Register extends React.Component{
constructor(props) {
  super(props);
  this.state = {email: '', password: '', token: '', fireRedirect: false};
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit =e=> {
  e.preventDefault();

  const data = {
    username: this.username,
    email: this.email,
    password: this.password,
  };

  axios.post('http://localhost:8000/register', data)
    .then(res=> {
      this.setState({fireRedirect: true});
    })
    .catch(err =>{
      console.log(err)
    })
  if (this.state.fireRedirect) {
    return <Redirect to ={'/admin/'}/>
  }
}
render ( ) {
  const to = "http://localhost:3001/register";
    return ( 
    <section className={styles.section_container}>
    <form onSubmit={this.handleSubmit} >
    <div className={styles.columns_is_centered}>
      <div className="column is-half">
        <div className="form-control">
            <label className="label">ชื่อผู้ใช้</label>
            <div className="control">
              <input className="form-control" type="username" name="username" placeholder="username" onChange ={e=>this.username= e.target.value}/>
            </div>
        </div>
        <div className="form-control">
            <label className="label">อีเมล์</label>
            <div className="control">
              <input className="form-control" type="email" name="email" placeholder="email" onChange ={e=>this.email = e.target.value}/>
            </div>
        </div>

        <div className="form-control">
            <label className="label">รหัสผ่าน</label>
            <div className="control">
            <input className="form-control" type="password" name="password" placeholder ="password" onChange={e=>this.password = e.target.value}/>
            </div>
        </div>
      </div>
        
          <div className="outler">
            <div className="field is-grouped">
              <div className="inner">
                <button className="button" type ="submit" >ลงทะเบียน</button>
              </div>
            </div>
          </div>
    </div>
    </form>
  </section>
    )
}
}