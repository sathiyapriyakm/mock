
var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var name=document.getElementById("searchname").value;
var url=`https://api.nationalize.io/?name=${name}`;

nationality(url);
});

async function nationality(url){
try{
    let response=await fetch(url);
    let data=await response.json();
    let country1=document.getElementById("country1");
    let country2=document.getElementById("country2");
    country1.innerHTML="";
    country2.innerHTML="";
    country1.append(`First probable Nationality :${data.country[0].country_id} and the probability is: ${data.country[0].probability}`);
    country2.append(`Second probable Nationality :${data.country[1].country_id} and the probability is: ${data.country[1].probability}`);
}
catch(error){
    console.log(error);
}

}