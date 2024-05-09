function hap (first, ...rest){
    return rest.reduce( (a,b) => a + b , first) 
}

function hap1(first, ...rest){
   let total = first;
   for (value of rest){
    total = total + value
   }
   return total
}

console.log(hap(10,20,30,40));
console.log(hap1(20,30,40,50));


emps = [{ name : 'park' , age : 20} , { name : 'kim' , age : 14} , { name : 'lee' , age : 30}]


let [emp1, emp2, emp3] = emps



//첫번째 사원 이름
console.log(emp1.name)

//object 분해
let {name , age} = emp1;
console.log(name)


const {empname, empage} = { empname : 'park' , age : 20, point: 100};
console.log(empname , empage)


const [a,b,...c] = [1,2,3];
console.log(b)

