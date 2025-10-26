/* ================= ICONES SVG (inline) ================= */
// Each entry is an HTML string containing an inline SVG. We use L.divIcon so the
// SVG is embedded in the DOM (no external requests / CORS issues).
const icons = {
    red: `<svg viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pin_fill_rounded_circle [#f00629]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-423.000000, -5399.000000)" fill="#f00"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M374,5248.219 C372.895,5248.219 372,5247.324 372,5246.219 C372,5245.114 372.895,5244.219 374,5244.219 C375.105,5244.219 376,5245.114 376,5246.219 C376,5247.324 375.105,5248.219 374,5248.219 M374,5239 C370.134,5239 367,5242.134 367,5246 C367,5249.866 370.134,5259 374,5259 C377.866,5259 381,5249.866 381,5246 C381,5242.134 377.866,5239 374,5239" id="pin_fill_rounded_circle-[#f00629]"> </path> </g> </g> </g> </g></svg>`,
 
    //feito
    blue: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#269" d="M33.398 23.678c-7.562 4.875-20.062-.438-18.375-8.062c1.479-6.684 9.419-4.763 11.225-3.861c1.806.902.713-3.889-3.475-5.327C17.1 4.48 10.156 4.893 7.961 14.678c-1.5 6.687 1.438 16.062 12.719 16.187c11.281.125 12.718-7.187 12.718-7.187z"></path><path fill="#55ACEE" d="M35.988 25.193c0-2.146-2.754-2.334-4-1.119c-2.994 2.919-7.402 4.012-13.298 2.861c-10.25-2-10.341-14.014-3.333-17.441c3.791-1.854 8.289.341 9.999 1.655c1.488 1.143 4.334 2.66 4.185.752C29.223 7.839 21.262-.86 10.595 4.64C-.071 10.14 0 22.553 0 24.803v7.25C0 34.262 1.814 36 4.023 36h28C34.232 36 36 34.262 36 32.053c0 0-.004-6.854-.012-6.86z"></path></g></svg>`,

    //feito
    yellow: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path fill="#595959" d="M12.3091239,50.1598263 C12.3091239,50.1598263 22.4770165,36.8610794 12.7878591,11.0149167 C12.7878591,11.0149167 51.8367756,8.95967817 50.3636496,53.098079"></path> <path fill="#5EA7FF" d="M0,43.813533 L4.7921896,47.4076752 C6.56381436,48.7363938 9.34804459,48.633994 11.0130574,47.1771078 L12.9869426,45.4499583 C14.6510082,43.9939008 17.3480446,43.9930721 19.0130574,45.4499583 L20.9869426,47.1771078 C22.6510082,48.6331653 25.3480446,48.633994 27.0130574,47.1771078 L28.9869426,45.4499583 C30.6510082,43.9939008 33.3480446,43.9930721 35.0130574,45.4499583 L36.9869426,47.1771078 C38.6510082,48.6331653 41.3480446,48.633994 43.0130574,47.1771078 L44.9869426,45.4499583 C46.6510082,43.9939008 49.3480446,43.9930721 51.0130574,45.4499583 L52.9869426,47.1771078 C54.6510082,48.6331653 57.4302397,48.7408533 59.2078104,47.4076752 L64,43.813533 L64,59.813533 L0,59.813533 L0,43.813533 Z"></path> </g> </g></svg>`,

    //feito
    black: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,

    //feito
    pink: `<svg viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2"></g> <g id="Layer_3"></g> <g id="Layer_4"></g> <g id="Layer_5"></g> <g id="Layer_6"></g> <g id="Layer_7"></g> <g id="Layer_8"></g> <g id="Layer_9"></g> <g id="Layer_10"></g> <g id="Layer_11"></g> <g id="Layer_12"></g> <g id="Layer_13"></g> <g id="Layer_14"></g> <g id="Layer_15"></g> <g id="Layer_16"> <g> <path d="M31,15c0,4.4-3.5,8.1-8.3,8.9c0,0-0.1,0-0.1,0L19.7,24H8c-3.9,0-7-3.1-7-7s3.1-7,7-7 c1.4,0,2.8,0.4,3.9,1.2C13.5,8.1,17.1,6,21,6C26.5,6,31,10,31,15z" fill="#607C8B"></path> </g> <g> <path d="M26.9,16.9l-7.2,13.6c-0.2,0.3-0.5,0.5-0.9,0.5c-0.1,0-0.2,0-0.3,0c-0.5-0.1-0.8-0.6-0.7-1.1l1.1-8.9H14 c-0.4,0-0.7-0.2-0.9-0.5c-0.2-0.3-0.2-0.7,0-1l6-10c0.2-0.4,0.7-0.6,1.1-0.5c0.4,0.1,0.7,0.5,0.7,1v5.4h5c0.3,0,0.7,0.2,0.9,0.5 S27,16.6,26.9,16.9z" fill="#FFC10A"></path> </g> </g> <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g> <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g> <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"></g> <g id="Wearher"></g> </g></svg>`,

    grey: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="46" viewBox="0 0 30 46" aria-hidden="true">
           <path d="M15 0C9 0 4 5 4 11c0 8 11 25 11 25s11-17 11-25C26 5 21 0 15 0z" fill="#7f8c8d"/>
           <circle cx="15" cy="11" r="4" fill="#fff"/>
         </svg>`
};

function getIcon(cor) {
  // Use a divIcon so the SVG is embedded as HTML. This avoids external image fetching
  // and makes it easy to style/animate the SVG if needed.
  const html = icons[cor] || icons.red;
  return L.divIcon({
    className: 'leaflet-div-icon-svg',
    html: html,
    iconSize: [30, 46],
    iconAnchor: [15, 46],
    popupAnchor: [0, -40]
  });
}

/* ================= LOCAL STORAGE ================= */
function salvarPonto(id, lat, lng, titulo, cor) {
  let pontos = JSON.parse(localStorage.getItem('pontos')) || [];
  pontos.push({ id, lat, lng, titulo, cor });
  localStorage.setItem('pontos', JSON.stringify(pontos));
}

function removerPontoDoStorage(id) {
  let pontos = JSON.parse(localStorage.getItem('pontos')) || [];
  pontos = pontos.filter(p => p.id !== id);
  localStorage.setItem('pontos', JSON.stringify(pontos));
}


// Read admin status from localStorage so login done on another page is respected
function isAdmin() {
  return localStorage.getItem('admin') === 'true';
}

/* ================= MARCADORES ================= */
function criarMarcador(p) {
  const marker = L.marker([p.lat, p.lng], { icon: getIcon(p.cor) }).addTo(map);
  marker._pid = p.id;
  marker.bindPopup(`<b>${p.titulo}</b><br>Lat: ${p.lat}<br>Lng: ${p.lng}`);

  marker.on('click', () => {
    console.log('admin', isAdmin());
    if (isAdmin()) {
        const confirmar = confirm(`Remover o marcador "${p.titulo}"?`);
        if (confirmar) {
            map.removeLayer(marker);
            removerPontoDoStorage(marker._pid);
        }
    }
  });

  return marker;
}

function carregarPontos() {
  let pontos = JSON.parse(localStorage.getItem('pontos')) || [];
  pontos.forEach(p => {
    criarMarcador(p);
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
      const id = Date.now(); // id único
      criarMarcador({ id, lat, lng, titulo, cor });
      salvarPonto(id, lat, lng, titulo, cor);

      map.setView([lat, lng], 5);

      // Limpar campos
      inputLat.value = '';
      inputLng.value = '';
      inputTitulo.value = '';
      selectCor.value = 'default';
    } else {
      alert('Preencha todos os campos e escolha uma cor!');
    }
  });
});