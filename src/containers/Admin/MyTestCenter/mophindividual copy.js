import styles from './TestCenter.module.css';
import React, { useState, useEffect, useCallback } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import logo from '../../../covid19.jpg';
import logo1 from '../../../covid19.jpg';
import logo2 from '../../../fittofly.png';
import Dateformat from '../../../dateformat';
import Home from '../../Admin/Home/home';
import ImageViewer from 'react-simple-image-viewer';
import Checkbox from '../../../components/Checkbox/checkbox';

// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';


function Mophindividual({match}) {

  const token = localStorage.getItem('token');
  const history = useHistory();
  const [Errors, SetError] = useState(false);
  const [Parameters, SetParams] = useState([]);
  const [HasUser, SetHasUser] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [CovidApprove, SetCovidApprove] = useState({checked: "PENDING"});
  const [Covid, SetCovidtest] = useState({covid: 'PENDING'});
  const [FitApprove, SetFitApprove] = useState({checked: "PENDING"});
  const [FitFly, SetFitFlytest] = useState({fit: 'PENDING'});
 

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


  //const UserList = [{clinic_name: 'Niranam Clinic', country: 'Outside Thailand', address: 'Street of Philadelphia, PA, USA', email: 'clinicanonymous@test.clinic', phone_no: 'DIAL-AMERICA-080',  status: 'awaiting approval', clinic_registration_number: '123456678', clinic_file_path: '../../../pdf-test.pdf', clinic_photo_path: '../../../clinic.png'}];

  function onSubmit() {
    const URL = `http://localhost:3000/drlink-user-views/${match.params.userId}`;
    SetParams(Parameters.map(item => {delete item.user_id; item.status = "APPROVE"; item.status_covid = "APPROVE"; item.status_fit = "APPROVE"; return item; }));
    console.log("param",Parameters);
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
    const URL = `http://localhost:8001/api/UserDetails/${match.params.userId}`;
    SetParams(Parameters.map(item => {delete item.user_id; item.status = "REJECT"; item.status_covid = "APPROVE"; item.status_fit = `${FitApprove.checked}`; return item; }));
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
    const URL = `http://localhost:8001/api/UserDetails/${match.params.userId}`;
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
             
             <td width="150">Given Name:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.given_name}</div></td>
             <td width="150">Nationality:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.nationality}</div></td>
            
           </tr>
           <tr>

             <td width="150">Family Name:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.lastname}</div></td>
             <td width="150">Passport Number:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.passport_no}</div></td>
           </tr>
           <tr>
             <td width="150">Middle Name:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.middlename}</div></td>
             <td width="150">Arrival Date:</td>
             <td width="150"><div className={`${styles.button_display}`}><Dateformat date={user.arrival_date} /></div></td>
           </tr>
           <tr>
             <td width="150">Other Names:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.other_name}</div></td>
             <td width="150">Departure Date:</td>
             <td width="150"><div className={`${styles.button_display}`}><Dateformat date={user.departure_date} /></div></td>
           </tr>
           <tr>
             <td width="150">Sex:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.sex}</div></td>
             <td width="150">Flight:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.flight}</div></td>
           </tr>
           <tr>
             <td width="150">Date of Birth:</td>
             <td width="150"><div className={`${styles.button_display}`}><Dateformat date={user.date_of_birth} /></div></td>
             <td width="150">City:</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.city}</div></td>
           </tr>
           <tr>
             <td width="150">Country of Birth</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.country_of_birth}</div></td>
             <td width="150">Hotel</td>
             <td width="150"><div className={`${styles.button_display}`}>{user.accommodation1}</div></td>
           </tr>
           
         </table>
         <div className={`${styles.section_containerhead}`} >Test Examination Result</div>
         <div className={`${styles.section_center}`}><Link to={`${user.covid_file_path}`} target="_blank" download>Download</Link></div>
         
         <div className={`${styles.previewer}`}> <img className={`${styles.previewThumbnail}`} src={logo1} /> </div>
         <div classNmae={`${styles.previewjs}`}><div className={`${styles.previewThumbnail}`}>
         
        <img
          src={`${user.covid_photo_file_path}`}
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '150px' }}
          alt=""/>
  

      {isViewerOpen && (
        <ImageViewer
          src={`${user.covid_photo_file_path}`}
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
        />
      )}
           </div></div>
          <div className={`${styles.section_footer}`} >Covid-19 Test Certification Form</div>
          <div className={`${styles.section_checkbox}`}>
           <input className={`${styles.checkbox}`} type="radio" value="APPROVE" name="covid" onChange={e=>{SetCovidApprove({...CovidApprove, checked: e.target.value})}}></input><label>APPROVE</label>
           <input className={`${styles.checkbox}`} type="radio" value="REJECT" name="covid" onChange={e=>{SetCovidApprove({...CovidApprove, checked: e.target.value})}}></input><label>REJECT</label>
          </div> 
          <div className={`${styles.section_center}`}><Link to={`${user.fit_file_path}`} target="_blank" download>Download</Link></div>
          
         <div className={`${styles.previewer}`}> <img className={`${styles.previewThumbnail}`} src={logo2} /> </div>
         <div classNmae={`${styles.previewjs}`}><div className={`${styles.previewThumbnail}`}>
         
         <img
           src={`${user.fit_photo_file_path}`}
           onClick={ () => openImageViewer(index) }
           width="300"
           key={ index }
           style={{ margin: '150px' }}
           alt=""/>
   
 
       {isViewerOpen && (
         <ImageViewer
           src={`${user.fit_photo_file_path}`}
           currentIndex={ currentImage }
           onClose={ closeImageViewer }
         />
       )}
            </div></div>
          <div className={`${styles.section_footer}`} >Fit-to-Fly Form</div>
          <div className={`${styles.section_checkbox}`}>
           <input className={`${styles.checkbox}`} type="radio" value="APPROVE" name="fit" onChange={e=>{SetFitApprove({...FitApprove, checked: e.target.value})}}></input><label>APPROVE</label>
           <input className={`${styles.checkbox}`} type="radio" value="REJECT" name="fit" onChange={e=>{SetFitApprove({...FitApprove, checked: e.target.value})}}></input><label>REJECT</label>
          </div> 
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
export default Mophindividual;