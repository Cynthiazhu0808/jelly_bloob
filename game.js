// Author: Cynthia and Merci
'use strict'
$(elt).animate({left: 500}, options);
$(sel).stop();
// $(document).on('mousemove', function (evt) { ...evt.clientX,evt.clientY... });
//var intervalID = setInterval(function () { ... }, delay_in_milliseconds);
//clearInterval(intervalID);



// a time in milliseconds for the animation to take. 
duration();
//function that jQuery invokes at every step of the animation. 
progress();
//function that jQuery invokes when the animation is done.
complete();
//  button starts the game by invoking the startGame() function.
startGame()//{
    setInterval();
    launnchEnemy();
    //let thePlayer =new Player;
    // $(document).on('mousemove', function (evt) { ...evt.clientX,evt.clientY... });
//}
//stopGame(result) to stop the game. 


let thePlayer ;
let enemyInterval;
const enemyAppearRate=1000;
 // button starts the game by invoking the startGame() function.
 function startGame(){
    $('body').empty();
    thePlayer = new thePlayer( "blue",15);
    thePlayer.move(window.innerWidth/2, window.innerHeight/2);
    $(document).on('mousemove', (evt) => {
        thePlayer.move(evt.clientX, evt.clientY);
    });
    enemyInterval = setInterval(launnchEnemy,enemyAppearRate);
 }

 //stopGame(result) to stop the game. 

 function stopGame(result){
    clearInterval(enemyInterval);
    $('.circle').stop();
    let message;
    if (result === 'win'){
        message= 'You win!!!'
    } else {
        message = 'You lost!!!'
    }
    alert(message);
    location.reload();
 }
 //launchEnemy() to start generating a new enemy every 1 second.
function launchEnemy(){
    const newEnemy= new Enemy();
    const sides = ['top','bottom','left','right'];
    const randomSide = sides[Math.floor(Math.random()* sides.length)];
    newEnemy.setSide(randomSide);
    newEnemy.start();
}

$('start').on('click',() => { startGame();});










//the testProgress testing function in testing.js:
// function testProgress() {
//     $(".circle").remove();      // remove any prior blobs
//     testBlob = new Enemy();
//     testBlob.setX(100);
//     testBlob.setY(100);
//     $(testBlob.getDOM())
//         .animate({ left: 500 },
//                  { duration: 3000,
//                    progress: function () {
//                        testBlob.updateLocation();
//                        console.log("x is now ",testBlob.getX());
//                  }});                                  
// }


