import React, {Component, useState, useEffect} from 'react';
import styles from './manage.module.css';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Dateformat } from '../../../dateformat';

function MophManage ({}) {
    const Customerlis = [{clinic_name: 'Niranam Clinic', country: 'Outside Thailand', address: 'Street of Philadelphia, PA, USA', email: 'clinicanonymous@test.clinic', phone_no: 'DIAL-AMERICA-080',  status: 'awaiting approval', clinic_registration_number: '1234566668'}];
    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });
    const classes = useStyles();
    const [Customerls, SetCustomerls] = useState();
    const [Errors, SetError] = useState(false);
    async function fetchData() {  
      const URL = `http://localhost:3000/test_center/`;
      axios
      .get(URL)
      .then(response => {
        console.log("response: ", response.data);
        SetCustomerls(response.data);
        // do something about response
      })
      .catch(err => {
        SetError(true);
      });
        
    }
  useEffect(() =>{
      fetchData();
  }, [])

  return(
    <section className={`${styles.section_containerer}`}>
    
    <div className={`${styles.columns_is_centered}`}>
      <label className={`${styles.labelhead}`} ><span>Test Center List</span></label>
      <table className={`${styles.section_table}`}>

 <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Teste Center Number</TableCell>
            <TableCell align="right">Clinic Name</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone number</TableCell>
            <TableCell aligh="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Customerlis.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                  {row.clinic_name}
              </TableCell>
              <TableCell component="th" scope="row" align="right">{row.country}</TableCell>
              <TableCell component="th" scope="row" align="right">{row.address}</TableCell>
              <TableCell component="th" scope="row" align="right">{row.phone_no}</TableCell>
              <TableCell component="th" scope="row" align="right"><Link to ={`lists/${row.id}`}>{row.email}</Link></TableCell>
              <TableCell component="th" scope="row" align="right">{row.clinic_registration_number}</TableCell>
              <TableCell component="th" scope="row" align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </table>
    </div>
  </section>
  )
}

export default MophManage;