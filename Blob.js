// Author: Merci and Cynthia
 // Blob class to define the blobs
class Blob {
    constructor(color,radius){
        this.color=color;
        this.radius=radius;
        let $body = $('<body>');
        addToGame(){ $body.append(this.div)}
        setDOM(){
            let $div = $('<div>');
            this.div= $div;
        }
        setColor(){ 
            x.css('background-color',this.color);
            this.color.css.circle('background-color', '');
        }
        setRadius(){
            this.radius.css.circle('width', '',
                                    'height','',
                                    'left','',
                                    'top', '',
            )
        }
        getColor(){console.log(this.color)}
        getDOM(){console.log(this.div)}
        getDiameter(){this.radius*2}
        getRadius(){ this.radius}
        getX(){}
        getY(){}
        setX(){left+radius == x}
        setY(){ top+radius == y}

    }
     // determines intersectionality of two blobs 
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

// Checks location for x, y values 
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
// determines intersectionality of two blobs 
function isNum(val) {
    if( typeof val === 'number' ) {
        return val;
    } else {
        throw new Error('value is not a number');
    }
}
