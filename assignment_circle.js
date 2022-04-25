
//creation of class circle with radius and color as properties
class Circle{
    // Initialization of property values using constructor
    constructor(radius,color){
        if(radius===undefined)
        this.radius=1.0;// dafault value when radius parameter is not provided
        else this.radius=radius;
     if(color===undefined)
        this.color="red";//default value when color is not provided during constructor call
        else  this.color=color;
    }
getRadius(){//this method gives the radius of instantiated object of circle
    return this.radius;
}
setRadius(rad){//this method sets the radius of instantiated object of circle to given value
    this.radius=rad;
    return this.radius;
}
getColor(){//this method gives the color of instantiated object of circle
    return this.color;
}
setColor(col){//this method sets the color of object of circle to given value
    this.color=col;
    return this.color;
}
toString(){//this method gives string describing radius and color of object for circle
    return `Radius of Circle: ${this.radius.toString()} and Color of Circle:${this.color.toString()}`;
}
getArea(){//this function calculates and gives the area of the object for circle
    return  3.14*Math.pow(this.radius,2);
}
getCircumference(){//this function calculates and gives the circumference of the object for circle
    return  2*3.14*this.radius;
}

}
let c1=new Circle();//creation of object with default value for radius and color
let c2=new Circle(4);//creation of object providing radius parameter and default value for color
let c3=new Circle(6,"green");//creation of object providing both radius and color parameters
console.log(c1);
console.log(c2);
console.log(c3);
console.log(`getRadius::${c3.getRadius()}`);
console.log(`setRadius::${c3.setRadius(7)}`);
console.log(`getColor::${c3.getColor()}`);
console.log(`setColor::${c3.setColor("blue")}`);
console.log(c3.toString());
console.log(`getArea::${c3.getArea()}`);
console.log(`getCircumference::${c3.getCircumference()}`);

/*
OUTPUT:

Circle { radius: 1, color: 'red' }
Circle { radius: 4, color: 'red' }
Circle { radius: 6, color: 'green' }
getRadius::6
setRadius::7
getColor::green
setColor::blue
Radius of Circle: 7 and Color of Circle:blue
getArea::153.86
getCircumference::43.96

*/
