import React, {Component } from 'react';
import { Layout } from '../../../components/Layout/Layout';
import styles from './Menu.module.css';

import axios from 'axios';


const token = localStorage.getItem('token');

export default class Menu extends Component {
  state = {};
  componentDidMount() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios.get('http://localhost:8000/user', config).then(
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
      return (
        <div>

        </div>
      )
    }
  return (
    <div>
      
    </div>
  )
}
}