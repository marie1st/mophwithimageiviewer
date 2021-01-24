import React, {Component} from 'react';
import styles from './reset.module.css';
import {Redirect } from 'react-router-dom';
import axios from 'axios';

export default class LoginM extends React.Component{
constructor(props) {
  super(props);
  this.state = {password: '', fireRedirect: false}
}
handleSubmit =e=> {
  e.preventDefault();

  const data = {
    password: this.password
  };

  axios.post('http://localhost:8000/reset', data)
    .then(res=> {
      this.setState({fireRedirect: true})
    })
    .catch(err =>{
      console.log(err)
    })

  if(this.state.fireRedirect) {
    return <Redirect to="/login" />
  }

}
render ( ) {
    return ( <section className={styles.section_container}>
    <form onSubmit={this.handleSubmit}>
    <div className={styles.columns_is_centered}>
      <div className="column is-half">
      

          <div className="form-control">
            <label className="label">รหัสผ่าน</label>
            <div className="control">
            <input className="form-control" type="password" name="password" placeholder ="password" onChange={e=>this.password = e.target.value}/>
            </div>
          </div>
          <div className="outer">
            <div className="field is-grouped">
              <div className="inner">
                <button className="button" type="submit">เข้าสู่ระบบ</button>
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