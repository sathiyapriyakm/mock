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

let heading=document.createElement("h4");
heading.innerHTML="Form Submission:"
let form=document.createElement("form");
form.setAttribute("id","f1");

let l1=createLabel("First Name");
let b1=document.createElement("br");
let i1=createInput("text","fname","First name");
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
let head2=document.createElement("h4");
head2.innerHTML="Databaseof Form";
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
/*let tr1=document.createElement("tr");
tr1.setAttribute("id","tr1");
let th1=document.createElement("th");
th1.innerHTML="First Name";
let th2=document.createElement("th");
th2.innerHTML="Last Name";
let th3=document.createElement("th");
th3.innerHTML="Address";
let th4=document.createElement("th");
th4.innerHTML="Pin Code";
let th5=document.createElement("th");
th5.innerHTML="Gender";
let th6=document.createElement("th");
th6.innerHTML="Food";
let th7=document.createElement("th");
th7.innerHTML="State";
let th8=document.createElement("th");
th8.innerHTML="Country";*/
//let rowCount=1;

//tr1.append(th1,th2,th3,th4,th5,th6,th7,th8,);
//table1.appendChild(tr1);
div3.append(head2,table1);
form.append(heading,l1,b1,i1,br1,l2,b2,i2,br2,l3,b3,i3,br3,l4,b4,i4,br4,l5,b5,l51,l52,br5,br51,l6,b6,l61,b61,l62,b62,l63,b63,l64,b64,l65,b65,l7,b7,i7,br7,l8,b8,i8,br8,i9);
div2.append(form);
div1.append(div2,div3);
document.body.append(div1);

function formEvaluvation(){
   
  let firstName=document.getElementById("fname").value;
  let lastName=document.getElementById("lname").value;
  let address=document.getElementById("Add").value;
  let pincode=document.getElementById("pin").value;
  if(document.getElementById('male').checked) {
    let gender="Male";
  }else if(document.getElementById('female').checked) {
    let gender="Female";
  }else{
    let gender="undefined";
  }
  var foodlist = document. querySelectorAll('input[type="checkbox"]:checked');
  if(foodlist.length<2){
    let foodType="undefined";
      alert("choose atleast 2 options out of 5 in food");
  }else{
  let foodType=foodlist.filter((ele)=>ele.value);
  foodType=foodType.join(",");
  }
  let state=document.getElementById("state").value;
  let country=document.getElementById("ctry").value;

  var table=document.getElementById("t1")
  var newRow=table.insertRow(table.rows.length);
  var cell0=newRow.insertCell();
  var cell1=newRow.insertCell();
  var cell2=newRow.insertCell();
  var cell3=newRow.insertCell();
  var cell4=newRow.insertCell();
  var cell5=newRow.insertCell();
  var cell6=newRow.insertCell();
  var cell7=newRow.insertCell();

  cell0.innerHTML=firstName;
  cell1.innerHTML=lastName;
  cell2.innerHTML=address;
  cell3.innerHTML=pincode;
  cell4.innerHTML=gender;
  cell5.innerHTML=foodType;
  cell6.innerHTML=state;
  cell7.innerHTML=country;
  //rowCount++;
  
}
 



