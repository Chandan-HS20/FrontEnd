let random=Math.random();



let a =prompt("enter a number");
let b=prompt("enter a second number");
let c=prompt("enter a opertaor")
  
let obj={
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"**"
}
 if (random>0.1){
     alert("the result  is ${eval (`$(a) $(c) $(b)')} ");

 }
 else{
    c=obj[c];
    alert("the result  is ${eval (`$(a) $(c) $(b)')} ");

 }