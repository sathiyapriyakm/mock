
var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
console.log(res);
res.then((data)=>data.json()).then((value)=>console.log(value)).catch((error)=>console.log(error));

//Code for the Rest countries 

var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
res.then((data)=>data.json())
.then((value)=>{
    console.log(value);
    result(value);
})
.catch((error)=>console.log(error));

//CRUD with MockAPI
var url="https://627dfc96b75a25d3f3af44ac.mockapi.io/students";
fetch(url).then((data)=>data.json()).then((res)=>console.log(res));


function result(res){
    let csia=res.filter((ele)=>ele.region==="Asia");
    csia.forEach((element)=>console.log(`Countryname:${element.name} Capital:${element.capital}`))
  //print the sum of the total population in the asia region  
  let sumof=csia.reduce((sum,cv)=>sum+cv.population,0);
    console.log(sumof);
}
//Code for the Covid 19 API
var res=fetch("https://api.covid19api.com/dayone/country/india");
res.then((data)=>data.json())
.then((value)=>{
 result(value);
})
.catch((error)=>console.log(error));


function result(res){
  res.forEach((ele)=>console.log(`ActiveCases:${ele.Active} Deaths:${ele.Deaths} Recovered:${ele.Recovered}`));
}
//print the active,deaths,recovered,confirmed from the day 01  in console