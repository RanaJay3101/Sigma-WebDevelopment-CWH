// -> IIFE 

async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("sleep");
            resolve();
        }, 2000);
    });
};




(async function main() {
    let a = await sleep();
let b = await sleep();
})()