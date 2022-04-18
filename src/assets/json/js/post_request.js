//crea un nuevo elemento en festivales.json
const axios = require('axios');

axios.post('http://localhost:3000/Festivales', {
    nombre: 'Festival del Timple',
    informacion: 'Festival que admira la creación, modificación y utilización de este maravilloso instrumento',
    foto: 'https://i1.wp.com/actualidadtenerife.es/wp-content/uploads/2021/09/Timpleando-La-Palma.jpg?fit=1500%2C2121&ssl=1',
    fecha: '24/3/2023',
    precio: ' 4€',
    lugar: 'La Palma',
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});
