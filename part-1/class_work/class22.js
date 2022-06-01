// var age=parseInt(prompt("Enter your age"));

// var p1=new Promise((resolve,reject)=>{
// if(age>=18)
//     resolve("You are eligible to vote!!");
// else
//     reject("you are not eligible to vote!!");
// });
// console.log(p1);

/*function foo(){
    return new Promise((resolve,reject)=>setTimeout(()=>resolve("This is resolved after 3 seconds"),3000));
}
foo().then((data)=>console.log(data)).catch((error)=>console.log(error));*/


// function foo(num){
// return new Promise((resolve,reject)=>setTimeout(()=>resolve(2*num),3000));
// }
// foo(2).then((data)=>{
//     console.log(data);
//     //foo(4)
//     return foo(data);
// }).then((data1)=>{
//     console.log(data1);
//     //foo(8)
//     return foo(data1);
// }).then((data2)=>console.log(data2)).catch((error)=>console.log(error));


// function foo(num){
// return new Promise((resolve,reject)=>setTimeout(()=>resolve(2*num),3000));
// }

// function bardata(num){
//     return new Promise((resolve,reject)=>setTimeout(()=>reject(12*num+"This is rejected number"),3000));
//     }
// foo(2).then((data)=>{
//     console.log(data);
//     //foo(4)
//     return foo(data);
// }).then((data1)=>{
//     console.log(data1);
//     //foo(8)
//     return bardata(data1);
// }).then((data2)=>console.log(data2)).catch((error)=>console.log(error));




//promsie.all
// var p1=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("Your promise1 is resolved!!"),3000);
//     }
//     else{
//         setTimeout(()=>reject("Your promise1 is rejected!!!"),3000);
//     }
        
    
// });
// var p2=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("Your promise2 is resolved!!"),2000);
//     }
//     else{
//         setTimeout(()=>reject("Your promise2 is rejected!!!"),2000);
//     }
        
    
// });

// var p3=new Promise((resolve,reject)=>{
//     if(false){
//         setTimeout(()=>resolve("Your promise3 is resolved!!"),4000);
//     }
//     else{
//         setTimeout(()=>reject("Your promise3 is rejected!!!"),4000);
//     }
        
    
// });

// // p1.then((data)=>console.log(data)).catch((error)=>console.log(error));
// // p2.then((data1)=>console.log(data1)).catch((error)=>console.log(error));
// // p3.then((data2)=>console.log(data2)).catch((error)=>console.log(error));
// Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));

//promise.allsettled()

var p1=new Promise((resolve,reject)=>resolve("this is resolved p1"));
var p2=new Promise((resolve,reject)=>reject("this is reject p2"));
Promise.allSettled([p1,p2]).then((data)=>console.log(data)).catch((error)=>console.log(error));


