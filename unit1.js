console.log('hello')

// let flashcards = document.getElementById('battery')

// flashcards.addEventListener('click', function(){
//     if (!this.classList.contains('on')){
//         this.classList.remove('off');
//         this.classList.add('on');
//     } else {
//         this.classList.remove('on');
//         this.classList.add('off');
//     }
// })

$("#battery").click(function(){
    $(this).toggleClass("flipme");
  });