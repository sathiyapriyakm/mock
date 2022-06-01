function createLabel(labelname){
    let lElement=document.createElement("label");
    lElement.innerHTML=labelname;
    return lElement;
}

function createInput(typeval,value2,pHolder){
    let iElement=document.createElement("input");
    iElement.setAttribute("type",typeval);
    iElement.setAttribute("id",value2);
    iElement.setAttribute("placeholder",pHolder);
    iElement.setAttribute("required","");
    return iElement;
}
function createRadioCheck(typ,nameval,idval,value){
    let element=document.createElement("input");
    element.setAttribute("type",typ);
    element.setAttribute("name",nameval);
    element.setAttribute("id",idval);
    element.setAttribute("value",value);
    return element;
}
let div1=document.createElement("div");
div1.setAttribute("id","div1");
let div2=document.createElement("div");
div2.setAttribute("id","div2");
let div3=document.createElement("div");
div3.setAttribute("id","div3");

let heading=document.createElement("h2");
heading.setAttribute("id","title");
heading.innerHTML="Form Submission:";
let formdiv=document.createElement("div");
formdiv.setAttribute("id","f1");

let l1=createLabel("First Name");
let b1=document.createElement("br");
let i1=createInput("text","first-name","First name");
let br1=document.createElement("br");

let l2=createLabel("Last Name");
let b2=document.createElement("br");
let i2=createInput("text","lname","Last name");
let br2=document.createElement("br");

let l3=createLabel("Address");
let b3=document.createElement("br");
let i3=createInput("text","Add","Address");
let br3=document.createElement("br");

let l4=createLabel("Pincode");
let b4=document.createElement("br");
let i4=createInput("number","pin","pincode");
let br4=document.createElement("br");

let l5=createLabel("Gender");
let b5=document.createElement("br");
let i51=createRadioCheck("radio","gender","male","Male");
let l51=createLabel("Male");
l51.append(i51);
let i52=createRadioCheck("radio","gender","female","Female");
let l52=createLabel("Female");
l52.append(i52);
let br5=document.createElement("br");
let br51=document.createElement("br");

let l6=createLabel("Choice of food (select atleast two)");
let b6=document.createElement("br");
let l61=createLabel("North Indian");
let i61=createRadioCheck("checkbox","food","food1","North Indian");
l61.append(i61);
let b61=document.createElement("br");
l62=createLabel("South Indian");
let i62=createRadioCheck("checkbox","food","food2","South Indian");
l62.append(i62);
let b62=document.createElement("br");
l63=createLabel("Chinese");
let i63=createRadioCheck("checkbox","food","food3","chinese");
l63.append(i63);
let b63=document.createElement("br");
l64=createLabel("Japanese")
let i64=createRadioCheck("checkbox","food","food3","Japanese");
l64.append(i64);
let b64=document.createElement("br");
l65=createLabel("European");
let i65=createRadioCheck("checkbox","food","food3","European");
l65.append(i65);
let b65=document.createElement("br");

let l7=createLabel("state");
let b7=document.createElement("br");
let i7=createInput("text","state","state");
let br7=document.createElement("br");

let l8=createLabel("Country");
let b8=document.createElement("br");
let i8=createInput("text","ctry","Nationality");
let br8=document.createElement("br");

let i9=document.createElement("button");
i9.setAttribute("value","submit");
i9.innerHTML="submit";
i9.addEventListener("click",formEvaluvation);


let table1=document.createElement("table");
table1.setAttribute("id","t1");
let head2=document.createElement("h2");
head2.innerHTML="Database of Form:";
var newRow1=table1.insertRow(0);
  var cell00=newRow1.insertCell(0);
  var cell01=newRow1.insertCell(1);
  var cell02=newRow1.insertCell(2);
  var cell03=newRow1.insertCell(3);
  var cell04=newRow1.insertCell(4);
  var cell05=newRow1.insertCell(5);
  var cell06=newRow1.insertCell(6);
  var cell07=newRow1.insertCell(7);

  cell00.innerHTML="First Name";
  cell01.innerHTML="Last Name";
  cell02.innerHTML="Address";
  cell03.innerHTML="Pincode";
  cell04.innerHTML="Gender";
  cell05.innerHTML="Food";
  cell06.innerHTML="State";
  cell07.innerHTML="Country";
  let rowCount=1;


  formdiv.append(heading,l1,b1,i1,br1,l2,b2,i2,br2,l3,b3,i3,br3,l4,b4,i4,br4,l5,b5,l51,l52,br5,br51,l6,b6,l61,b61,l62,b62,l63,b63,l64,b64,l65,b65,l7,b7,i7,br7,l8,b8,i8,br8,i9);
div2.append(formdiv);
div3.append(head2,table1);
div1.append(div2,div3);
document.body.append(div1);

function formEvaluvation(){

  var table=document.getElementById("t1")
  var newRow=table.insertRow(rowCount);
  var cell0=newRow.insertCell(0);
  var cell1=newRow.insertCell(1);
  var cell2=newRow.insertCell(2);
  var cell3=newRow.insertCell(3);
  var cell4=newRow.insertCell(4);
  var cell5=newRow.insertCell(5);
  var cell6=newRow.insertCell(6);
  var cell7=newRow.insertCell(7);
   
  cell0.innerHTML=document.getElementById("first-name").value;
  cell1.innerHTML=document.getElementById("lname").value;
  cell2.innerHTML=document.getElementById("Add").value;
  cell3.innerHTML=document.getElementById("pin").value;
  cell4.innerHTML=document.querySelector('input[type="radio"]:checked').value;
  
  var foodlist = document. querySelectorAll('input[type="checkbox"]:checked');
  if(foodlist.length<2){
      alert("choose atleast 2 options out of 5 in food");
  }
  for (var fooditem of foodlist) {
  cell5.append(fooditem.value+' ');
  }
  cell6.innerHTML=document.getElementById("state").value;
  cell7.innerHTML=document.getElementById("ctry").value;
  rowCount++;

document.getElementById("first-name").value="";
document.getElementById("lname").value="";
document.getElementById("Add").value="";
document.getElementById("pin").value="";
var radio = document.querySelector('input[type="radio"]:checked');
radio. checked = false;
var checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
for (var item of checkbox) {
    item.checked = false;
}
document.getElementById("state").value="";
document.getElementById("ctry").value="";
}
 



