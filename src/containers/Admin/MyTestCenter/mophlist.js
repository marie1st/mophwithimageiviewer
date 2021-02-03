import React, {Component, useState, useEffect} from 'react';
import styles from './TestCenter.module.css';
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

function Mophlist ({}) {
    const Customerlis = [{given_name: 'Ingrid', lastname: 'Figma', middlename: 'M.', sex: 'Male', nationality: 'American', passport_no: '1234556', health_evisa_date: '2021-05-12T08:00:00.000Z', status: 'awaiting approval'}]
    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });
    const classes = useStyles();
    const [Customerls, SetCustomerls] = useState();
    const [Errors, SetError] = useState(false);
    async function fetchData() {  
      const URL = `http://localhost:3000/users/`;
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
      <label className={`${styles.labelhead}`} ><span>Personal Form</span></label>
      <table className={`${styles.section_table}`}>

 <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Given Name</TableCell>
            <TableCell align="right">Family Name</TableCell>
            <TableCell align="right">Sex</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">Passport No.</TableCell>
            <TableCell align="right">Test DD/MM/YYYY</TableCell>
            <TableCell aligh="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Customerlis.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                  {row.given_name}
              </TableCell>
              <TableCell component="th" scope="row" align="right">{row.lastname}</TableCell>
              <TableCell component="th" scope="row" align="right">{row.sex}</TableCell>
              <TableCell component="th" scope="row" align="right">{row.nationality}</TableCell>
              <TableCell component="th" scope="row" align="right"><Link to ={`lists/${row.id}`}>{row.passport_no}</Link></TableCell>
              <TableCell component="th" scope="row" align="right"><Dateformat date ={row.health_evisa_date} /></TableCell>
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

export default Mophlist;