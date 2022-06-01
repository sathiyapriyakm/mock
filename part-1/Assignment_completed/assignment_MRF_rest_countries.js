/*Solving problems using array functions on rest countries data.
1.Get all the countries from Asia continent /region using Filter function
2.Get all the countries with a population of less than 2 lakhs using Filter function
3.Print the following details name, capital, flag using forEach function
4.Print the total population of countries using reduce function
5.Print the country which uses US Dollars as currency.
*/

//step 01:create a XHR object,this will create a new object which will interact with servers via api
var request=new XMLHttpRequest();
//step 02:opening a request ,this takes two parameters:"HTTP METHOD","API URL"
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 03:sending a request
request.send();
//step 04:once data successfully loaded from server(status code is 200)
request.onload=function(){
    //the data coming from the server is of type string, so convert it into object type
    var data=JSON.parse(request.response);
  //1.Get all the countries from Asia continent /region using Filter function
   let countryAsia=data.filter((x)=>x.region==="Asia").map((y)=>y.name);
   console.log(countryAsia);
  // 2.Get all the countries with a population of less than 2 lakhs using Filter function
  let populationData=data.filter((x)=>x.population<200000).map((y)=>y.name);
   console.log(populationData);
   //3.Print the following details name, capital, flag using forEach function
   data.forEach(function(current){
   console.log(`Country Name::${current.name}    capital::${current.capital}     Flag::${current.flag}`);
   })
   //4.Print the total population of countries using reduce function
   let totalPopulation=data.reduce((sum,current)=>sum+current.population,0);
   console.log(`Total population of all countries::  ${totalPopulation}`);
   //5.Print the country which uses US Dollars as currency.
   let currencyDollar=data.filter((x)=>x.currencies[0].code==="USD").map((y)=>y.name);
   console.log(currencyDollar);
}