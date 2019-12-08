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

