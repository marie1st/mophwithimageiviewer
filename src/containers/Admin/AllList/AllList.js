import React, {useState, useEffect} from 'react'
import styles from './AllList.module.css'
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
import {Link} from 'react-router-dom';
import axios from 'axios';
//import { SearchBox } from '../../../../../src/components/Input/SearchBox'
//import { Calendar } from '../../../../../src/components/Input/Calendar'


/**
 * Define each field of headers
 */
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const AllList = () => {
  const Spacer = require('react-spacer');
  const [rows, SetRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();

async function fetchData() {
  axios
    .get("http://localhost:3000/users/")
    .then(response => {
      console.log("response: ", response.data);
      SetRows(response.data);
      // do something about response
    })
    .catch(err => {
      console.error(err)
    });
}
useEffect(() =>{
    fetchData();
}, [])

const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  }

  return (
        <div className={`${styles.wrapperHeader}`}>
            <div className={`${styles.wrapperHeaderContent} font-xl weight-md`}>
              รายงานรายชื่อนักท่องเที่ยวที่ขอทำ Health-Evisa
              <Spacer width="24px" />
              
            </div>
        

        
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>วันที่</TableCell>
            <TableCell align="right">หมายเลขพาสปอร์ต</TableCell>
            <TableCell align="right">ชื่อ-นามสกุล</TableCell>
            <TableCell align="right">สถานะ</TableCell>
            <TableCell align="right">ดูรายละเอียด</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <Dateformat date = {row.created_at}/>
              </TableCell>
              
              <TableCell align="right"><Link to ={`lists/${row.id}`}>{row.passport_no}</Link></TableCell>
              
              <TableCell align="right">{row.given_name + " " + row.middlename + " " + row.lastname}</TableCell>
              <TableCell align="right">{row.health_evisa}</TableCell>
              <TableCell align="right"><Dateformat date ={row.health_evisa_date} /></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    

    </div>

  )
}
