import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './home.module.css';
import axios from 'axios';

const token = localStorage.getItem('token');

export default class Home extends Component {
    state = {};
  componentDidMount() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios.get('user', config).then(
      res=>{
        this.setState({
          user: res.data
        });
      }
      )
      .catch(
      err => {
        console.log(err);
      }
      )
  }
  
  /**
   * Page render here
   */
    render() {
        if(this.state.user) {
            return(
                <div>
                    <Link to="/" style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}} onClick={() =>localStorage.clear()}> Logout</Link>
                    <Link to='/admin/mytestcenter' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}}><button className={`${styles.buttonclear}`}>Manage Test Center</button></Link>
                    <Link to='/admin/views' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}}><button className={`${styles.buttonclear}`}>Views</button></Link>
                </div>
            )
        }
return (
    <div>
        <Link to='/login' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}}><button className={`${styles.buttonclear}`} >Home</button></Link>
        <Link to='#' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}}><button className={`${styles.buttonclear}`}>Manage Test Center</button></Link>
        <Link to='#' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}}><button className={`${styles.buttonclear}`}>Views</button></Link>
    </div>
    )
    }
}