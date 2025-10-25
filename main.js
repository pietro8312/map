/* ================= MENU LATERAL ================= */
const btnHam = document.querySelector('span#ham');
let active = false;
const aside = document.querySelector('nav#cel');

function sideShow() {
  if (!active) {
    aside.classList.add('active');
    active = true;
  } else {
    aside.classList.remove('active');
    active = false;
  }
}

// Declarar globalmente o mapa para usar no menu
let map;

btnHam.addEventListener('click', () => {
  sideShow();
  if (map) map.getCenter();
});

window.addEventListener('resize', () => {
  if (active && window.innerWidth > 768) {
    sideShow();
  }
});

/* ================= BACKGROUND DINÂMICO ================= */
const background = document.querySelector('#bg');
const bgs = ['bg-praia.jpg', 'bg-maldivas.jpg', 'bg-embaixo-dagua.jpg'];
let i = 0;

function mudaBg(flag, seta) {
  if (seta) {
    i = (i + 1) % bgs.length;
  } else {
    i = flag;
  }
  background.style.backgroundImage = `url(${bgs[i]})`;
}

const btnsBG = document.querySelectorAll('#btns button');
btnsBG.forEach(btn => {
  btn.addEventListener('click', () => {
    const b = btn.dataset.bg;
    mudaBg(b);
    btnsBG.forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ================= ICONES COLORIDOS ================= */
const icons = {
  red: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  blue: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  yellow: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  black: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  pink: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  grey: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png'
};

function getIcon(cor) {
  return L.icon({
    iconUrl: icons[cor] || icons.red,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
}

/* ================= LOCAL STORAGE ================= */
function salvarPonto(lat, lng, titulo, cor) {
  let pontos = JSON.parse(localStorage.getItem('pontos')) || [];
  pontos.push({ lat, lng, titulo, cor });
  localStorage.setItem('pontos', JSON.stringify(pontos));
}

function carregarPontos() {
  let pontos = JSON.parse(localStorage.getItem('pontos')) || [];
  pontos.forEach(p => {
    L.marker([p.lat, p.lng], { icon: getIcon(p.cor) })
      .addTo(map)
      .bindPopup(`<b>${p.titulo}</b><br>Lat: ${p.lat}<br>Lng: ${p.lng}`);
  });
}

/* ================= DOMCONTENTLOADED ================= */
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o mapa
  map = L.map('map').setView([-13.18, -55.37], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Carrega pontos salvos
  carregarPontos();

  // Inputs e botões
  const inputLat = document.getElementById('lat');
  const inputLng = document.getElementById('lng');
  const inputTitulo = document.getElementById('titulo');
  const selectCor = document.getElementById('cor');
  const btnSelecionar = document.getElementById('selecionar');
  const btnAdicionar = document.getElementById('submit');

  let selecionando = false;

  // Seleção de ponto clicando no mapa
  btnSelecionar.addEventListener('click', () => {
    selecionando = true;
    btnSelecionar.textContent = "🟢 Clique no mapa!";
    btnSelecionar.disabled = true;
  });

  map.on('click', (e) => {
    if (selecionando) {
      inputLat.value = e.latlng.lat.toFixed(6);
      inputLng.value = e.latlng.lng.toFixed(6);
      selecionando = false;
      btnSelecionar.textContent = "📍 Selecionar no mapa";
      btnSelecionar.disabled = false;
    }
  });

  // Adicionar ponto
  btnAdicionar.addEventListener('click', (e) => {
    e.preventDefault();
    const lat = parseFloat(inputLat.value);
    const lng = parseFloat(inputLng.value);
    const titulo = inputTitulo.value.trim();
    const cor = selectCor.value;

    if (!isNaN(lat) && !isNaN(lng) && titulo !== "" && cor !== "default") {
      const marker = L.marker([lat, lng], { icon: getIcon(cor) })
        .addTo(map)
        .bindPopup(`<b>${titulo}</b><br>Lat: ${lat}<br>Lng: ${lng}`)
        .openPopup();

      map.setView([lat, lng], 5);

      salvarPonto(lat, lng, titulo, cor);

      // Limpar campos
      inputLat.value = '';
      inputLng.value = '';
      inputTitulo.value = '';
      selectCor.value = 'default';
    } else {
      alert('Preencha todos os campos e escolha uma cor!');
    }

    location.reload();
  });
});
