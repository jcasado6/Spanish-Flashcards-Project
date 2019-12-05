console.log('hello')

let cards = document.querySelector('.flashcards');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));