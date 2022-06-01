//class with following three properties:title,  String representing the title of the movie,studio, 
// String representing the studio that made the movie and rating, String representing the rating of the movie (i.e. PG­13, R, etc)
class Movie{
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
// and a String representing the rating as its arguments, and sets the respective class properties to these values.
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
        if(rating===undefined)
        this.rating="PG";//assigning default rating as "PG", when the rating is not provided as the parameter
        else  this.rating=rating;
    }
//c) Write a method getPG, which takes an array of base type Movie as its argument,
// and returns a new array of only those movies in the input array with a rating of "PG".
static getPG(arr){
   let data=arr.filter((x)=>x.rating==="PG");//providing the details of films whose rating is "PG"
    return data;
}
}
let film1=new Movie("Manithan","AVM");
let film2=new Movie("Ice Age","walt disney","R");
let film3=new Movie("The Avengers","The Marvel","R");
let film4=new Movie("Avengers Infinity War","The Marvel");
let film5=new Movie("Avengers End Game","The Marvel");
let film6=new Movie("Doctor strange","Marvel studio");
let arr1=[film1,film2,film3,film4,film5,film6];
//getting the list of movies with rating "PG" with getPG() method
console.log(Movie.getPG(arr1));
//d) Write a piece of code that creates an instance of the class 
//Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let film=new Movie("Casino Royale","Eon Productions","PG­13");
console.log(film);

/*
OUTPUT:

[
  Movie { title: 'Manithan', studio: 'AVM', rating: 'PG' },
  Movie {
    title: 'Avengers Infinity War',
    studio: 'The Marvel',
    rating: 'PG'
  },
  Movie {
    title: 'Avengers End Game',
    studio: 'The Marvel',
    rating: 'PG'
  },
  Movie {
    title: 'Doctor strange',
    studio: 'Marvel studio',
    rating: 'PG'
  }
]

Movie {
  title: 'Casino Royale',
  studio: 'Eon Productions',
  rating: 'PG­13'
}


*/