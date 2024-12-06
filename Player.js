
// Author: Merci and Cynthia
'use strict'
// Blob class to define the blobs
function isNum(val) {
    if( typeof val === 'number' ) {
        return val;
    } else {
        throw new Error('value is not a number');
    }
}
class Blob {
    constructor(color,radius){
        this.color=color;
        this.radius=radius;
        this.domElement= this.setDOM();
        this.setColor(color);
        this.setRadius(radius);
        this.x=0;
        this.y=0;
        this.addToGame();
    }
        //adds the blob to some container
        addToGame( $body = $('<body>')) {
            $body.append(this.domElement);
        }
        // creates a DOM element (the div described above) 
        // and stores it in an instance variable
        setDOM(){
            let $div = $('<div>').addClass('circle');
            return $div;
        }
        // sets the color instance variable and 
        // updates the DOM element's background-color property.
        setColor(color) {
            this.color = color;
            this.domElement.css('background-color', this.color)
        }
        // returns the current color.
        getColor() {
            return this.color;
        }
        // sets the appropriate instance variable(s)
        //needs to update the DOM element's width, 
        //height, left and top properties.
        setRadius(radius){
            this.radius= radius;
            let diameter = 2* this.radius;
            this.domElement.css({
                width: `${diameter}px`,
                height:`${diameter}px`,
                left: `${this.x - this.radius}px`,
                top:`${this.y - this.radius}px`
            });
        }
        // returns current radius 
        getRadius(){
            return this.radius;
        }
        // returns current diameters
        getDiameter(){
            return this.radius*2;
        }
        // change the x coordinate of the center and
        // updates the position of the DOM element 
        //by setting left or top.
        setX(x){
            this.x = x;
            this.domElement.css('left', `${x- this.radius}px`);
        }
        // returns current x coordinate
        getX(){
            return this.x;
        }
         // change the y coordinate of the center and
        // updates the position of the DOM element 
        //by setting left or top.
        setY(y){
            this.y =y;
            this.domElement.css('top', `${y- this.radius}px`);
        }
        // returns the current y coordinate 
        getY(){
            return this.y;
        }
        // returns curent DOM element
        getDOM() {
            return this.domElement;
        }
        // return a string letting you know whether you got 
        //the basic invariants right:
        location() {
            let x = this.getX();
            let y = this.getY();
            let left = parseInt(this.getDOM().css('left'),10);
            let top = parseInt(this.getDOM().css('top'),10);
            let r = this.getRadius();
            let xok = (left+r==x) ? "X OK" : "X WRONG";
            let yok = (top+r==y) ? "Y OK" : "Y WRONG";
            return `radius ${r} center (${x},${y}) w/ DOM elt (${left},${top}): ${xok}, ${yok}`;
        }
        // checks intersection 
        intersects (other) {

            // six uses of the 'isNum' function to make sure all values are defined
            const dx = isNum(this.getX()) - isNum(other.getX());
            const dy = isNum(this.getY()) - isNum(other.getY());
            const r1 = isNum(this.getRadius());
            const r2 = isNum(other.getRadius());
    
            // finally, some real computation
            const distance_squared = (dx * dx + dy * dy);
    
            const rsum = r1+r2;
            const isCloser = (distance_squared <= rsum*rsum);
            return isCloser;
    }
    
        
}

        // function isNum(val) {
        //     if( typeof val === 'number' ) {
        //         return val;
        //     } else {
        //         throw new Error('value is not a number');
        //     }
        // }
        
      
        // intersects (other) {

        //         // six uses of the 'isNum' function to make sure all values are defined
        //         const dx = isNum(this.getX()) - isNum(other.getX());
        //         const dy = isNum(this.getY()) - isNum(other.getY());
        //         const r1 = isNum(this.getRadius());
        //         const r2 = isNum(other.getRadius());
        
        //         // finally, some real computation
        //         const distance_squared = (dx * dx + dy * dy);
        
        //         const rsum = r1+r2;
        //         const isCloser = (distance_squared <= rsum*rsum);
        //         return isCloser;
        // }
        
        
// Function for checking code 
// $(document).ready(function () {
//     const b1 = new Blob('red', 50);
//     const b2 = new Blob('green', 50);
//     b2.setY(100);
//     const b3 = new Blob('orange', 50);
//     b3.setX(100);

//     console.log(b1.location());
//     console.log(b2.location());
//     console.log(b3.location());
//     console.log('Do b1 and b2 intersect?', b1.intersects(b2));
//     console.log('Do b1 and b3 intersect?', b1.intersects(b3));
// });
