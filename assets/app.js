// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

let play = document.getElementById('play-button')
play.addEventListener('click',()=>{
    location.href="./game.html"
})

//  another method:
// play.onclick= ()=>{
//     location.href="./game.html"
// };

