const loadProduct = async function() {
    await $.getJSON("json/festivales.json", function(json) {
        Object.entries(json.Festivales).forEach((entry) => {
            const [key, f] = entry;
            console.log(f);

            const div = document.createElement('div');
            const div1 = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');

            div.setAttribute('class', 'festival123');
            div1.setAttribute('class', 'datos');
            img.setAttribute('src', f.foto);
            p.textContent = f.nombre;
            p1.textContent = f.lugar;
            p2.textContent = f.fecha;
            p3.textContent = f.precio;

            div.appendChild(div1);
            div1.appendChild(img);
            div1.appendChild(p);
            div1.appendChild(p1);
            div1.appendChild(p2);
            div1.appendChild(p3);
            var sec = document.getElementById('filtro');
            sec.appendChild(div);
        })
    })
}

loadProduct();