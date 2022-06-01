//Write a “person” class to hold all the details.
class Person{
    //initializing the object with  person details through constructor
    constructor(name,age,gender,city,state,nationality){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.city=city;
        this.state=state;
        this.nationality=nationality;
    }
getDetails(){
// providing details of the person through getDetails() method
    return `Name::${this.name}
    Age::${this.age}
    Gender::${this.gender}
    City::${this.city}
    State::${this.state}
    Nationality::${this.nationality}`;
}

}
let person1=new Person("Sathya",30,"Female","Erode","TamilNadu","India");
let person2=new Person("Sajna",32,"Female","Palakkad","Kerala","India");
let person3=new Person("vijay",30,"Male","Nellore","Andra Pradesh","India");
//getting details of each person by instance method getDetails()
console.log(person1.getDetails());
console.log(person2.getDetails());
console.log(person3.getDetails());

/* OUTPUT:
Name::Sathya
    Age::30
    Gender::Female
    City::Erode
    State::TamilNadu
    Nationality::India
Name::Sajna
    Age::32
    Gender::Female
    City::Palakkad
    State::Kerala
    Nationality::India
Name::vijay
    Age::30
    Gender::Male
    City::Nellore
    State::Andra Pradesh
    Nationality::India*/
