//1.color the span/div element content when the user moves the mouse over the element.

var div=document.createElement("div");
div.innerHTML="this is div";
div.addEventListener("mouseover",foo);
document.body.append(div);

function foo(){
    div.style="color:red";

}   

//2.use prompt to read a value from user and display it in span element.

var button=document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-primary";
button.innerHTML="Click me";
button.addEventListener("click",readpromt);
document.body.append(button);

function readpromt(){
   
    var span2=document.createElement("span");
    span2.innerHTML=prompt("Enter the content for span ");
    document.body.append(span2);
}
//3. Display the x any y co-ordinates in a <span> tag when you click on a tag.
document.querySelector("div").addEventListener("click",xycapture);

function xycapture(target){
    var div2= document.createElement("div");
    div2.innerHTML=`The mouse co-ordinate is:${target.clientX}and y co-ordinate is ${target.clientY} `
    document.body.append(div2);
}

//4.Write a js code to count character in text area

document.querySelector("#txt").addEventListener("keyup",txtcount);
function txtcount(event){
console.log(event.target.value.length);
 
}

 