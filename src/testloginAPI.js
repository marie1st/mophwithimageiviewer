var axios = require('axios');
params = {email: 'marie@test.com', password: '123456'};
const response = axios.post("/login", params);
console.log(response);