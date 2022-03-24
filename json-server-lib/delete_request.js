const axios = require('axios');

axios.delete('http://localhost:3000/people/1/')
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log("el usuario con ese id no existe");
    });