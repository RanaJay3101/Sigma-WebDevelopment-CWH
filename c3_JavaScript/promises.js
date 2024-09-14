console.log("this is working");
 

let prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Yes i have done the work");
        resolve("jay");
    },3000);
});

prom1.then((name)=>{
    console.log(`The work is done by ${name}`);
})
.catch(()=>{
    console.log("This is catch block");
})
.finally(()=>{
    console.log("This is finally block");
});

/*Promis documents
FreeCodecamp -> https://www.freecodecamp.org/news/what-is-promise-in-javascript-for-beginners/
https://javascript.info/promise-basics

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

*/