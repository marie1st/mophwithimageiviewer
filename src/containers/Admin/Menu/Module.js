import React from 'react';
import { Layout } from '../../../components/Layout/Layout';
import styles from './Menu.module.css';
import {AllList } from '../AllList/AllList';
import {List} from '../List/list';
import {ListDetails} from '../List/ListDetail';

import CustomPaginationActionsTable from '../CustomPaginationActionsTable/CustomPaginationActionsTable';

export const Menu =() =>{
  /**
   * Page render here
   */
  const to = "1";
  return (
    <Layout>
      <div>
          <List id ={to}/>
      </div>
    </Layout>
  )
}