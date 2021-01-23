import React, {Component} from 'react';
import styles from './LoginM.module.css';

export class LoginM extends React.Component{
render ( ) {
    return ( <section className={styles.section_container}>
    <div className={styles.columns_is_centered}>
      <div className="column is-half">
        <form>
          <div className="field">
            <label className="label">อีเมล์</label>
            <div className="control">
              <input className="input" type="email" name="email" />
            </div>
          </div>

          <div className="field">
            <label className="label">รหัสผ่าน</label>
            <div className="control">
              <input className="input" type="password" name="password" />
            </div>
          </div>
          <div className="outer">
            <div className="field is-grouped">
              <div className="inner">
                <button className="button" >เข้าสู่ระบบ</button>
              </div>
              <hr></hr>
              <div className="inner">
                <button className="button"> สมัครสมาชิก</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
    )
}
}