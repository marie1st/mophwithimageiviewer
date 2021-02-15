import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './home.module.css';
import './homedrop.css';
import axios from 'axios';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { ToggleButton } from 'react-bootstrap';

const token = localStorage.getItem('token');
console.log(token);

export default class Home extends Component {
    state = {};
  componentDidMount() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios.get('http://localhost:8000/api/auth/user', config).then(
      res=>{
        this.setState({
          user: res.data
        });
        //console.log(res.data);
        console.log(this.state.user);
      }
      )
      .catch(
      err => {
        console.log(err);
      }
      );
  }

  gettoggle () {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  dotoggle () {
    document.getElementById("userDropdown").classList.toggle("show");
  }
  /**
   * Page render here
   */
    render() {
        if(this.state.user != null) {
            return(
                <div>
                    <Link to="/" style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}} onClick={() =>{ localStorage.clear(); window.location.href = "/";}}> <button className={`${styles.buttonclear}`} >Logout</button></Link>
                    <div className="dropdown">
                    <button className={`${styles.buttonclear}`} onClick={this.gettoggle}>Manage Test Center</button>
                    <div id="myDropdown" className="dropdown_content">
                      <p><Link to='#' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 12}}><button className="buttonclear" >List All Test Centers</button></Link></p>
                      <p><Link to='#' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 12}}><button className="buttonclear" >List APPROVED Test Centers</button></Link></p>
                      <p><Link to='#' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 12}}><button className="buttonclear" >List REJECTED Test Centers</button></Link></p>
                    </div>
                    </div>
                    <div className="dropdown">
                    <button className={`${styles.buttonclear}`}  onClick={this.dotoggle}>Views</button>
                    <div id="userDropdown" className="dropdown_content">
                      <p><Link to='#' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 12}}><button className="buttonclear" >List All Traveller Documemts</button></Link></p>
                      <p><Link to='#' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 12}}><button className="buttonclear" >List APPROVED Test Centers</button></Link></p>
                      <p><Link to='#' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 12}}><button className="buttonclear" >List REJECTED Test Centers</button></Link></p>
                    </div>
                    </div>
                    <Link to='/admin/search' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}}><button className={`${styles.buttonclear}`}>Search</button></Link>
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