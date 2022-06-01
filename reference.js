// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let length=+userInput[0];
let arr1=userInput[1].split(" ").map(Number);
var l, r, min_sum, sum, min_l, min_r;	
	/* Initialization of values */
	min_l = 0;
	min_r = 1;
	min_sum = arr1[0] + arr1[1];
	
	for(l = 0; l < length - 1; l++)
	{
		for(r = l + 1; r < length; r++)
		{
			sum = arr1[l] + arr1[r];
			if(Math.abs(min_sum) > Math.abs(sum))
		{
			min_sum = sum;
			min_l = l;
			min_r = r;
		}
	}
	}
	console.log(`${arr[min_r]} ${arr[min_l]}`);
//end-here
});