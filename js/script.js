const cards = document.querySelectorAll('.card')
let card_1, card_2

const darVuelta = (e) => {
    let card = e.target
    card.classList.add('vuelta')
    if (card !=== )
    if (!card_1) {
        return card_1 = card
    }
    card_2 = card
    console.log(card_1, card_2)
}

cards.forEach(card => {
    card.addEventListener('click', darVuelta)
   
})
