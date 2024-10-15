//exercise problems 


/*Create a faulty calculator using js
this faulty calculator does the following
1. it takes two no as ip from user
2. it performs wrong operation as follows

+ ----> -
* -----> +
- ----->/
/ ---->**


It performs wrong opertion 10 % of the times 

*/
// Ans
// let random=Math.random()
// console.log(random)// used console here as it will tell the console that the operation will be faulty or not (is less than 0.10 which is 10percent)
// let a=prompt("enter first no");
// let c=prompt("enter operation");
// let b=prompt("enter second no");

// let obj={
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**"
// }

// if(random >0.1)//perfrom correct calculation
// {
//     console.log('the result is ${a} ${c} ${b}')
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }
// else{
//     //performs wrong calculation
//     c=obj[c];
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }









/* create a business name geneartor by combining list of adjectives and shop name and another word
without using array 
adjectives :
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word
Bros
Limited
Hub

*/

// let rand=Math.random();
// let first,second,third;
// //generate first word
// if(rand<0.33)
// {
//     first="Crazy";
// }
// else if(rand>0.33 && rand<0.66)
// {
//     first="Amazing";
// }
// else 
// {
//     first="Fire";
// }

// //generate second word
// rand=Math.random();
// if(rand<0.33)
// {
//     second="Engine";
// }
// else if(rand>0.33 && rand<0.66)
// {
//     second="Foods";
// }
// else 
// {
//     second="Garments";
// }

// //generate third word 
// rand=Math.random();
// if(rand<0.33)
// {
//     third="Bros";
// }
// else if(rand>0.33 && rand<0.66)
// {
//     third="Limited";
// }
// else 
// {
//     third="Hub";
// }

// console.log(`${first} ${second} ${third}`);
// we have solved without using array so its kindoff lengthy 









// write a program to calculate factorial using reduce and for loop methods 
//  using reduce methods
//  let a=6;
//   function factorial(number)
//   {
//     let arr=Array.from(Array(number+1).keys())
//     // shotcut to create an array
//     // Array.from iwant to create an Array
//     // .keys from 0 to arr-1
//     // here i want to start from 1 so chop 1
//     let c=arr.slice(1,).reduce((a,b)=> a*b)
//     return c
//   }
// using for loop 
//   function factfor(number)
//   {
//     let fac=1;
//     for (let index = 1; index <= number; index++) {
//         fac=fac*index;

//     }
//     return fac;
//   }
//    console.log(factorial(a));
//    console.log(factfor(a));








// given 5 box assigns random colorand a random bg to each box using DOM concepts 
// console.log("script.js intializing")
// method 1: 
// let boxes=document.getElementsByClassName("box")
//method 2 :
// let boxes=document.querySelector(".container").children

// function getRandomColor()
// {
//     let val1=Math.ceil(0+Math.random()*255);
//     let val2=Math.ceil(0+Math.random()*255);
//     let val3=Math.ceil(0+Math.random()*255);
//     return `rgb(${val1} ${val2} ${val3})`

// }
// Array.from(boxes).forEach(e=>{
//     e.style.background=getRandomColor()
//     e.style.color=getRandomColor()
// })








// hackers terminal 
//create a hacking simulator which has green background and it shows these messages with random delay of 1 to 10secounds

// Intializing Hacking...
// Reading your Files... 
// Password Files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...


// The three dots must blink so that looks like a real terminal


// const addItem = async (item) => {
//     await randomDelay();
//     let div = document.createElement("div");
//     div.innerHTML = item;
//     document.body.append(div)
// }

// const randomDelay = () => {
//     return new Promise((resolve, reject) => {
//         timeout = 1 + 6 * Math.random();
//         setTimeout(() => {
//             resolve()
//         }, timeout * 1000);
//     })
// }

// async function main() {


//     let t = setInterval(() => {
//         let last = document.body.getElementsByTagName("div");
//         last = last[last.length - 1]
//         if(last.innerHTML.endsWith("...")){
//             last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
//         }
//         else{

//             last.innerHTML = last.innerHTML + "."
//         }

//     }, 100);


//     let text = ["Initialized Hacking now reading your data",
//         "Reading your Files",
//         "Password files Detected",
//         "Sending all passwords and personal files to server",
//         "Cleaning up"]

//     for (const item of text) {
//         await addItem(item)
//     }

//     await randomDelay()
//     clearInterval(t)
    
// }
// main()



