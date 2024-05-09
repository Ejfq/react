//1. 모둘 전체 import -> as 객체 이름지정
// import * as md from "./module.js"; 
// md.module("hi")
// md.modulea("module run");

//2. 필요한 것만 import
// import {module} from "./module.js"; 
// module("hi")

import {movie} from "../promise_await.js";

movie()

import {totalPoint} from "./myarray.js"

console.log(totalPoint());