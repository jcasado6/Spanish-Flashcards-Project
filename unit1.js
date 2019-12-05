// console.log('hello')

// let cards = document.querySelector('.flashcards');

// function flipCard() {
//   this.classList.toggle('flip');
// }

// cards.forEach(card => card.addEventListener('click', flipCard));

// //Query Selector to grab elements that need to be changed:
// //Changing class and id name to be dynamic selector
//     //ie: #battery = #card1 or class #batter = .card

// let grabCards = document.querySelectorAll(".cards")
// // iterate over the returned array 
// // utilize dom manipulation to handle changing content accordlying 

// // handle style changes with something like this:
// grabCards[i].style.background = 'blue'

//eventlistner on a button called next
// next button shifts all the cards content to next set of data
// eventlistner that is able to grab all innerText and change to something else



let household = [
    {english: "battery", spanish: "bateria"},
    {english: "broom", spanish: "escoba"},
    {english: "computer", spanish: "computadora"},
    {english: "chair", spanish: "silla"},
    {english: "soap", spanish: "jabon"},
]

let animals = [
    {english: "frog", spanish: "rana"},
    {english: "cat", spanish: "gato"},
    {english: "dog", spanish: "perro"},
    {english: "pig", spanish: "cerdo"},
    {english: "horse", spanish: "caballo"},
]

let colors = [
    {english: "red", spanish: "rojo"},
    {english: "blue", spanish: "azul"},
    {english: "green", spanish: "verde"},
    {english: "yellow", spanish: "amarillo"},
    {english: "orange", spanish: "anaranjado"},
]

// let grabCards = document.querySelector('.card1')
// console.log(grabCards)

// grabCards.addEventListener('click', function(event){
//     event.preventDefault
//     document.querySelector('.front').innerHTML = animals[0].english
// })

document.querySelector('.card1').addEventListener('click', function(event){
    event.preventDefault
    document.querySelector('.back').innerHTML = household[0].spanish
})


document.querySelector('.card2').addEventListener('click', function(event){
    event.preventDefault
    document.querySelector('#front2').innerHTML = household[1].english
})

document.querySelector('.card2').addEventListener('click', function(event){
    event.preventDefault
    document.querySelector('#back2').innerHTML = household[1].spanish
})