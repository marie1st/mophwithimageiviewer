import React, {useState, useEffect} from 'react'
import { Card, Table, Button } from '../../../components'
import styles from './AllList.module.css'
import { FaDollarSign }from 'react-icons/fa'
//import { SearchBox } from '../../../../../src/components/Input/SearchBox'
//import { Calendar } from '../../../../../src/components/Input/Calendar'


/**
 * Define each field of headers
 */
const headers = ['วันที่', 'หมายเลขพาสปอร์ต', 'ชื่อ-นามสกุล', 'สถานะ', 'ดูรายละเอียด', ''];
export const AllList = () => {
  const Spacer = require('react-spacer');
  const [users, SetUser] = useState([]);
async function fetchData() {
  const response = await fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(response => SetUser(response));
}
useEffect(() =>{
    fetchData();
}, [])
  return (
    <Card.Container>
      <Card.Body>
            <div className={`${styles.wrapperHeader}`}>
            <div className={`${styles.wrapperHeaderContent} font-xl weight-md`}>
              <FaDollarSign /> <Spacer width="12px" />   รายงานรายชื่อนักท่องเที่ยวที่ขอทำ Health-Evisa
              <Spacer width="24px" />
              
            </div>
            <div className='flex'>
              
            </div>
            </div>

        <Table.Container className={styles.space}>
          <Table.Header headers={headers} />
          {users.map((stock, index) => (
            <Table.Row key={stock.id}>
              <Table.Col>{index + 1}</Table.Col>
              <Table.Col>{stock.product_name}</Table.Col>
              <Table.Col>{stock.product_brand}</Table.Col>
              <Table.Col>{stock.product_generation}</Table.Col>
              <Table.Col>{stock.product_price}</Table.Col>
              <Table.Col>_</Table.Col>
            </Table.Row>
          ))}
        </Table.Container>
      </Card.Body>
    </Card.Container>
  )
}
