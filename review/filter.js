const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.indexOf('e'));
console.log(result)

let emps = [{ name : 'park' , age : 20 , point : 100} , { name : 'kim' , age : 14, point : 60} , { name : 'lee' , age : 30,  point : 77}]

let result2 = emps.filter(emp => emp.age >= 20);
console.log(result2)

console.log(...emps)
console.log(emps)