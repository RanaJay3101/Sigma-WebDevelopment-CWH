// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data received');
//         }, 5000);
//     });
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(x);

    let data = await x.json();

    console.log(data);
//       .then(response => response.json())
//       .then(json => console.log(json));
// }
return 450;
}

async function main(){
console.log('Fetching data');

console.log('Do someething else');

console.log("Load data");



let data = await getData();
console.log(data);

}

main();

// data.then((data2) => {
//     console.log(data);

// console.log('Data fetched');
// });