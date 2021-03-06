import styles from './manage.module.css';
import React, { useState, useEffect, useCallback } from 'react';
import {Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../clinic.png';
import Home from '../../Admin/Home/home';
import ImageViewer from 'react-simple-image-viewer';



// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import { ContactSupportOutlined } from '@material-ui/icons';


function MophTestind ({match}) {

  const token = localStorage.getItem('token');
  const history = useHistory();
  const [Errors, SetError] = useState(false);
  const [Parameters, SetParams] = useState([]);
  const [HasUser, SetHasUser] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'https://www.psrehabclinic.com/wp-content/uploads/2019/11/73375452_137945664209862_6499348467419185152_o.jpg'
  ];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  function onSubmit() {
    const URL = `http://localhost:3000/test-centers/${match.params.testId}`;
    console.log("param",Parameters);
    SetParams(Parameters.map(item => {delete item.id; item.status = "APPROVE"; return item; }));
    console.log("param2", Parameters);
    console.log("param3", Parameters[0]);
    axios
    .put(URL, Parameters[0])
    .then(respse => {
      console.log("response: ", respse.data);
      // do something about response
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
    history.push("/admin/mytestcenter")
  }

  function onReject () {
    const URL = `http://localhost:3000/test-centers/${match.params.testId}`;
    SetParams(Parameters.map(item => {delete item.id; item.status = "REJECT"; return item; }));
    axios
    .put(URL, Parameters[0])
    .then(respt => {
      console.log("response: ", respt.data);
      // do something about response
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
    history.push("/admin/mytestcenter")
  }

  async function fetchData() {  
    const URL = `http://localhost:3000/test-centers/${match.params.testId}`;
    axios
    .get(URL)
    .then(response => {
      console.log("resp", response.data);
      SetParams([...Parameters, response.data]);
    })
    .catch(err => {
      console.error(err);
      SetError(true);
    });
      
  };


  async function fetchUser() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios.get('http://localhost:8000/api/auth/user', config).then(
      res=>{
        SetHasUser(true);
      }
      )
      .catch(
      err => {
        console.log(err);
        SetError(true);
      }
      );
  }


useEffect(() =>{
    fetchData();
    fetchUser();
}, []);


if (Errors) { return <Home /> }
  return (
   <>
   <div className={`${styles.section_containerestest}`}>
     
   <label className={`${styles.labelhead}`} ><span>Check List</span></label>
       
     <div className={styles.card}>
        {Parameters.map((user, index)=>(
          <div>
        <table>
           <tr>
             
             <td width="100">Clinic Name:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.clinic_name}</div></td>
             <td width="100">Clinic Address:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.address}</div></td>
            
           </tr>
           <tr>

             <td width="100">Country</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.clinic_country}</div></td>
             <td width="100">Clinic Registration Number:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.clinic_registration_number}</div></td>
           </tr>
           <tr>
             <td width="100">Phone:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.phone_no}</div></td>
             <td width="100">Email:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.email}</div></td>
           </tr>
           
         </table>
         <div className={`${styles.section_containerhead}`} >Clinic Document:</div>
         <div className={`${styles.section_center}`}><Link to={`${user.clinic_file_path}`} target="_blank" download>Download</Link></div>
         
         <div className={`${styles.preview}`}> <img className={`${styles.previewThumbnail}`} src={logo} /> </div>
         <div className={`${styles.preview}`}><div className={`${styles.previewThumbnail}`}>
         
        <img
          src={`${user.clinic_file_path}`}
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""/>
    

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
        />
      )}
           </div></div>
    
          <div className={`${styles.section_foot}`} >Clinic Registration File</div>

         
         </div>
        
         ))} 

         
         
     </div>

     
    <div>
     <button className={`${styles.button}`} onClick={onSubmit} >APPROVE</button>
     <button className={`${styles.button}`} onClick={onReject}>REJECT</button>
    </div>
    
   </div>
   </>
  );
}

export default MophTestind;