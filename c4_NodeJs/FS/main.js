import fs from 'fs';

// console.log(fs);
console.log("starting");
// fs.writeFileSync('hello.txt', 'Hello from Node.js');
fs.writeFile("hello.txt", "Hello from Node.js", (err) => {
    if (err) throw err;
    console.log("File written");
});
console.log("ebding");