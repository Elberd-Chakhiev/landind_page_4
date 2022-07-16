

const menu = document.querySelector('#main_menu')
const triggers = document.querySelectorAll('.open-close')

for (let index = 0; index < triggers.length; index++) {
    triggers[index].addEventListener('click', ()=> {
        menu.classList.toggle('md:-translate-x-full')
    })
}

// let cardNum = '1234567891234567'
// let cardHiddenNum = []

// const getHiddenCard = (card, index) => {
//     card.split('')
//     return card[index] = '*'
// }

// for (let index = 0; index < cardNum.length; index++) {
//     if(index < 12) cardHiddenNum.push(getHiddenCard(cardNum, index)) 
//     else cardHiddenNum.push(cardNum[index])
// }

// console.log(cardHiddenNum.join(''))