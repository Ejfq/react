/*
    동기식 = 블로킹 함수
*/

const fs = require("fs");
let data = fs.readFileSync("test.txt", "utf8");
console.log(data);
console.log("the end");