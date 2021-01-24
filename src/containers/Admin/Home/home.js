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
                    <Link to="/" onClick={() =>localStorage.clear()}> Logout</Link>
                </div>
            )
        }
return (
    <div>
        <Link to='/login'>    Login |</Link>
        <Link to='/register'> Register |</Link>
        <Link to='/forgot'> Forgot Password</Link>
    </div>
    )
    }
}