let arr = [ 1, 7 ,22, 5]
let arr2 = arr.map( a => a * 2);
console.log(arr2)


let emps = [{ name : 'park' , age : 20 , point : 100} , { name : 'kim' , age : 14, point : 60} , { name : 'lee' , age: 30 ,point : 77}]


let emps2 = emps.map (a => {if(a.age >= 20 ) a.auth = true;
                            else a.auth = false
                            return a
} );


console.log(emps2)



let sumPoint = emps.reduce( (a, b) => a + b.point ,1000)




console.log(sumPoint);
console.log(emps[0].point)

let arry = [ 1, 3, 15 , 61]

let sum = arry.reduce( (a,b) => a + b , 0);
console.log(sum);

sum = arry.reduce(function(a,b){
    return a + b 
}, 1);
console.log(sum)


