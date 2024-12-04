function isNum(val) {
    if( typeof val === 'number' ) {
        return val;
    } else {
        throw new Error('value is not a number');
    }
}


class Blob{
    color;
    radius;
    x;
    y;
    element;
    constructor(color,radius){
        this.setDom();
        this.addToGame();
        this.setColor(color);
        this.setRadius(radius);
        this.setX(0);
        this.setY(0);
    }
    addToGame(){
        $("body").append(this.element);
    }
    setDom(){
        this.element=$('<div>').addClass('circle');
    }
    setColor(color){
        this.color=color;
        this.element.css("background-color",color);
    }
    setRadius(radius) {
        this.radius = radius;
        this.element.css("width", radius * 2 + "px");
        this.element.css("height", radius * 2 + "px");
        this.element.css("left", (this.x - this.radius) + "px");
        this.element.css("top", (this.y - this.radius) + "px");
    }
    getColor(){
        return this.color;
    }
    getDOM(){
        return this.element;
    }
    getDiameter(){
        return this.radius*2;
    }
    getRadius(){
        return this.radius;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    setX(x) {
        this.x = x;
        this.element.css("left", (this.x - this.radius) + "px");
    }
    setY(y) {
        this.y = y;
        this.element.css("top", (this.y - this.radius) + "px");
    }
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
