// // console.log is a function to display on the concole window not on the main webpage 
// console.log("code is running")
// console.log("hello programmer")
// //creating a object
// let o={
//     name:"Shlok",salary:"100cores",personality:"handsome"
// }
// console.log(o);
// o.salary="500croes";
// console.log(o);  // changing the salary 
// o.bheaviour="good";
// console.log(o);  // adding a new property to the object




// for(i=0;i<6;i++)
// {
//     console.log(i);
// }//normal for loop 

// let obj={name:"shlok",clas:"ty",rollno:"211032"}
// for (const key in obj) {
    
//         const element = obj[key];
//         console.log(key);
        
//     }//for in to iterate throght the object
    //for of to itterate through the array


    // function nice(name) {
    //     console.log("hi"+name+"how are you");
    //     console.log("hi"+name+"nice to meet you");
    //     console.log("hi"+name+"have a great day");
    //     console.log("hi"+name+"work smart");
        
    // }
    // nice("shlok");  // use of function



    // function fun(a,b) {
    //     return a+b
        
    // }
    // result=fun(3,5)
    // console.log(result);  // use of function with return statement
    

    // function fun(a,b,c=3) {
    //     console.log(a,b,c)
    //         return a+b
            
    //     }
    //      result=fun(3,5)
    //     console.log(result);  // use of function with return statement


    // we can also use the function with the help of arrow function
    // const sum=(a,b)=>
    // {
    //     let c=a+b;
    //     return c;
    // }
    // let y=sum(1,3)
    // console.log(y);



    // single back tick is used in string instead of double inverted quotes , `` inside a string 
    //eg
    // let eg=console.log(`hi my name is shlok`);
    //  let first="crazy"
    // let second="handsome"
    // let third="innocent"
    //  let hi =console.log(`${first} ${second} ${third}`)
// herre to use back tick we write $ symbol with the help of curly brackets inside a string 




//promises,async ,await
// promise is a function use to call another function inside a function
// asyns is asynchronous type for javascript where js doesnot wait for particular data to process and executes the rest of the data 
// await is used to wait for the particular data to process and then execute the rest of the data

// async function getdata() {
//     //simulate getting data from the server 
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//             }, 2000);
        
//     })
// }

// async function main() {
//     console.log("loading modules")
//     console.log("do something else")
//     console.log("load data")
//     let data=await getdata()
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")
    
    
// }
// main()



