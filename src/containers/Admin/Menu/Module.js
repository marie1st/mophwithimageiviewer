import React from 'react';
import { Layout } from '../../../components/Layout/Layout';
import styles from './Menu.module.css';
import {AllList } from '../AllList/AllList';
import {List} from '../List/list';

export const Menu =() =>{
  /**
   * Page render here
   */
  return (
    <Layout>
      <div>
          <List />
      </div>
    </Layout>
  )
}