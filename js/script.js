const cards = document.querySelectorAll('.card')
const num_parejas = document.querySelector('.container h2 span')
let span_intentos = document.querySelector("#intentos")
let card_1, card_2
let deshabilitarCartas = false
let parejas = 0
let sonidos = document.querySelector("#sonidos")
sonidos.volume = 0.1
let fondo = document.querySelector("#fondo")
fondo.volume = 0.1
let escuchar = document.querySelector("#escuchar")


const sonidoDeFondo = (e)=>{
    if (fondo.volume == 0.0){
         fondo.volume = 0.1
       return escuchar.innerHTML= "Quitar Sonido"
    }
    fondo.volume = 0.0
    return escuchar.innerHTML= "Escuchar Sonido"
}
escuchar.addEventListener("click", sonidoDeFondo)




const sonIguales = (img1, img2)=> {
    intentos ++
    span_intentos.innerHTML = intentos
        
    if (img1 === img2){
        sonidos.src="sonido/success.mp3"
        sonidos.play()
        parejas ++
        num_parejas.innerHTML = parejas
        
        if(parejas === 8){
            sonidos.src="sonido/win.mp3"
            sonidos.play()
            setTimeout(()=>{
                return reiniciarJuego()
            },1000)
        }
        card_1.removeEventListener('click', darVuelta)
        card_2.removeEventListener('click', darVuelta)
        card_1 = card_2 = ""
        
        return deshabilitarCartas=false

    }
    setTimeout(()=>{
        card_1.classList.add('moverse')
        card_2.classList.add('moverse')

        sonidos.src="sonido/lose.mp3"
        sonidos.play()

    },500)

    setTimeout(()=>{
        card_1.classList.remove('moverse', 'vuelta')
        card_2.classList.remove('moverse', 'vuelta')
        card_1 = card_2 = ""
        deshabilitarCartas= false
    },1500)
    
}

const darVuelta = (e) => {
    let card = e.target
    
    if (card !== card_1 && !deshabilitarCartas) {
        card.classList.add('vuelta')
        if (!card_1) {
            return card_1 = card
        }
        card_2 = card
        deshabilitarCartas= true
        let img1 = card_1.querySelector('img').src
        let img2 = card_2.querySelector('img').src
        sonIguales(img1, img2)
    }
  
    
}

const reiniciarJuego = () => {
    fondo.src="sonido/background.mp3"
    fondo.play()
    parejas = 0
    card_1 = card_2 = ""
    deshabilitarCartas = false
    num_parejas.innerHTML = parejas

    let fichas = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    fichas.sort(()=>{
        return Math.random() -0.5
    })
    cards.forEach((card, index) => {
        card.classList.remove('vuelta')
        let img = card.querySelector("img")
        img.src= `img/img-${fichas[index]}.png`
        card.addEventListener('click', darVuelta)
       
    })
}

reiniciarJuego()

cards.forEach(card => {
    card.addEventListener('click', darVuelta)
   
})
