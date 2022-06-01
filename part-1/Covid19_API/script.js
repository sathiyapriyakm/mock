function creatingElement(tagname,classname,idname,content){
let ele=document.createElement(tagname);
ele.setAttribute("class",classname);
ele.setAttribute("id",idname);
ele.innerHTML=content;
return ele;
}
let div1=document.createElement("div");
let div2=creatingElement("div","container","","");
let div3=creatingElement("div","row","","");
let h1=creatingElement("h1","text-center","title","Covid19 Tracker");
div3.append(h1);
let p1=creatingElement("p","text-center","","Gives info on impact of COVID in a particular country");
let div4 =creatingElement("div","row mb-4","","")
let form=creatingElement("form","","myform","");
let input1=creatingElement("input","","country","");
input1.setAttribute("type","text");
input1.setAttribute("placeholder","type a country");
input1.setAttribute("required",true);
let input2=creatingElement("input","","submit","");
input2.setAttribute("type","submit");
input2.setAttribute("value","Search");
form.append(input1,input2);
div4.append(form);
let div5=creatingElement("div","card","card","");
let div6=creatingElement("div","card-body","card-body","");
let div7=creatingElement("div","mb-4","confirmed","");
let div8=creatingElement("div","mb-4","recovered","");
let div9=creatingElement("div","mb-4","deadth","");
div6.append(div7,div8,div9);
div5.append(div6);
div2.append(div3,p1,div4,div5);
div1.append(div2);
document.body.append(div1);


var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var country=document.getElementById("country").value;
var url=`https://api.covid19api.com/dayone/country/${country}`;

covid(url);
});

async function covid(url){
try{
    let response=await fetch(url);
    let data=await response.json();
    let index=data.length-1;
    let confirmed=document.getElementById("confirmed");
    let recovered=document.getElementById("recovered");
    let deadth=document.getElementById("deadth");
    confirmed.innerHTML="";
    recovered.innerHTML="";
    deadth.innerHTML="";
    confirmed.append(` Total Confirmed cases :${data[index].Confirmed} `);
    recovered.append(`Total recovered cases :${data[index].Recovered}`);
    deadth.append(`Total deaths :${data[index].Deaths}`);
}
catch(error){
    console.log(error);
}

}