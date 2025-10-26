function isAdmin() {
  return localStorage.getItem('admin') === 'true';
}


const tamanhoNav = document.querySelector('nav#desktop')
const navAdmin = document.querySelector('nav#desktop h3')

const navNormal = document.querySelectorAll('nav#desktop a')

if(isAdmin()){
    navAdmin.style.display = 'flex';
    navNormal.forEach((element) => {
        element.style.display = 'none'
    })
    tamanhoNav.style.width = '10%';
}else{
    navAdmin.style.display = 'none';
    
    navNormal.forEach((element) => {
        element.style.display = 'unset'
    })

    tamanhoNav.style.width = '30%';
}

function logout(admin){
    if(admin){
        let ir = confirm('Deslogar da conta Admin ?');
        if(ir){
            window.location.replace("login.html");
            localStorage.setItem('admin', 'false');
        }
    }else{
        let ir = confirm(`Deslogar da conta  ?`);
        if(ir){
            window.location.replace("index.html");
        }
    }
}

navAdmin.addEventListener('click', () => {
    logout(true)
})


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