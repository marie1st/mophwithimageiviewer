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
    axios.get('http://52.188.18.174:8000/api/auth/user', config).then(
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
                    <div className="dropdown">
                    <button className={`${styles.buttonclear}`} onClick={this.gettoggle}>Manage Test Center</button>
                    <div id="myDropdown" className="dropdown_content">
                      <p><Link to='mytestcenter' style={{textDecoration: 'none', color: 'teal', fontFamily: 'sans-serif', fontSize: 12}}>List All Test Centers</Link></p>
                      <p><Link to='listapprove' style={{textDecoration: 'none', color: 'teal', fontFamily: 'sans-serif', fontSize: 12}}>List APPROVED Test Centers</Link></p>
                      <p><Link to='listreject' style={{textDecoration: 'none', color: 'teal', fontFamily: 'sans-serif', fontSize: 12}}>List REJECTED Test Centers</Link></p>
                    </div>
                    </div>
                    <div className="dropdown">
                    <button className={`${styles.buttonclear}`}  onClick={this.dotoggle}>Views</button>
                    <div id="userDropdown" className="dropdown_content">
                      <p><Link to='views' style={{textDecoration: 'none', color: 'teal', fontFamily: 'sans-serif', fontSize: 12}}>List All Traveller Documemts</Link></p>
                      <p><Link to='testlistapprove' style={{textDecoration: 'none', color: 'teal', fontFamily: 'sans-serif', fontSize: 12}}>List APPROVED Test Centers</Link></p>
                      <p><Link to='testlistreject' style={{textDecoration: 'none', color: 'teal', fontFamily: 'sans-serif', fontSize: 12}}>List REJECTED Test Centers</Link></p>
                    </div>
                    </div>
                    <Link to='/admin/search' style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}}><button className={`${styles.buttonclear}`}>Search</button></Link>
                    <Link to="/" style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 33}} onClick={() =>{ localStorage.clear(); window.location.href = "/";}}><button className={`${styles.buttonclear}`}>Logout</button></Link>
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