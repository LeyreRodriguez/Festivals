const loadFestival = async function() {
    await $.getJSON("json/festivales.json", function(json) {
        Object.entries(json.Festivales).forEach((entry) => {
            const [key, f] = entry;
            console.log(f);

            const div = document.createElement('div');
            const div1 = document.createElement('div');
            const a = document.createElement('a');
            const img = document.createElement('img');
            const p = document.createElement('p');


            div.setAttribute('class', 'festival123');
            div1.setAttribute('class', 'datos');
            a.setAttribute('href',"Festival.html" );
            img.setAttribute('src', f.foto);
            p.textContent = `${f.nombre}, ${f.lugar}, ${f.fecha}, ${f.precio}` ;


            div.appendChild(div1);
            div1.appendChild(a);
            a.appendChild(img);
            div1.appendChild(p);
            var sec = document.getElementById('filtro');
            sec.appendChild(div);
        })
    })
}
loadFestival();




