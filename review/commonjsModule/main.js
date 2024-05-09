//commonjs 모듈 node.js 사용하는 방식

//1. myarray 모듈 임포트

const totalPoint = require("./myarray")

//2. 함수 실행
let result = totalPoint();
console.log(result)