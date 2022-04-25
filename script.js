printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
let flag=0;
for(let j=3;j<n;j++)
if(n%j===0){
flag=1;
break;
}
if(flag===1)
return false;
else return true;
}

