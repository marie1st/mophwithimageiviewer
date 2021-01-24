import axios from 'axios';
import React from 'react';
import axios from 'axios';

class LoginRoutes extends React.Component {
  handleSubmit= e => {
    e.preventDefault();
    const data = { 
      email: this.email,
      password: this.password
    };

    axios.post('http://localhost:8000/login', data).then(
      res=>{
        console.log(res);
      }
    ).catch(
      err=>{
        console.log(err);
      }
    );
  }
  render() {
    return (
      <section className="section container">
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
