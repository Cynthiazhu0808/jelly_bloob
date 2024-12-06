// Author: Merci and Cynthia
'use strict'
// Player class to define the player blob
class Player extends Blob {
    constructor(color,radius){
        super (color,radius);
        this.updatePosition(0,0);
    var winningRadius = window.innerHeight/4; // bigger than this wins
    var losingRadius = 4;                     // smaller than this loses
    var growRadius = 10;                      // grow by this many pixels
    var shrinkRadius = 3;                     // shrink by this many pixels
    }
    // takes an x,y location and moves 
    // the DIV so that the center is in the new location.
    move(x,y) {
        this.updatePosition(x,y);
    }
    // increases the radius by growRadius pixels.
    grow() {
        this.setRadius(this.radius + growRadius);
        this.checkGameEnd();
    }
    // decreases the radius by shrinkRadius pixels
    shrink() {
        this.setRadius(this.radius - shrinkRadius);
         this.checkGameEnd();
    }
    // takes the enemy blob as an argument and 
    // either grows or shrinks the player as appropriate.
    collide(enemyBlob) {
        if ( enemyBlob.radius > this.radius){ this.shrink();}
        else{ this.grow();
            enemyBlob.remove();
        }
    }
    // Method to check whether game should end 
    checkGameEnd(){
                if (this.radius >= winningRadius){ console.log('You win :)');}
                else if (this.radius <= losingRadius) { console.log('You lose :(');}
}
}
// Global variable for the player 
var thePlayer = new Player('blue', 15);



// Testing code
// var thePlayer = new Player('blue', 15);
// thePlayer.move(200,300);
// thePlayer.grow();  // or .shrink()

// To check the collision handling, just create an Enemy, like this:
// bigBad = new Enemy();
// bigBad.setRadius(50);     // bigger than thePlayer
// thePlayer.collide(bigBad);   // big Enemy got me, I gotta shrink

// We can also check eating small prey:
// smallPrey = new Enemy();
// smallPrey.setRadius(10);     // smaller than thePlayer
// thePlayer.collide(smallPrey);  // ate this small Enemy; I will grow



