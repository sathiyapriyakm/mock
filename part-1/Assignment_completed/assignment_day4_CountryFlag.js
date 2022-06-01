

 /*2.Use the rest countries API url and display all the country flags in console*/
 
//step 01:create a XHR object,this will create a new object which will interact with servers via api
var request=new XMLHttpRequest();
//step 02:opening a request ,this takes two parameters:"HTTP METHOD","API URL"
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 03:sending a request
request.send();
//step 04:once data successfully loaded from server(status code is 200)
request.onload=function(){
    //the data coming from the server is of type string, so convert it into object type
    var data=JSON.parse(request.response);
   for(var i=0;i<data.length;i++){
       //display all the country flags in console
       console.log(`Country flag:${data[i].flag} `);
   }
  
}