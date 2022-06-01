
//code here to fetch the kural and its meaning from API
var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var kural=document.getElementById("searchkural").value;
if((parseInt(kural)<=1330)&&(parseInt(kural)>=1)){
var url=`https://api-thirukkural.vercel.app/api?num=${kural}`;
kuralmeaning(url);
}
else{
    alert("Enter the valid number");
}
});
async function kuralmeaning(url){
try{
    let response=await fetch(url);
    let data=await response.json();
    let adhikaram=document.getElementById("Adhikaram");
    let kural=document.getElementById("kural");
    let meaning=document.getElementById("meaning");
    adhikaram.innerHTML="";
    kural.innerHTML="";
    meaning.innerHTML="";
    adhikaram.append(`Chapter  :${data.chap_eng}`);
    kural.append(`Kural  :${data.eng}`);
    meaning.append(`Meaning  :${data.eng_exp}`);
}
catch(error){
    console.log(error);
}

}