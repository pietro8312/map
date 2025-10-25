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
    })
});