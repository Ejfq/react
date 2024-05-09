let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1; // 얕은복사
let arr4 = arr1.map(a => a) // 깊은복사
let arr5 = [...arr1] // 깊은복사

let arr6 = [arr1 , arr2]
console.log(arr6[1][0])