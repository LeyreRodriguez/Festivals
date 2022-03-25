const axios = require('axios');

axios.put('http://localhost:3000/Festivales/6/',{
    id: 7,
    name: 'Fredddie'
}).then(resp => {

    console.log(resp.data);
}).catch(error => {

    console.log(error);
});