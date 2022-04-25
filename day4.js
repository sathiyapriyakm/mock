/*
	1.	How to compare two JSON have the same properties without order? 
	    a.	var obj1 = { name: "Person 1", age:5 }; 
	    b.	var obj2 = { age:5, name: "Person 1" };*/

      /*  var obj1 = { name: "Person 1", age:5 };
        var obj2 = { age:5, name: "Person 1" };
        
        console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
        //console.log(Object.entries(obj1).toString() === Object.entries(obj2).toString());
        
        
        var flag=true;
        
        if(Object.keys(obj1).length==Object.keys(obj2).length){
            for(key in obj1) { 
                if(obj1[key] == obj2[key]) {
                    continue;
                }
                else {
                    flag=false;
                    break;
                }
            }
        }
        else {
            flag=false;
        }
        console.log("is object equal::"+flag);*/
    
     /*2.Use the rest countries API url and display all the country flags in console*/
     /*3.Use the same rest countries and print all countries name, region, sub region and population*/
    
    //4 steps invloved here
    //step 01:create a XHR object
    //Need:this will create a new object which will have 
    //the interaction with servers via api
    var request=new XMLHttpRequest();
    //step 02:opening a request 
    //takes two parameters:"HTTP METHOD","API URL"
    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    //step 03:sending a request
    request.send();
    //step 04:once data successfully loaded from server
    //or status code is 200
    request.onload=function(){
        //the data coming from the server is of type string
        //so we are converting into the object
        var data=JSON.parse(request.response);
       // console.log(data);
       for(var i=0;i<data.length;i++){
           //2.Use the rest countries API url and display all the country flags in console
           console.log(`Country flag:${data[i].flag} `);
       }
       for(var i=0;i<data.length;i++){
        //3.Use the same rest countries and print all countries name, region, sub region and population
        console.log(`Countries Name:${data[i].name}  Countries Region:${data[i].region}  Countries SubRegion:${data[i].subregion}   Countries Region:${data[i].population}`);
    }
    }