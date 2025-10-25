const btnHam = document.querySelector('span#ham');

var active = false
const aside = document.querySelector('nav#cel')

function sideShow(){
    if(active === false){
        aside.classList.add('active')
        active = !active
    }else{
        aside.classList.remove('active')
        active = !active
    }
}

btnHam.addEventListener('click', () => {
    sideShow()
    map.getCenter()
})

window.addEventListener('resize', () => {
    if(active === true && window.innerWidth > 768){
        sideShow()
    }
})

const background = document.querySelector('#bg')

const b1 = 'bg-praia.jpg'
const b2 = 'bg-maldivas.jpg'
const b3 = 'bg-embaixo-dagua.jpg'

bgs = [b1, b2, b3]

let i = 0

function mudaBg(flag, seta){
    if(seta){
        if(i === bgs.length){
            i = 0
        }else{
            i++
        }
    }else{
        i = flag
    }

    background.style.backgroundImage = `url(${bgs[i]})`;
}

const btnsBG = document.querySelectorAll('#btns button')

btnsBG.forEach(btn => {
    btn.addEventListener('click', () => {
        var b = btn.dataset.bg

        mudaBg(b)

        console.log(btnsBG)

        btnsBG.forEach(element => {
            element.classList.remove('active')
        });

        btn.classList.add('active')
    })
});


// mapapapapapa

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o mapa (coordenadas do Brasil como exemplo)
  const map = L.map('map').setView([-13.18, -55.37], 5);

  // Adiciona o mapa base (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

 let selecionando = false; // estado do botão "selecionar"

  const btnSelecionar = document.getElementById('selecionar');
  const inputLat = document.getElementById('lat');
  const inputLng = document.getElementById('lng');
  const form = document.getElementById('form-mapa');

  // Ativa o modo seleção de ponto
  btnSelecionar.addEventListener('click', () => {
    selecionando = true;
    btnSelecionar.textContent = "🟢 Clique no mapa para escolher";
    btnSelecionar.disabled = true; // evita clicar de novo
  });

  // Quando clicar no mapa, preenche os campos e desativa o modo
  map.on('click', (e) => {
    if (selecionando) {
      inputLat.value = e.latlng.lat.toFixed(6);
      inputLng.value = e.latlng.lng.toFixed(6);
      selecionando = false;
      btnSelecionar.textContent = "📍 Selecionar no mapa";
      btnSelecionar.disabled = false;
    }
  });

  // Adiciona marcador quando enviar o form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const lat = parseFloat(inputLat.value);
    const lng = parseFloat(inputLng.value);

    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>${titulo}</b><br>${lat}, ${lng}`).openPopup();

    map.setView([lat, lng], 13);

    form.reset();
  });
});

