//CRUD with MockAPI
/*let url="https://627dfc9db75a25d3f3af4510.mockapi.io/students";
fetch(url).then((data)=>data.json()).then((value)=>console.log(value));
*/
//Async await
/*async function foo(){

    let res=await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    console.log(res);
    let result=await res.json();
    console.log(result);
}
foo();*/

//  try catch with await

/*
    async function foo(){
        try {
        console.log("app execution......");
        let res= await bar();
        console.log(res);
        console.log("this is a testing code!!!");
        } catch (error) {
            console.log(error);
        }
        
        // console.log(result);
        }
        
        
        foo();*/
        
       /* function bar(){
            return new Promise((resolve,reject)=>setTimeout(()=>reject(new Error("Code failed!!")),3000));
        }

        // await-chaining
        function foo(num){
            return new Promise()
        }
        async function bar(){
            try{
                var res1=await foo(2);
                console.log(res1);

                var res2=await foo(res1);
                console.log(res2);

                var res3=await foo(res2);
                console.log(res3);
            }catch(error){
                console.log(error);
            }
        }
        bar();*/


