
//write a class to calculate uber price.

//DETAILS
/*the first 3km or default price is Rs.50
every additional km is Rs.14
and every minute of waiting is Rs.2. 
fare=50+(14*(distance-3))+(waitime*2)*/

class Uber{
    // Initialization of values using constructor
    constructor(distance,waittime){
        if(distance===undefined)
        this.distance=3;// dafault value when distance covered is less or not given
        else this.distance=Math.ceil(distance);
     if(waittime===undefined)
        this.waittime=0;//default value of wait time when wait time is not provided
        else  this.waittime=Math.ceil(waittime);
    }
    uberPrice(){//this method calculates the cost of the ride and gives it back
        let price=0;
        if((this.distance<=3)&&(this.waittime===0))
            price=50;//default price of ride when distance covered is less than 3km and no waiting time
        else if(this.distance<=3)
            price=Math.round((50+(this.waittime*2)));// price of ride when distance covered is less than 3km and with waiting time
        else
        price= Math.round(50+(14*(this.distance-3))+(2*this.waittime));// price of ride when distance covered is more than 3km  with waiting time

        return `Price for ride of distance::${this.distance}km  with waiting time ::${this.waittime}minutes is:: Rs.${price}`;
    }
}
let ride1=new Uber();//creating object with default values 3km and zero wait time
console.log(ride1.uberPrice());

let ride2=new Uber(5.67);//creating object with no waiting time
console.log(ride2.uberPrice());

let ride3=new Uber(2.78,10.34);//creating ride with distance less than default and wait time
console.log(ride3.uberPrice());

let ride4=new Uber(10.45,5.30);//creating object with distance more than default distance  and with waiting time
console.log(ride4.uberPrice());
console.log(ride4);

/*
OUTPUT:

Price for ride of distance::3km  with waiting time ::0minutes is:: Rs.50
Price for ride of distance::6km  with waiting time ::0minutes is:: Rs.92
Price for ride of distance::3km  with waiting time ::11minutes is:: Rs.72
Price for ride of distance::11km  with waiting time ::6minutes is:: Rs.174
Uber { distance: 11, waittime: 6 }

*/
