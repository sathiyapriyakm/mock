let div1=document.createElement("div");
div1.className="container";
div1.setAttribute("id","myDiv");
document.body.append(div1);

function foo(){
    f10();
    setTimeout(()=>div1.innerHTML="Happy Independence Day",11000);
}
function f10(){
    f9()
    setTimeout(()=>div1.innerHTML="1",10000);
}
function f9(){
    f8();
    setTimeout(()=>div1.innerHTML="2",9000);
}
function f8(){
    f7();
    setTimeout(()=>div1.innerHTML="3",8000);
}
function f7(){
    f6();
    setTimeout(()=>div1.innerHTML="4",7000);
}
function f6(){
    f5();
    setTimeout(()=>div1.innerHTML="5",6000);
}
function f5(){
    f4();
    setTimeout(()=>div1.innerHTML="6",5000);
}
function f4(){
    f3();
    setTimeout(()=>div1.innerHTML="7",4000);
}
function f3(){
    f2()
    setTimeout(()=>div1.innerHTML="8",3000);
}
function f2(){
    f1();
    setTimeout(()=>div1.innerHTML="9",2000);
}
function f1(){
    setTimeout(()=>div1.innerHTML="10",1000);
}
foo();

