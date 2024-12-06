// Author: Cynthia and Merci
'use strict'
// Enemy class to define the enemy blobs
class Enemy extends Blob{
    constructor(){
        var randomColor=random.color();
        var randomRadius= random.intBetween(minRadius,maxRadius);
        super (randomColor,randomRadius);
        this.collided=false;
        this.side=null;
    }
     // invoked when a collision happens 
     //and it records that the enemy has collided with
     collide() {
        this.collided = true;
        thePlayer.collide(this);
     }
    //  updates the X and Y location of the center 
    //from the top/left CSS values. 
    updateLocation(){
        const top = parseInt($(this.elt).css('top'),10);
        const left = parseInt($(this.elt).css('left'),10);
        this.x = left + this.radius;
        this.y = top + this.radius;
    }
    //checks for a collision. It's invoked during 
    //the animation of the movement of the enemy. 
    maybeCollide(){
        this.updateLocation();
        if (this.collided) return;
        if (this.intersects(thePlayer)){
            this.collide();
        }
    }

    // takes one argument, a string indicating which 
    //side of the screen the enemy is entering from
    setSide(side){
        this.side=side;
        
        if(this.side === 'top'){
            this.x = random.intBetween(0,window.innerWidth);
            this.y = -this.radius;
        } else if ( this.side === 'right') {
            this.x = window.innerWidth + this.radius;
            this.y = random.intBetween(0,window.innerHeight);
        } else if ( this.side === 'bottom'){
            this.x = random.intBetween(0, window.innerWidth);
            this.y = window.innerHeight+ this.radius;
        } else if ( this.side === 'left') {
            this.x = -this.radius;
            this.y = random.intBetween(0,window.innerHeight);
        }

        this.updateDOM();
    }
    // starts the jQuery animation of this 
    //enemy moving across the board to its final X/Y value
    start(){
        let finalX=0, finalY=0;

        if (this.side === 'top'){
            finalX=this.x;
            finalY = window.innerHeight + this.radius;
        } else if (this.side === 'right'){
            finalX = -this.radius;
            finalY = this.y;
        } else if ( this.side === 'bottom'){
            finalX = this.x;
            finalY = -this.radius;
        } else if (this.side === 'left') {
            finalX = window.innerWidth + this.radius;
            finalY = this.y;
        } 
        // jQuery Animation
        $(this.elt).animate(
            {left: finalX, top : finalY},
            { duration : enemyDuration,
                step:() => this.maybeCollide(),
                complete : () => this.remove(),
            }
        
        );
    }
   // stops the animation and removes 
   //this enemy from the board
    remove() {
        $(this.elt).stop(true);
        $(this.elt).remove();
    }
}

// We can also test what happens during a single step ("frame") of the animation.
// e1 = new Enemy();
// e1.setSide('top');
// Testing updateLocation¶
// e1 = new Enemy();
// Object { elt: {…}, radius: 17, color: "Bisque", x: 0, y: 0, collided: false }

// e1.setRadius(100);
// Object { elt: {…}, radius: 100, color: "Bisque", x: 0, y: 0, collided: false }

// e1.location();
// "radius 100 center (0,0) w/ DOM elt (-100,-100): X OK, Y OK"
// d1 = e1.getDOM()
// Object { 0: div.circle
// , length: 1 }

// d1.css('top', 100).css('left', 200);
// Object { 0: div.circle, length: 1 }

// e1.location();
// "radius 100 center (0,0) w/ DOM elt (200,100): X WRONG, Y WRONG"
// e1.updateLocation();
// undefined
// e1.location();
// "radius 100 center (300,200) w/ DOM elt (200,100): X OK, Y OK"

// Testing Intersection
// e1 = new Enemy();
// e1.setRadius(100);
// e1.getDOM().css('top',0).css('left',0)
// e1.updateLocation();
// thePlayer = new Player('blue',15);
// thePlayer.move(300,300);
// e1.maybeCollide(); // doesn't collide
// thePlayer.move(200,100); // on the right edge of the enemy, definite collision
// e1.maybeCollide(); // does collide, player shrinks
// e1.maybeCollide(); // second collision doesn't count




// random.js
var random = (function () {

    var colors = ["AliceBlue","Aqua","Aquamarine","Bisque","Black","BlanchedAlmond",
//                  "Blue",
                  "BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","ForestGreen","Fuchsia","Gainsboro","Gold","GoldenRod","Green","GreenYellow","HotPink","IndianRed","Indigo","Khaki","Lavender","LawnGreen","LemonChiffon","LightBlue","Lime","LimeGreen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MistyRose","Moccasin","Navy","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Sienna","Silver","SkyBlue","SlateBlue","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","Yellow","YellowGreen"];
    
    function intBelow(max) {
        return Math.floor(Math.random() * max);
    }

    function intBetween(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function arrayElt(array) {
        var index = intBelow(array.length);
        return array[index];
    }

    function color() {
        return arrayElt(colors);
    }

    return {intBetween: intBetween, 
            arrayElt: arrayElt, 
            color: color};
})();
