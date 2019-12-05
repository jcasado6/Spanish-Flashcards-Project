// console.log('hello')

// let cards = document.querySelector('.flashcards');

// function flipCard() {
//   this.classList.toggle('flip');
// }

// cards.forEach(card => card.addEventListener('click', flipCard));

// var card = document.querySelector('.front');

// card.addEventListener('click', function() {
//     if (!this.classList.contains('on')) {
//         this.classList.remove('off');
//         this.classList.add('on');
//     } else {
//         this.classList.remove('on');
//         this.classList.add('off');
//     }
// });

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


// document.querySelector('.card1').addEventListener('click', function(event){
//     event.preventDefault
//     document.querySelector('#front1').innerHTML = household[0].spanish
// })


// document.querySelector('.card2').addEventListener('click', function(event){
//     event.preventDefault
//     document.querySelector('#back2').innerHTML = household[1].spanish
// })

// document.querySelector('.card3').addEventListener('click', function(event){
//     event.preventDefault
//     document.querySelector('#back3').innerHTML = household[2].spanish
// })

// let array = document.querySelectorAll('.card')
// let newArray = array.from(array)

// function words(){
//     newArray.forEach(i => {
//        i.addEventListener('click', change)
//        i.addEventListener('dblclick', revert)
//         evt.preventDefault()
//         if ()
//     }
// }

let card1 = document.querySelector('.card1')

function change (evt) {
    evt.preventDefault
    document.querySelector('#front1').innerHTML = household[0].spanish
}

function revert (evt) {
    evt.preventDefault
    document.querySelector('#front1').innerHTML = household[0].english
}
card1.addEventListener('click', change)
card1.addEventListener('dblclick', revert)



let card2 = document.querySelector('.card2')

function change2 (evt) {
    evt.preventDefault
    document.querySelector('#front2').innerHTML = household[1].spanish
}

function revert2 (evt) {
    evt.preventDefault
    document.querySelector('#front2').innerHTML = household[1].english
}
card2.addEventListener('click', change2)
card2.addEventListener('dblclick', revert2)



let card3 = document.querySelector('.card3')

function change3 (evt) {
    evt.preventDefault
    document.querySelector('#front3').innerHTML = household[2].spanish
}

function revert3 (evt) {
    evt.preventDefault
    document.querySelector('#front3').innerHTML = household[2].english
}
card3.addEventListener('click', change3)
card3.addEventListener('dblclick', revert3)




let grabListItems = document.querySelectorAll('li')


let grabButton = document.querySelector('button')

    grabButton.addEventListener("click", function(evt){
        evt.preventDefault()
        console.log('click')

        for (let i = 0; i < grabListItems.length; i++) {
            let grabListFront = grabListItems[i].front
            let grabListBack = grabListItems[i].back

            console.log(grabListItems)
            // grabListFront.innerHTML = colors[i].english
            // grabListBack.innerHTML = colors[i].spanish
            
        }
    })
