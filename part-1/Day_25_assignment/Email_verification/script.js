
//code to verify the  entered email is valid or not
var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var email=document.getElementById("searchemail").value;
var url=`https://api.eva.pingutil.com/email?email=${email}`;
emailverification(url);
});
async function emailverification(url){
try{
    let response=await fetch(url);
    let data=await response.json();
    let status=document.getElementById("status");
    let deliverable=document.getElementById("deliverable");
    status.innerHTML="";
    deliverable.innerHTML="";
    status.append(`Status of vetification :${data.status}`);
    if(data.data.deliverable===true)
        deliverable.append(`The user email is valid and deliverable`);  
    else
        deliverable.append(`The user email is invalid and cannot be delivered`); 
}
catch(error){
    console.log(error);
}

}