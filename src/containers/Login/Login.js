
import React from 'react';
import axios from 'axios';
import styles from './Login.css';

class LoginRoutes extends React.Component {
  handleSubmit= e => {
    e.preventDefault();
    const data = { 
      email: this.email,
      password: this.password,
      fireRedirect: false,
      token: '',
    };

    axios.post('http://localhost:8000/login', data).then(
      res=>{
        console.log(res);
        this.setState({fireRedirect: true});
        localStorage.setItem('token', res.data.token);
      }
    ).catch(
      err=>{
        console.log(err);
      }
    );

    if (this.state.fireRedirect) {
      return <Redirect to ={'/home/'}/>
    }
  }
  render() {
    return (
      <section className={`${styles.section_container}`}>
        <form onsubmit={this.handleSubmit}>
        <div className="columns is-centered">
          <div className="column is-half">
            <form>
              <div className="form-group">
                <label className="label">อีเมล์</label>
                <div className="control">
                  <input className="form-control" type="email" name="email" placeholder ="email" onChange={e=>this.email = e.target.value}/>
                </div>
              </div>

              <div className="form-group">
                <label className="label">รหัสผ่าน</label>
                <div className="control">
                  <input className="form-control" type="password" name="password" placeholder ="password" onChange={e=>this.password = e.target.value}/>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">เข้าสู่ระบบ</button>
                </div>
                <div className="control">
                  <button className="button is-text">ยกเลิก</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </form>
      </section>
    )
  }
}

export default LoginRoutes;
