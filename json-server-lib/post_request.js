const axios = require('axios');

axios.post('http://localhost:3000/people', {
    nombre: 'Fred',
    informacion: 'Primavera Sound es un festival espa',
    foto: 'https://nrfmagazine.com/wp-content/uploads/2022/01/Cochachella-2022_nrfmagazine.jpg',
    fecha: '24/3/2021',
    precio: ' 4€/dia',
    lugar: 'Madrid',
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});
