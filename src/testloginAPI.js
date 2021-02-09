
const axios = require('axios');
function getapi() {
  const Params= {
    "clinic_name": "Tunisia Clinic",
    "clinic_registration_number": "12345677",
    "clinic_country": "Tunisia",
    "address": "1234 Tunisia",
    "email": "tunisia@clinic.com",
    "status": "REJECT",
    "phone_no": "DIAL-TUNISIA",
    "clinic_file1": "../../../pdf-test.pdf",
    "clinic_file2": "NULL",
    "clinic_file3": "NULL"
  };
axios
    .put("http://localhost:3000/test-centers/2", Params)
    .then(response => {
      console.log("response: ", response.data);
      console.log("data:", response.data);
      // do something about response
    })
    .catch(err => {
      console.error(err)
    });
}

getapi();