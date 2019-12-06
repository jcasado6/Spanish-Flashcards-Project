let grabhh = document.querySelector('.hh')
let firstSet = document.querySelector('.flashcards1')

let grabAnimals = document.querySelector('.animals')
let secondSet = document.querySelector('.flashcards2')

let grabColors = document.querySelector('.colors')
let thirdSet = document.querySelector('.flashcards3')

grabhh.addEventListener('click', function(evt){
    evt.preventDefault()
    firstSet.style.display = "block"
    secondSet.style.display = "none"
    thirdSet.style.display = "none"
})


grabAnimals.addEventListener('click', function(evt){
    evt.preventDefault()
    secondSet.style.display = "block"
    firstSet.style.display = "none"
    thirdSet.style.display = "none"
})


grabColors.addEventListener('click', function(evt){
    evt.preventDefault()
    thirdSet.style.display = "block"
    secondSet.style.display = "none"
    firstSet.style.display = "none"
})

// let cards = document.querySelectorAll('.card');

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



// let household = [
//     {english: "battery", spanish: "bateria",},
//     {english: "broom", spanish: "escoba"},
//     {english: "computer", spanish: "computadora"},
//     {english: "chair", spanish: "silla"},
//     {english: "soap", spanish: "jabon"},
// ]

// let animals = [
//     {english: "frog", spanish: "rana"},
//     {english: "cat", spanish: "gato"},
//     {english: "dog", spanish: "perro"},
//     {english: "pig", spanish: "cerdo"},
//     {english: "horse", spanish: "caballo"},
// ]

// let colors = [
//     {english: "red", spanish: "rojo",},
//     {english: "blue", spanish: "azul"},
//     {english: "green", spanish: "verde"},
//     {english: "yellow", spanish: "amarillo"},
//     {english: "orange", spanish: "anaranjado"},
// ]

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

// let card1 = document.querySelector('.card1')

// function change (evt) {
//     evt.preventDefault
//     document.querySelector('#front1').innerHTML = household[0].spanish
// }

// function revert (evt) {
//     evt.preventDefault
//     document.querySelector('#front1').innerHTML = household[0].english
// }
// card1.addEventListener('click', change)
// card1.addEventListener('dblclick', revert)



// let card2 = document.querySelector('.card2')

// function change2 (evt) {
//     evt.preventDefault
//     document.querySelector('#front2').innerHTML = household[1].spanish
// }

// function revert2 (evt) {
//     evt.preventDefault
//     document.querySelector('#front2').innerHTML = household[1].english
// }
// card2.addEventListener('click', change2)
// card2.addEventListener('dblclick', revert2)



// let card3 = document.querySelector('.card3')

// function change3 (evt) {
//     evt.preventDefault
//     document.querySelector('#front3').innerHTML = household[2].spanish
// }

// function revert3 (evt) {
//     evt.preventDefault
//     document.querySelector('#front3').innerHTML = household[2].english
// }
// card3.addEventListener('click', change3)
// card3.addEventListener('dblclick', revert3)




// let grabListItems = document.querySelectorAll('li')
// let grabButton = document.querySelector('.nextset')


// let grabImg = document.querySelector('img')
// let grabListFront = document.querySelectorAll('.front')
// let grabListBack = document.querySelectorAll('.back')

    // grabButton.addEventListener("click", function(evt){
    //     evt.preventDefault()
    //     console.log('click')

    //     for (let i = 0; i < grabListItems.length; i++) {
    //         let grabListFront = document.querySelector('#front1')
    //         let grabListBack = document.querySelector('#back1')
    //         console.log(grabListItems)
    //         grabListFront.innerHTML = colors[0].english
    //         grabListBack.innerHTML = colors[0].spanish
    //         grabListFront.style.backgroundColor = 'red'
    //         grabListBack.style.backgroundColor = 'red'
    //         // grabListFront.innerHTML = colors[0].pic
    //         // grabListBack.innerHTML = colors[0].pic
    //         // grabImg.src = colors[0].img
    //     }
    // })

    // grabButton.addEventListener("click", function(evt){
    //     evt.preventDefault()
    //     console.log('click')

    //     for (let i = 0; i < grabListItems.length; i++) {
    //         let grabListFront = document.querySelector('#front2')
    //         let grabListBack = document.querySelector('#back2')
    //         console.log(grabListItems)
    //         grabListFront.innerHTML = colors[1].english
    //         grabListBack.innerHTML = colors[1].spanish
    //         grabListFront.style.backgroundColor = 'blue'
    //         grabListBack.style.backgroundColor = 'blue'
    //     }
    // })

    // grabButton.addEventListener("click", function(evt){
    //     evt.preventDefault()
    //     console.log('click')

    //     for (let i = 0; i < grabListItems.length; i++) {
    //         let grabListFront = document.querySelector('#front3')
    //         let grabListBack = document.querySelector('#back3')
    //         console.log(grabListItems)
    //         grabListFront.innerHTML = colors[2].english
    //         grabListBack.innerHTML = colors[2].spanish
    //         grabListFront.style.backgroundColor = 'green'
    //         grabListBack.style.backgroundColor = 'green'
    //     }
    // })

    // grabButton.addEventListener("click", function(evt){
    //     evt.preventDefault()
    //     console.log('click')

    //     for (let i = 0; i < grabListItems.length; i++) {
    //         let grabListFront = document.querySelector('#front4')
    //         let grabListBack = document.querySelector('#back4')
    //         console.log(grabListItems)
    //         grabListFront.innerHTML = colors[3].english
    //         grabListBack.innerHTML = colors[3].spanish
    //         grabListFront.style.backgroundColor = 'yellow'
    //         grabListBack.style.backgroundColor = 'yellow'
    //     }
    // })

    // grabButton.addEventListener("click", function(evt){
    //     evt.preventDefault()
    //     console.log('click')

    //     for (let i = 0; i < grabListItems.length; i++) {
    //         let grabListFront = document.querySelector('#front5')
    //         let grabListBack = document.querySelector('#back5')
    //         console.log(grabListItems)
    //         grabListFront.innerHTML = colors[4].english
    //         grabListBack.innerHTML = colors[4].spanish
    //         grabListFront.style.backgroundColor = 'orange'
    //         grabListBack.style.backgroundColor = 'orange'
    //     }
    // })

