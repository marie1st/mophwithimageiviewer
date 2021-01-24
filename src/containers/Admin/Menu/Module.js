import React, {Component } from 'react';
import { Layout } from '../../../components/Layout/Layout';
import styles from './Menu.module.css';
import {AllList } from '../AllList/AllList';
import List from '../List/list';
import {ListDetails} from '../List/ListDetail';
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
      return (
        <Layout user_name={this.state.user.username} user_id={this.state.user.id}>
          <div>

          </div>
        </Layout>
      )
    }
  return (
    <Layout>
      <div>
          <List id ="1"/>
      </div>
    </Layout>
  )
}
}