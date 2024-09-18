// let random=Math.random();



// let a =prompt("enter a number")
// let b=prompt("enter a second number")
// let c=prompt("enter a opertaor")
  
// let obj={
//     "+":"-",
//     "-":"*",
//     "*":"/",
//     "/":"**"
// }
//  if (random>0.1){
//      alert(`the result  is ${eval (`${a} ${c} ${b}`)} `)
//     document.write(random)
//  }
//  else{
//     c=obj[c]
//     alert(`the result  is ${eval (`${a} ${c} ${b}`)} `)
//     document.write(random)

//  }
 
// let random=Math.floor(Math.random()*3)+1;
// let r1=Math.floor(Math.random()*3)+1;
// let r2=Math.floor(Math.random()*3)+1;

// let obj={
//     "1":"amazing",
//     "2":"crazy",
//     "3":"fire"
// }
// let obj1={
//     "1":"Engine",
//     "2":"food",
//     "3":"garments"
// }
// let obj2={
//     "1":"bros",
//     "2":"limited",
//     "3":"hub"
// }
// let a=obj[random]
// let b=obj1[r1]
// let c=obj2[r2]

// document.write(a+" "+b+" "+c)
a=6;

function fact(a){
     let arr=Array.from(Array(a+1).keys())
     document.write(arr)
     let f= arr.slice(1).reduce((c,b)=>{
        return c*b

     })
     document.write(`\b`+f)

     
}

fact(a)
 

