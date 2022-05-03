//devuelve todos los elementos en el festivales.json
const axios = require('axios');

axios.get('http://localhost:3000/Festivales')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            console.log(`${e.id}, ${e.nombre}, ${e.informacion},${e.fecha}, ${e.foto}, ${e.precio},${e.lugar}`);
        });
    })
    .catch(error => {
        console.log(error);
    });


