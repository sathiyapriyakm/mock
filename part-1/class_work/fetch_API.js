// var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// console.log(res);
// res.then((data)=>{
//     return data.json();
// }).then((value)=>console.log(value));

// var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// //console.log(res);
// res.then((data)=>data.json()).then((value)=>console.log(value)).catch((error)=>console.log(error));

// function result(res){
//     let asia=res.filter((ele)=>ele.region==="Asia");
//     console.log(asia);
//     asia.forEach((ele1)=>console.log(`country name::${ele1.name}, country capital::${ele1.capital}, country flag::${ele1.flag}`));
//     let totalPopulation=asia.reduce((sum,current)=>sum+current.population,0);
//     console.log(totalPopulation);
// }
//print the sum of total popolation in asia region


// var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// res.then((data)=>data.json())
// .then((value)=>{
//     console.log(value);
//     result(value);
// })
// .catch((error)=>console.log(error));


// function result(res){
//     let asia=res.filter((ele)=>ele.region==="Asia");
//     asia.forEach((element)=>console.log(`Countryname:${element.name} Capital:${element.capital}`))
//     let sumof=csia.reduce((sum,cv)=>sum+cv.population,0);
//     console.log(sumof);
// }


let url="https://627dfc9db75a25d3f3af4510.mockapi.io/students";
fetch(url).then((data)=>data.json()).then((value)=>console.log(value));